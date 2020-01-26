<template>
    <div>
        <div class="container-fluid" @submit.prevent="login">
            <form @submit.prevent="login">
                <label for="">E-mail</label>
                <input type="text" id="" v-model="loginData.email">
                <label for="">Password</label>
                <input type="password" v-model="loginData.password">
                <button type="submit" class="btn btn-outline-success">Log in</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginComponent",
        data() {
            return {
                loginData: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            login() {
                axios.post('api/login', {
                    loginData: this.loginData
                })
                    .then((response) => {
                        localStorage.setItem('token', response.data.success.token)
                        this.$router.push('/')
                        console.log(response.data.success.token)
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        }
    }
</script>

<style scoped>

</style>
