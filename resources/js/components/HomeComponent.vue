<template>
    <div>
        <FirstScreen :data="firstScreenData"/>
        <AboutUsScreen :data="aboutUsData"/>
    </div>
</template>

<script>
    import FirstScreen from "./Screens/FirstScreen";
    import AboutUsScreen from "./Screens/AboutUsScreen";

    export default {
        components: {
            FirstScreen,
            AboutUsScreen
        },
        data() {
            return {
                firstScreenData: {
                    title: "Web development project",
                    description: "Very suitable to support all web development projects",
                    bgImage: 'images/header.png'
                },
                aboutUsData: {
                    title: 'About us',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    blocks: [
                        {
                            icon: 'images/png-icons/internet.png',
                            title: 'Awesome icons',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                        },
                        {
                            icon: 'images/png-icons/transfer.png',
                            title: 'One page',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                        },
                        {
                            icon: 'images/png-icons/head.png',
                            title: 'Fully responsive',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                        },
                    ]
                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
