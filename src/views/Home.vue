<template>
    <div class="home">
        <VideoBanner/>
        <div class="gameserver-type-wrapper">
            <GameserverType v-for="item in gameserver_types" :key="item.name" :name="item.name"/>
        </div><!--/.gameserver-type-wrapper-->
    </div>
</template>

<script>
import VideoBanner from '../components/VideoBanner.vue'
import GameserverType from '../components/GameserverType.vue'
export default {
    name: 'Home',
    components:{
        VideoBanner,
        GameserverType
    },
    data(){
        return {
            gameserver_types: []
        }
    },
    mounted(){
        // Fetch Gameserver Types
        fetch( 'https://wp.warden.gg/wp-json/wp/v2/gameserver-type' )
            .then( ( r ) => r.json() )
            .then( ( res ) => this.gameserver_types = res.map( x => x ) );
    }
}
</script>