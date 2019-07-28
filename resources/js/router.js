import VueRouter from 'vue-router';

import HomeComponent from './components/HomeComponent';
import MyDoughnutChart from './components/MyDoughnutChart';

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
         {
             path: '/doughnut_chart',
             name: 'doughnut_chart',
             component: MyDoughnutChart
         }
    ],
    mode: 'history'
});
