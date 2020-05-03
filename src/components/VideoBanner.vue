<template>
    <div class="video-banner">
        <video ref="videoRef" class="video" autoplay muted loop src></video>
        <div class="video-text-wrapper d-flex justify-content-center align-items-center">
            <div class="video-text">
                <h1 class="heading">View our comprehensive selection of games<br/>and experience world-class reliability</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VideoBanner',
    mounted: function(){
        this.$refs.videoRef.src = '/static/videos/videobanner.mp4';
        this.$refs.videoRef.play();
    }
}
</script>