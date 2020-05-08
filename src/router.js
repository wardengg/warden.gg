// Vue Imports
import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from './views/Home.vue'
import MinecraftHostingJava from './views/MinecraftHostingJava.vue'
import GameserverHosting from './views/GameserverHosting.vue'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				title: 'Warden.gg - Reliable Game Server Hosting'
			}
		},
		{
			path: '/minecraft/java',
			name: 'Minecraft Hosting',
			component: MinecraftHostingJava,
			meta: {
				title: 'Minecraft Hosting - Warden.gg'
			}
		},
		{
			path: '/games',
			name: 'Games Hosting',
			component: GameserverHosting,
			meta: {
				title: 'Games Hosting - Warden.gg'
			}
		},
		{
			path: '*',
			name: 'Page Not Found',
			component: PageNotFound,
			meta: {
				title: 'Page Not Found - Warden.gg'
			}
		},
	]
});