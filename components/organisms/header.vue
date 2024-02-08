<template>
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease"
        role="banner" class="waves-navbar-1 w-nav">
        <div class="waves---nav-container w-container">
            <div class="waves-master-nav-1">
                <a href="#" class="waves---nav-brand-link w-nav-brand"><img src="/images/Brand.svg" loading="lazy" alt=""
                        class="waves---brand"></a>
                <div class="waves-right-nav-1">
                    <nav role="navigation" class="waves---nav-menu w-nav-menu main-menu">
                        <a href="/" class="waves---nav-link w-nav-link main-menu">Home</a>
                        <a href="/about" class="waves---nav-link w-nav-link main-menu">About</a>
                        <a href="/contact" class="waves---nav-link w-nav-link main-menu">Contact</a>
                    </nav>

                    <Button
                        :action="'/contact-us'"
                    >Get started</Button>

                    <div class="waves---nav-buttons-right">
                        <div class="waves---menu-button w-nav-button">
                            <div class="waves---hamburger-icon w-icon-nav-menu"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>