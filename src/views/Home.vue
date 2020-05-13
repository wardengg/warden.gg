<template>
    <div class="home">
        <VideoBanner :video_link="'/static/videos/videobanner.mp4'" :video_heading="'View our comprehensive selection of games<br/>and experience world-class reliability'"/>
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
        WhyWardenSection,
    }
}
</script>