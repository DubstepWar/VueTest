<template>
    <div class="first-screen" :style="{backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ), url(${data.bgImage})`}"
    >
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="first-screen-info">
                        <h1 class="first-screen__title">
                            {{ data.title }}
                        </h1>
                        <p class="first-screen__description">
                            {{ data.description }}
                        </p>
                    </div>
                    <div>
                        <button class="btn btn_empty">
                            OUR SERVICES
                        </button>
                        <button class="btn btn_full">
                            HIRE IS NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FirstScreen",
        props: {
            data: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>
