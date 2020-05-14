<template>
    <div class="col-xl-3 col-md-6 col-12">
        <router-link ref="item" :to="to" class="gameserver-type-item" :class="background">
            <h2>{{ name }}</h2>
            <div v-if="from" class="price-ribbon">
                <span class="price-ribbon-content">Starting from ${{ from }}</span>
            </div>
            <p v-for="extra in extras" :key="extra.extra" class="extra-line">{{ extra.extra }}</p>
        </router-link>
    </div><!--/.col-md-6 col-12-->
</template>

<script>
export default {
    name: 'GameserverTypeItem',
    props: {
        gameservertypeid: Number,
        name: String,
        from: String,
        extras: Array,
        to: String,
        background: String
    }
}
</script>