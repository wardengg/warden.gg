<template>
    <div class="home">
        <VideoBanner/>
        <GameserverTypeSection/>
        <LocationSection/>
    </div>
</template>

<script>
import VideoBanner from '../components/VideoBanner.vue'
import GameserverTypeSection from '../components/GameserverTypeSection.vue'
import LocationSection from '../components/LocationSection.vue'
export default {
    name: 'Home',
    components:{
        VideoBanner,
        GameserverTypeSection,
        LocationSection
    }
}
</script>