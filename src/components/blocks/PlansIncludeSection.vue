<template>
    <section class="plans-include-section">
        <div class="plans-include-inner">
            <div class="wrap">
                <h1 class="section-header">All Plans Include</h1>
                <div class="row justify-content-center">
                    <div v-for="tile in plansinclude" :key="tile.title" class="col-lg-4 col-md-6 mb-3">
                        <div class="plans-include-item">
                            <div class="icon"><img :src="tile.icon" :alt="tile.title"></div>
                            <h2>{{ tile.title }}</h2>
                            <div class="description"><p>{{ tile.description }}</p></div>
                        </div>
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
    name: 'PlansIncludeSection',
    data(){
        return{
            plansinclude: [
                {
                    icon: '/static/images/meter-white.svg',
                    title: 'Instant Setup',
                    description: "Our servers are powered by the latest Xeon processors and super-fast SSD drives! Oh yeah, feel the speed baby."
                },
                {
                    icon: '/static/images/support-white.svg',
                    title: 'Premium Support',
                    description: "Bad things can sometimes be inevitable, but that's why we're always going to be there for you, regardless of the situation."
                },
                {
                    icon: '/static/images/ftp-white.svg',
                    title: 'Full Server Access',
                    description: "You're granted complete access to your servers, allowing you to reach for the sky!"
                },
                {
                    icon: '/static/images/firewall-white.svg',
                    title: 'DDoS Protection',
                    description: "Our network is protected by a firewall that is constantly adapting itself to ensure a playable experience."
                },
                {
                    icon: '/static/images/clock-white.svg',
                    title: 'Always Online',
                    description: "Never miss out on the fun. Our servers are online 24/7. Play till you pass out at your desk, we encourage it."
                },
            ]
        }
    }
}
</script>