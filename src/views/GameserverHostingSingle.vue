<template>
    <div class="gameserver-hosting">
        <ImageBanner :image="chosenImageBannerURL"/>
        <PlansSection :title="game.name" :gameservertypeid="gameservertypeid" :show_title="false"/>
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
        PlansSection,
        PlansIncludeSection
    },
    props: [
        'gameservertypeid'
    ],
    data(){
        return{
            game: {},
            chosenImageBannerURL: '',
        }
    },
    async created(){
        const games = await axios.get( 'https://wp.warden.gg/wp-json/wp/v2/gameserver-type/' + this.gameservertypeid );

        if ( games.data ){
            this.game = games.data;

            this.chosenImageBannerURL = this.game.acf.banner_image;
        }
    },
    computed: {
        getGameserverTypeID(){
            return this.$route.gameservertypeid;
        }
    }
}
</script>