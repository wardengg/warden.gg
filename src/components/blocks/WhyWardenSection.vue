<template>
    <section class="why-warden-section">
        <div class="wrap">
            <h1 class="section-header">Why Warden.gg?</h1>
            <div class="row justify-content-center">
                <div v-for="tile in whywarden" :key="tile.title" class="col-lg-3 col-md-6 mb-3">
                    <div v-waypoint="{ active, callback }" class="why-warden-item">
                        <div class="icon"><img :src="tile.icon" :alt="tile.title"></div>
                        <h2>{{ tile.title }}</h2>
                        <div class="description"><p>{{ tile.description }}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'

Vue.use(VueWaypoint)

export default {
    name: 'WhyWardenSection',
    data(){
        return{
            active: true,
            visible: false,
            whywarden: [
                {
                    icon: '/static/images/panel.svg',
                    title: 'Extensible Game Panel',
                    description: "We're constantly upgrading and adding new features to the game panel so you can get the most out of your servers!"
                },
                {
                    icon: '/static/images/support.svg',
                    title: 'Premium Support',
                    description: "Sh*t happens; that's why we're always going to be there for you, regardless of the situation."
                },
                {
                    icon: '/static/images/ftp.svg',
                    title: 'Full Server Access',
                    description: "You're granted complete access to your servers, allowing you to reach for the sky!"
                },
                {
                    icon: '/static/images/firewall.svg',
                    title: 'DDoS Protection',
                    description: "Our network is protected by a firewall that is constantly adapting itself to ensure a playable experience."
                },
                {
                    icon: '/static/images/ethernet.svg',
                    title: '1Gbps Network',
                    description: "Every server is equipped with a high-speed link allowing for an uninterrupted connection."
                },
                {
                    icon: '/static/images/clock.svg',
                    title: 'Always Online',
                    description: "Never miss out on the fun. Our servers are online 24/7. Play till you pass out at your desk, we encourage it."
                },
                {
                    icon: '/static/images/meter.svg',
                    title: 'Powerful Architecture',
                    description: "Our servers are powered by the latest Xeon processors and super-fast SSD drives! Oh yeah, feel the speed baby."
                },
            ]
        }
    },
    methods: {
        callback({ going }) {
          this.visible = going == this.$waypointMap.GOING_IN
        }
    }
}
</script>