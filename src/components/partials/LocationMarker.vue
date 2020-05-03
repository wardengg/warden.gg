<template>
    <div class="marker" :style="marker_location">
        <div class="marker-info">
            <img v-if="country_flag" :src="country_flag" :alt="country_name" width="90" height="48" class="marker-flag">
            <span class="marker-title">{{ title }}, {{ country_name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LocationMarker',
    props: {
        title: String,
        country: Number,
        top: String,
        left: String,
        bottom: String,
        right: String
    },
    data(){
        return{
            country_name: '',
            country_flag: '',
            active: false
        }
    },
    methods:{
        toggle: function(){
            this.active = !this.active
        },
        setState( obj ){
            Object.assign( this, obj );
        }
    },
    mounted(){
        // Fetch Country Data
        fetch( "https://wp.warden.gg/wp-json/wp/v2/country/" + this.country )
            .then( ( r ) => r.json() )
            .then( ( res ) => this.setState( { country_name: res.name, country_flag: res.acf.flag } ) );
    },
    computed: {
        marker_location(){
            // Return the variable
            return 'top: ' + ( this.top == 0 ? 'auto' : this.top + '%' ) + '; left: ' + ( this.left == 0 ? 'auto' : this.left + '%' ) + '; bottom: ' + ( this.bottom == 0 ? 'auto' : this.bottom + '%' ) + '; right: ' + ( this.right == 0 ? 'auto' : this.right + '%' ) + ';';
        },
    },
}
</script>