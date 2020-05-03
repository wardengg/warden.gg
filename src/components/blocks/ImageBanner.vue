<template>
    <section :class="full_height ? 'full-height' : ''" class="image-banner">
        <div class="wrap">
            <img :src="image" :alt="getCurrentRouteName" class="image">
            <div class="image-text-wrapper d-flex justify-content-center align-items-center">
                <div class="image-text">
                    <h1 class="heading">{{ getCurrentRouteName }}</h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ImageBanner',
    props: {
        typeid: Number,
        image: String,
        full_height: Boolean
    },
    computed: {
        getCurrentRouteName(){
            return this.$route.name;
        }
    }
}
</script>