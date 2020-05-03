<template>
    <div class="404">
        <ImageBanner :full_height="true" :image="'/static/images/404.jpg'"/>
    </div>
</template>

<script>
import ImageBanner from '../components/blocks/ImageBanner.vue';
export default {
    name: 'PageNotFound',
    components: {
        ImageBanner
    }
}
</script>