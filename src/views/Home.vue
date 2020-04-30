<template>
    <div class="home">
        <VideoBanner/>
        <GameserverTypeSection/>
    </div>
</template>

<script>
import VideoBanner from '../components/VideoBanner.vue'
import GameserverTypeSection from '../components/GameserverTypeSection.vue'
export default {
    name: 'Home',
    components:{
        VideoBanner,
        GameserverTypeSection
    }
}
</script>