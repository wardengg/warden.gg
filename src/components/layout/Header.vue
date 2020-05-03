<template>
    <FixedHeader :threshold="50">
    <header id="header" v-bind:class="{ 'mobile-active': isMobileActive }">
        <div class="wrap d-flex align-items-center">
            <div class="logo">
                <router-link to="/" class="d-flex align-items-center">
                    <img class="mr-2" src="/static/images/logo.svg" alt="Warden.GG Logo" width="48" height="48">
                    <span class="logo-title">Warden.gg</span>
                </router-link>
            </div>
            <nav class="navigation-menu main-navigation mr-auto">
                <ul class="d-flex align-items-center justify-content-center">
                    <li>
                        <router-link to="/">Minecraft Hosting</router-link>
                        <ul class="sub-navigation">
                            <li><router-link to="/">Java Edition</router-link></li>
                            <li><router-link to="/">Bedrock Edition</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/">Game Hosting</router-link></li>
                    <li>
                        <router-link to="/">Company</router-link>
                        <ul class="sub-navigation">
                            <li><router-link to="/">About</router-link></li>
                            <li><router-link to="/">Locations</router-link></li>
                            <li><router-link to="/">Status</router-link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <nav class="navigation-menu secondary-navigation">
                <ul class="d-flex align-items-center justify-content-center">
                    <li>
                        <router-link to="/">Login</router-link>
                        <ul class="sub-navigation">
                            <li><router-link to="/">Panel</router-link></li>
                            <li><router-link to="/">Billing</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/">Support</router-link></li>
                </ul>
            </nav>
            <a href="#" class="main-navigation-mobile-trigger" v-on:click="openMobileNavigation">
                <span>Menu</span>
            </a>
        </div>
        <nav v-bind:class="{ active: isMobileActive }" class="navigation-menu mobile-navigation-menu">
            <ul>
                <li><router-link to="/">Minecraft Hosting</router-link></li>
                <li><router-link to="/">Game Hosting</router-link></li>
                <li><router-link to="/">Company</router-link></li>
            </ul>
        </nav>
    </header>
    </FixedHeader>
</template>

<script>
import FixedHeader from 'vue-fixed-header'
export default {
	components: {
		FixedHeader
	},
	data(){
		return {
			isMobileActive: false
		}
	},
	methods:{
		openMobileNavigation( e ){
			e.preventDefault();
			this.isMobileActive = !this.isMobileActive
		}
	}
}
</script>