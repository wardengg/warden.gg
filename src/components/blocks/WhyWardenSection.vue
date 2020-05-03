<template>
    <section class="why-warden-section">
        <div class="wrap">
            <h1 class="section-header">Why Warden.gg?</h1>
            <div class="row justify-content-center">
                <div v-for="tile in whywarden" :key="tile.title" class="col-lg-3 col-md-6 mb-lg-0 mb-sm-3">
                    <div class="why-warden-item">
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
export default {
    name: 'WhyWardenSection',
    data(){
        return{
            whywarden: [
                {
                    icon: '/static/images/panel.svg',
                    title: 'Extensible Game Panel',
                    description: "We're constantly upgrading and adding new features to the game panel so you can get the most out of your servers!"
                },
                {
                    icon: '/static/images/meter.svg',
                    title: 'Powerful Architecture',
                    description: "Our server's equiped with the latest and greatest technology that never miss a beat."
                },
                {
                    icon: '/static/images/clock.svg',
                    title: 'Always Online',
                    description: "Never miss out on the fun. Our server's are online 24/7."
                },
                {
                    icon: '/static/images/ftp.svg',
                    title: 'Full Server Access',
                    description: "You're granted complete access to your servers', allowing you to reach for the sky!"
                },
            ]
        }
    }
}
</script>