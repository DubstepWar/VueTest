<template>
    <div class="container" style="width: 70%">
        <div class="row">
            <div class="col-10">
    <VueChartTest :chartdata="chartdata"></VueChartTest>
            </div>
    </div>
    </div>
</template>

<script>
    import VueChartTest from './VueChartTest';
    export default {
        data(){
            return{
                chartdata: {
                    labels: ['Test Type 1', 'Test Type 2', 'Test Type 3'],
                    datasets: [
                        {
                            backgroundColor: [
                                '#36a2eb',
                                '#cc65fe',
                                '#ffce56'
                            ],
                            data: [1, 1, 1],
                            borderAlign: 'inner',
                            borderColor: 'rgb(230,255,239)',
                            hoverBackgroundColor: '#7cff6c',
                            hoverBorderWidth: 5,
                            hoverBorderColor: '#db9cff',
                            borderWidth: 1,
                        }
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        callbacks: {
                            label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
                            title: () => null,
                        }
                    },
                    display: false,
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        name: "MyDoughnutChart",
        components: {
            "VueChartTest": VueChartTest
        }
    }
</script>

<style scoped>

</style>
