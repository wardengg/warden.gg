<template>
	<div id="app">
		<header id="header">
			<div class="wrap d-flex justify-content-between align-items-center">
				<div class="logo">
					<router-link to="/" class="d-flex align-items-center">
						<img class="mr-2" src="./assets/logo.svg" alt="Warden.GG Logo" width="48" height="48">
						<span class="logo-title">Warden.gg</span>
					</router-link>
				</div>
				<div class="navigation-menu d-flex align-items-center justify-content-center">
					<nav class="main-navigation-menu">
						<ul>
							<li>About</li>
							<li>Servers</li>
							<li>Contact</li>
							<li>Status</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
		<router-view/>
	</div>
</template>

<style lang="scss">
	@import './assets/stylesheets/sass/style.scss';  
</style>