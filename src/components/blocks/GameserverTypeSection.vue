<template>
    <section class="gameserver-type-section">
        <div class="gameserver-type-inner">
            <div class="wrap">
                <h1 class="section-header">Our Games</h1>
                <div class="row justify-content-center">
                    <GameserverTypeItem v-for="item in gameserver_types" :key="item.id" :name="item.name" :from="item.acf.from" :extras="item.acf.gameserver_type_extras" :to="item.acf.link_to" :background="item.acf.gradient_background"/>
                </div>
                <div class="button-wrap d-flex justify-content-center">
                    <router-link to="/games" class="btn btn-large">View All Games</router-link>
                </div>
            </div>
        </div>
    </section><!--/.gameserver-type-section-->
</template>

<script>
import GameserverTypeItem from '../../components/partials/GameserverTypeItem.vue'
export default {
    name: 'GameserverTypeSection',
    components: {
        GameserverTypeItem
    },
    data(){
        return {
            gameserver_types: []
        }
    },
    mounted(){
        // Fetch Gameserver Types
        fetch( 'https://wp.warden.gg/wp-json/wp/v2/gameserver-type?orderby=menu_order' )
            .then( ( r ) => r.json() )
            .then( ( res ) => this.gameserver_types = res.map( x => x ) );
    }
}
</script>