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
                        <li><a href="https://panel.warden.gg">Game Panel</a></li>
                        <li><a href="https://billing.warden.gg">Billing Portal</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright-row">
                <p><span class="copyright-line">&copy; 2020 <span class="site-name">Warden.gg</span></span><span class="copyright-line"><router-link to="/">Privacy Policy</router-link></span><span class="copyright-line">ABN: 33819224400</span></p>
            </div>
        </div>
    </footer>
</template> 

<script>
export default {
    name: 'Footer'
}
</script>