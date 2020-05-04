<template>
    <div class="minecraft-hosting">
        <ImageBanner v-if="ImageBannerURL" :image="ImageBannerURL"/>
        <PlansSection v-if="TypeID" :gameservertypeid="TypeID" :is_minecraft="true"/>
        <PlansIncludeSection/>
    </div>
</template>

<script>
import ImageBanner from '../components/blocks/ImageBanner.vue'
import PlansSection from '../components/blocks/PlansSection.vue'
import PlansIncludeSection from '../components/blocks/PlansIncludeSection.vue'

export default {
    name: 'Home',
    components:{
        ImageBanner,
        PlansSection,
        PlansIncludeSection
    },
    data(){
        return{
            TypeID: '',
            ImageBannerURL: '',
        }
    },
    methods: {
        setState( obj ){
            Object.assign( this, obj );
        }
    },
    mounted(){
        // Fetch MinecraftData from WordPress
        fetch( 'https://wp.warden.gg/wp-json/wp/v2/gameserver-type/2' )
            .then( ( r ) => r.json() )
            .then( ( res ) => this.setState( { TypeID: res.id, ImageBannerURL: res.acf.banner_image } ) );
    }
}
</script>