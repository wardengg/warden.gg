<template>
    <div class="gameserver-hosting">
        <ImageBanner v-if="chosenImageBannerURL" :image="chosenImageBannerURL"/>
    </div>
</template>

<script>
import ImageBanner from '../components/blocks/ImageBanner.vue'
// import PlansSection from '../components/blocks/PlansSection.vue'
import PlansIncludeSection from '../components/blocks/PlansIncludeSection.vue'

export default {
    name: 'Home',
    components:{
        ImageBanner,
        // PlansSection,
        // PlansIncludeSection
    },
    data(){
        return{
            games: [],
            chosenImageBannerURL: ''
        }
    },
    mounted(){
        // Fetch MinecraftData from WordPress
        fetch( 'https://wp.warden.gg/wp-json/wp/v2/gameserver-type?orderby=menu_order' )
            .then( ( r ) => r.json() )
            .then( ( res ) => this.games = res.map( x => x ) );
    },
    updated(){
        // Randomly select an image banner from the array
        const chosenNumber = Math.floor( Math.random() * this.games.length );
        this.chosenImageBannerURL = this.games[chosenNumber].acf.banner_image;
    }
}
</script>