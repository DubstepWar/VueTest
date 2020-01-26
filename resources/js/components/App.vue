<template>
    <div>
        <nav-bar/>

        <router-view/>

    </div>
</template>

<script>
    import NavBar from "./Navigation/NavBar";
    export default {
        components:{
            'nav-bar': NavBar
        }
    }
</script>
