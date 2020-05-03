<template>
    <div class="col-lg-3 col-md-6 col-12">
        <div class="gameserver-type-item">
            <div class="image-wrapper d-flex align-items-center justify-content-center">
                <img :src="image.url" :alt="name" :height="image.height" :width="image.width">
            </div>
            <h2>{{ name }}</h2>
            <span class="btn btn-alt">From ${{ from }}/month</span>
        </div>
    </div><!--/.col-md-6 col-12-->
</template>

<script>
export default {
    name: 'GameserverTypeItem',
    props: {
        name: String,
        image: Object,
        from: String
    }
}
</script>