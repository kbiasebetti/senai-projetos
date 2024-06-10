let ctx = document.getElementById('graf').getContext('2d')

// Configuração do gráfico 

Chart.defaults.backgroundColor = 'purple'
Chart.defaults.borderColor = 'gray'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 20
Chart.defaults.font.family = 'sans-serif'

// https://www.chartjs.org/docs/latest/general/colors.html


// https://www.chartjs.org/docs/latest/charts/line.html
// Dados do gráfico
fetch('http://localhost:3000/data')
.then(response => response.json())
.then(dados => {
    console.log(dados)
    const data = {
        labels: dados.Mes,  // valores do back end
        datasets: [{
            label: 'Faturamento',  
            data: dados.Data, // valores do back end
            fill: true,
            borderColor: 'white',
            borderWidth: 2,     // largura da linha
            pointRadius: 5,     // tamanho do ponto
            pointBackgroundColor: 'black;', // Cor de fundo dos pontos
            tension: 0.15
        }]
    };
    
    // Configuração do gráfico
    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true // Oculta a legenda
                },
                title: {
                    display: true,
                    text: 'Gráfico de Vendas' // Título do gráfico
                },
                datalabels: {
                    display: true,
                    align: 'top',
                    color: 'white',
                    font: {
                        weight: 'bolder'
                    }
                },
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
        plugins: [ChartDataLabels]  // plugin para os rótulos dos dados
    };
    
    const grafic = new Chart(ctx, config)
    
    
    
})
