<template>
    <footer id="footer">
        <div class="wrap">
            <div class="row quick-links-row">
                <div class="col-lg-3 footer-column-item">
                    <h4 class="footer-title">Minecraft Hosting</h4>
                    <ul class="footer-navigation">
                        <li><router-link to="/">Java Edition Hosting</router-link></li>
                        <li><router-link to="/">Bedrock Edition Hosting</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-3 footer-column-item">
                    <h4 class="footer-title">Game Hosting</h4>
                    <ul class="footer-navigation">
                        <li><router-link to="/">FiveM Hosting</router-link></li>
                        <li><router-link to="/">Garry's Mod Hosting</router-link></li>
                        <li><router-link to="/">Counter-Strike: Global Offensive Hosting</router-link></li>
                        <li><router-link to="/">ARMA 3 Hosting</router-link></li>
                        <li><router-link to="/">DayZ Hosting</router-link></li>
                        <li><router-link to="/">Unturned Hosting</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-3 footer-column-item">
                    <h4 class="footer-title">Company</h4>
                    <ul class="footer-navigation">
                        <li><router-link to="/">About</router-link></li>
                        <li><router-link to="/">Locations</router-link></li>
                        <li><router-link to="/">Server Status</router-link></li>
                        <li><router-link to="/">Support</router-link></li>

                    </ul>
                </div>
                <div class="col-lg-3 footer-column-item">
                    <h4 class="footer-title">Quick Links</h4>
                    <ul class="footer-navigation">
                        <li><router-link to="/">Game Panel</router-link></li>
                        <li><router-link to="/">Billing Portal</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="copyright-row">
                <p>&copy; 2020 <span class="site-name">Warden.gg</span> | ABN: 33819224400</p>
            </div>
        </div>
    </footer>
</template> 

<script>
export default {
    name: 'Footer'
}
</script>