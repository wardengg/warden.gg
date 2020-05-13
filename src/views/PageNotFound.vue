<template>
    <div class="404">
        <VideoBanner :video_link="'/static/videos/404.webm'" :video_heading="'Page Not Found'"/>
    </div>
</template>

<script>
import VideoBanner from '../components/blocks/VideoBanner.vue';
export default {
    name: 'PageNotFound',
    components: {
        VideoBanner
    }
}
</script>