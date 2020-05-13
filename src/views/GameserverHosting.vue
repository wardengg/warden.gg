<template>
    <div class="gameserver-hosting">
        <ImageBanner :image="chosenImageBannerURL"/>
        <section v-for="game in games" v-bind:key="game.id" class="gameserver-title">
            <PlansSection :title="game.name" :gameservertypeid="game.id"/>
        </section>
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
    data(){
        return{
            games: [],
            chosenImageBannerURL: ''
        }
    },
    async created(){
        const games = await axios.get( 'https://wp.warden.gg/wp-json/wp/v2/gameserver-type?orderby=menu_order&exclude=2' );

        if ( games.data ){
            this.games = games.data;

            // Randomly select an image banner from the array
            const chosenNumber = Math.floor( Math.random() * this.games.length );
            this.chosenImageBannerURL = this.games[chosenNumber].acf.banner_image;
        }
    }
}
</script>