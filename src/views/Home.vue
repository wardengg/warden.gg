<template>
    <div class="home">
        <VideoBanner/>
        <GameserverTypeSection/>
    </div>
</template>

<script>
import VideoBanner from '../components/blocks/VideoBanner.vue'
import GameserverTypeSection from '../components/blocks/GameserverTypeSection.vue'
export default {
    name: 'Home',
    components:{
        VideoBanner,
        GameserverTypeSection,
    }
}
</script>