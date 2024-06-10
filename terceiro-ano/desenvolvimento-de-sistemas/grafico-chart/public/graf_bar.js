const { response } = require("express")

let ctx = document.getElementById('graf').getContext('2d')

// Configuração do gráfico 

Chart.defaults.backgroundColor = 'rgb(135,206,235)'
Chart.defaults.borderColor = '#fff'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 24
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'

// https://www.chartjs.org/docs/latest/general/colors.html

// https://www.chartjs.org/docs/latest/charts/bar.html

// Dados do gráfico
fetch('http://localhost:3000/data')
.then(response => response.json())
.then(dados => {
    console.log(dados)
    const data = {
        labels: dados.Mes,  // valores do back end
        datasets: [{
            label: 'Vendas',  
            data: dados.data, // valores do back end
            fill: false,
            borderColor: 'white',
            borderWidth: 5,     // largura da linha
            pointRadius: 8,     // tamanho do ponto
            pointBackgroundColor: 'blue', // Cor de fundo dos pontos
            tension: 0.3
        }]
    };
    

// Configuração do gráfico
const config = {
    type: 'bar',  
    data: data,
    options: {
        responsive: true,
        // indexAxis: 'y',  // para gráfico de barras horizontal
        plugins: {
            legend: {
                display: true // Oculta a legenda
            },
            title: {
                display: true,
                text: 'Gráfico de Vendas' // Título do gráfico
            },
            // datalabels: {
            //     display: true,
            //     align: 'top',
            //     color: 'white',
            //     font: {
            //         weight: 'bold'
            //     }
            // },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Mês'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Valor'
                }
            }
        }
    },
    // plugins: [ChartDataLabels]  // plugin para os rótulos dos dados
};

const grafic = new Chart(ctx, config)



})
