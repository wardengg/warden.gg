// Vue Imports
import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from './views/Home.vue'
import MinecraftHostingJava from './views/MinecraftHostingJava.vue'
import GameserverHosting from './views/GameserverHosting.vue'
import GameserverHostingSingle from './views/GameserverHostingSingle.vue'
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
			path: '/games',
			name: 'Games',
			component: GameserverHosting,
			meta: {
				title: 'Games - Warden.gg'
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
			path: '/games/source-engine',
			name: 'Source Engine Hosting',
			component: GameserverHostingSingle,
			meta: {
				title: 'Source Engine Hosting - Warden.gg'
			},
			props: {
				gameservertypeid: 3
			}
		},
		{
			path: '/games/gta-online',
			name: 'GTA: Online Hosting',
			component: GameserverHostingSingle,
			meta: {
				title: 'GTA: Online Hosting - Warden.gg'
			},
			props: {
				gameservertypeid: 6
			}
		},
		{
			path: '/games/bohemia',
			name: 'Bohemia Hosting',
			component: GameserverHostingSingle,
			meta: {
				title: 'Bohemia Hosting - Warden.gg'
			},
			props: {
				gameservertypeid: 4
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