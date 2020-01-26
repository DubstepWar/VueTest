<template>
    <div>
        <div class="container">
            <h2>Create new article</h2>
            <form @submit.prevent="createArticle">
                <label>Name</label>
                <input type="text" v-model="newArticle.name">
                <label>Description</label>
                <input type="text" v-model="newArticle.description">
                <button type="submit" class="btn btn-outline-success">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CreateArticle",
        data() {
            return {
                newArticle: {
                    name: '',
                    description: ''
                }
            }

        },
        methods: {
            createArticle() {
                let config = {}
                axios.post('api/article', {
                        newArticle: this.newArticle,
                    }, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }
                ).then((response) => {
                    this.$router.push('/article')
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>

</style>
