<template>
    <div>
        <div class="container-fluid">
            <form @submit.prevent="register">
                <label for="">Name</label>
                <input type="text" v-model="registrationData.name">
                <label for="">E-mail</label>
                <input type="text" id="" v-model="registrationData.email">
                <label for="">Password</label>
                <input type="password" v-model="registrationData.password">
                <label for="">Confirm password</label>
                <input type="password" v-model="registrationData.c_password">
                <button type="submit" class="btn btn-outline-success">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterComponent",
        data() {
            return {
                registrationData: {
                    name: null,
                    email: null,
                    password: null,
                    c_password: null
                }
            }
        },
        methods: {
            register() {
                axios.post('api/register', {
                    registrationData: this.registrationData
                })
                    .then((response) => {
                        localStorage.setItem('token','Bearer '+ response.data.success.token);
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
