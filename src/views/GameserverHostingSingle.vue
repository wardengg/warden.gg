<template>
    <div class="gameserver-hosting">
        <ImageBanner :image="chosenImageBannerURL"/>
        <!-- <PlansSection :title="game.name" :gameservertypeid="game.id"/> -->
        <PlansIncludeSection/>
    </div>
</template>

<script>
import axios from 'axios';
import ImageBanner from '../components/blocks/ImageBanner.vue'
import PlansSection from '../components/blocks/PlansSection.vue'
import PlansIncludeSection from '../components/blocks/PlansIncludeSection.vue'

export default {
    name: 'Home',
    components:{
        ImageBanner,
        // PlansSection,
        PlansIncludeSection
    },
    data(){
        return{
            games: {},
            chosenImageBannerURL: '',

        }
    },
    async created(){
        console.log( this.$route );
        const games = await axios.get( 'https://wp.warden.gg/wp-json/wp/v2/gameserver-type/' + this.getGameserverTypeID );

        if ( games.data ){
            this.games = games.data;

            this.chosenImageBannerURL = this.games.acf.banner_image;
        }
    },
    computed: {
        getGameserverTypeID(){
            return this.$route.gameservertypeid;
        }
    }
}
</script>