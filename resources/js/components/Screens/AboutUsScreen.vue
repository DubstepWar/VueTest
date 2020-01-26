<template>
    <section class="about text-center">
        <div class="container">
            <div class="row justify-content-center">
                <h2 class="about-title">
                    {{ data.title }}
                </h2>
                <p class="about-description">
                    {{ data.description }}
                </p>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4"
                     v-for="block in data.blocks"
                >
                    <img :src="block.icon" alt="about-icon">
                    <h3 class="">
                        {{ block.title }}
                    </h3>
                    <p class="">
                        {{block.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AboutUsScreen",
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
