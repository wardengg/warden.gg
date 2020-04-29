import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: 'Warden.gg - Reliable Game Server Hosting',
				metaTags: [
					{
						name: 'description',
						content: 'Warden.gg - Reliable Game Server Hosting'
					},
					{
						name: 'og:description',
						content: 'Warden.gg - Reliable Game Server Hosting'
					}
				]
			}
		}
	]
});