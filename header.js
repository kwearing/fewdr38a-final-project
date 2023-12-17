header.innerHTML = `
<section class="container">
            <a href="./index.html"><img class="logo" src="https://static.wixstatic.com/media/2292e8_58d612f14d7f4ff3a0052087ecdf1526~mv2.jpg/v1/fill/w_239,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(1)_edited.jpg" alt="Aspendale Life Saving Club logo"></a>
            <nav>
                <ul>
                    <li><a href="./aboutus.html">About Us</a></li>
                    <li><a href="./nippers.html">Nippers</a></li>
                    <li><a href="./lifesaving.html">Life Saving</a></li>
                    <li><a href="./competition.html">Competition</a></li>
                    <li><a href="./membership.html">Membership</a></li>
                    <li><a href="./events.html">Events</a></li>
                    <li><a href="./merchandise.html">Merchandise</a></li>
                    <li><a href="./join.html" class="join-button">Join ALSC</a></li>
                </ul>
            </nav>      
            <!-- Mobile menu -->
            <div id="hamburger-icon" onClick="toggleMobileMenu(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <ul class="mobile-menu">
                    <li><a href="./aboutus.html">About Us</a></li>
                    <li><a href="./nippers.html">Nippers</a></li>
                    <li><a href="./lifesaving.html">Life Saving</a></li>
                    <li><a href="./competition.html">Competition</a></li>
                    <li><a href="./membership.html">Membership</a></li>
                    <li><a href="./events.html">Events</a></li>
                    <li><a href="./merchandise.html">Merchandise</a></li>
                    <li><a href="./join.html" class="join-button">Join ALSC</a></li>
                </ul>   
            </div>
        </section>
`;

// MOBILE MENU
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}