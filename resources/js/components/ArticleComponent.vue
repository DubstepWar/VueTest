<template>
    <div>
        <div class="container">
            <div class="row" v-for="article in articles" :key="article.id">
                <div class="col">{{article.name}}</div>
                <div class="col">{{article.description}}</div>
                <button class="btn btn-outline-danger" @click="deleteArticle(article.id)">delete</button>
            </div>
            <button type="button" class="btn btn-info" @click="redirect()">create new article</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleComponent",
        data() {
            return {
                articles: {}
            }
        },
        created() {
            this.getArticles()
        },
        methods: {
            getArticles() {
                const config = {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                }
                axios.get('api/article', config).then((response) => {
                    console.log(response)
                    this.articles = response.data
                })
            },
            deleteArticle(articleId) {
                axios.delete('api/article/' + articleId, {
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    })
                    .then((response) => {
                        this.getArticles()
                        console.log(response)
                    })
            },
            redirect() {
                this.$router.push('create-article')
            }
        }
    }
</script>

<style scoped>

</style>
