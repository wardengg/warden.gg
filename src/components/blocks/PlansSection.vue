<template>
    <section class="plans-section">
        <div class="wrap">
            <h1 class="section-header">Plans</h1>
            <div class="row justify-content-center">
                <PlansItem v-for="plan in plans" :key="plan.id" :title="plan.title.rendered" :price="plan.acf.price" :ram="plan.acf.ram" :recommended="plan.acf.recommended_slots" :whmcs_link="plan.acf.whmcs_link" :gameserver_extras="plan.acf.gameserver_extras"/>
            </div>
            <div class="sidenote">
                <span v-if="is_minecraft" class="sidenote-line"><span class="fyi-asterisk">*</span> Please note that this is just a recommendation. All Minecraft server plans are unlimited. We are not liable if your server becomes unresponsive if you exceed this recommendation. </span>
                <span class="sidenote-line"><span class="fyi-asterisk">**</span> Please note that all prices are in AUD.</span>
            </div>
        </div>
    </section>
</template>

<script>
import PlansItem from '../../components/partials/PlansItem.vue'

export default {
    name: 'PlansSection',
    props: {
        gameservertypeid: Number,
        is_minecraft: Boolean
    },
    components: {
        PlansItem
    },
    data(){
        return{
            plans: []
        }
    },
    mounted(){
        // Fetch all gameservers based off the typeid
        fetch( 'https://wp.warden.gg/wp-json/wp/v2/gameserver?gameserver-type=' + this.gameservertypeid + '&order=asc' )
            .then( ( r ) => r.json() )
            .then( ( res ) => this.plans = res.map( x => x ) );
    }
}
</script>