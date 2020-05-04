    <template>
    <div class="col-lg-4 col-md-6 mb-3">
        <a :href="whmcs_link" class="plan-item">
            <div v-if="advertisement_text && advertisement_colour" :class="advertisement_colour" class="advertisement-message">{{ advertisement_text }}</div>
            <h2 v-if="title" class="plan-title" v-html="title"></h2>
            <div v-if="price" class="price-ribbon">
                <span class="price-ribbon-content">Starting from ${{ price }}</span>
            </div>
            <div class="plan-content">
                <p v-if="ram">{{ ram }}MB RAM</p>
                <p v-if="recommended"><span class="fyi-asterisk">*</span> {{ recommended }} Player Slots</p>
                <p v-for="extra in gameserver_extras" :key="extra.extra">{{ extra.extra }}</p>
                <span class="add-to-cart">Buy Now</span>
            </div>
        </a> 
    </div>
</template>

<script>
export default {
    name: 'PlansItem',
    props: {
        title: String,
        price: String,
        ram: String,
        recommended: String,
        whmcs_link: String,
        gameserver_extras: Array,
        advertisement_text: String,
        advertisement_colour: String
    }
}
</script>