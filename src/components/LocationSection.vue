<template>
    <section class="location-section">
        <div class="wrap">
            <h1 class="section-header">Our Locations</h1>
            <div class="location-map">
                <img src="/static/images/world.svg" alt="Locations for Warden.gg" height="1920" width="1080">
                <LocationMarker v-for="marker in locations" :key="marker.id" :title="marker.title.rendered" :country="marker.country[0]" :top="marker.acf.top" :left="marker.acf.left" :bottom="marker.acf.bottom" :right="marker.acf.right"/>
            </div>
        </div>
    </section>
</template>

<script>
import LocationMarker from '../components/LocationMarker.vue'
export default {
    name: 'LocationSection',
    components: {
        LocationMarker
    },
    data(){
        return {
            locations: []
        }
    },
    mounted(){
        // Fetch Countries
        fetch( 'https://wp.warden.gg/wp-json/wp/v2/location' )
            .then( ( r ) => r.json() )
            .then( ( res ) => this.locations = res.map( x => x ) );
    }
}
</script>