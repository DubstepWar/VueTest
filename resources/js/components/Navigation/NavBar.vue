<template>
    <!--    <b-navbar type="dark" variant="dark">-->
    <!--        <b-navbar-nav>-->
    <!--            <b-nav-item><RouterLink to="/">Home</RouterLink></b-nav-item>-->
    <!--            <b-nav-item><RouterLink to="/article">Article</RouterLink></b-nav-item>-->
    <!--            <b-nav-item><RouterLink to="/vuex-test">Vuex Test</RouterLink></b-nav-item>-->
    <!--        </b-navbar-nav>-->
    <!--    </b-navbar>-->
    <header class="menu-bar">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-2">
                    <div class="logo p-1">
                        My Logo
                    </div>
                </div>
                <div class="col-xl-8 ml-auto">
                    <nav>
                        <ul class="menu d-flex m-0 justify-content-end">
                            <RouterLink to="/" class="menu__item px-xl-3" active-class="active-menu"
                                        exact-active-class="exact-active-menu" tag="li" exact>Home
                            </RouterLink>
                            <RouterLink to="#" class="menu__item px-xl-3" active-class="active-menu"
                                        exact-active-class="exact-active-menu" tag="li">About
                            </RouterLink>
                            <RouterLink to="#" class="menu__item px-xl-3" active-class="active-menu"
                                        exact-active-class="exact-active-menu" tag="li">Servicing
                            </RouterLink>
                            <RouterLink to="#" class="menu__item px-xl-3" active-class="active-menu"
                                        exact-active-class="exact-active-menu" tag="li">Portfolio
                            </RouterLink>
                            <RouterLink to="/article" class="menu__item px-xl-3" active-class="active-menu"
                                        exact-active-class="exact-active-menu" tag="li">Blog
                            </RouterLink>
                            <RouterLink to="#" class="menu__item px-xl-3" active-class="active-menu"
                                        exact-active-class="exact-active-menu" tag="li">Contact us
                            </RouterLink>
                            <RouterLink to="#" class="menu__item px-xl-3" active-class="active-menu"
                                        exact-active-class="exact-active-menu" tag="li">
                                <font-awesome-icon icon="search"></font-awesome-icon>
                            </RouterLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>
