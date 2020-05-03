<template>
    <div class="home">
        <VideoBanner/>
        <GameserverTypeSection/>
        <WhyWardenSection/>
    </div>
</template>

<script>
import VideoBanner from '../components/blocks/VideoBanner.vue'
import GameserverTypeSection from '../components/blocks/GameserverTypeSection.vue'
import WhyWardenSection from '../components/blocks/WhyWardenSection.vue'
export default {
    name: 'Home',
    components:{
        VideoBanner,
        GameserverTypeSection,
        WhyWardenSection
    }
}
</script>