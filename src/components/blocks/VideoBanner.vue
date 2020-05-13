<template>
    <section class="video-banner">
        <video ref="videoRef" class="video" autoplay muted loop src></video>
        <div class="video-text-wrapper d-flex justify-content-center align-items-center">
            <div class="video-text">
                <h1 class="heading" v-html="video_heading"></h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'VideoBanner',
    props:{
        video_link: String,
        video_heading: String
    },
    mounted(){
        this.$refs.videoRef.src = this.video_link;
        this.$refs.videoRef.play();
    }
}
</script>