import Vue from 'vue'
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: {},
    },
    getters: {
        getCount: state => {
            return state.count
        },
        getDoubleCount: (state, getters) => {
            return getters.getCount * 2
        },
        articles: state => {
            return state.articles
        }
    },
    mutations: {
        increment(state, n) {
            state.count += n.amount
        },
        updateArticles: (state, articles) => {
            state.articles = articles
        }
    },
    actions: {
        loadArticles({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('article').then((response) => {
                    console.log(response.data)
                    commit('updateArticles', response.data)
                    resolve()
                })
            })
        }
    }
})
