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
						property: 'description',
						content: 'Reliable Game Server Hosting'
					},
					{
						property: 'og:title',
						content: 'Warden.gg'
					},
					{
						property: 'og:url',
						content: 'https://warden.gg'
					},
					{
						property: 'og:url',
						content: 'https://warden.gg'
					},
					{
						property: 'og:image',
						content: 'https://warden.gg/static/images/logo.svg'
					},
					{
						property: 'og:description',
						content: 'Reliable Game Server Hosting'
					},
					{
						property: 'twitter:card',
						content: 'summary'
					},
					{
						property: 'twitter:title',
						content: 'Warden.gg'
					},
					{
						property: 'twitter:url',
						content: 'https://warden.gg'
					},
					{
						property: 'twitter:url',
						content: 'https://warden.gg'
					},
					{
						property: 'twitter:image',
						content: 'https://warden.gg/static/images/logo.svg'
					},
					{
						property: 'twitter:description',
						content: 'Reliable Game Server Hosting'
					}
				]
			}
		}
	]
});