var ctx = document.getElementById("my_chart").getContext("2d");

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                "mon",
                "tue",
                "wed",
                "thu",
                "fri",
                "sat",
                "sun"
            ],
            datasets: [{
                data: [
                    17.5,
                    34.91,
                    52.36,
                    31.07,
                    23.39,
                    43.28,
                    25.48
                ],
                barThickness: 50,
                fill: false,
                borderRadius: 5,
                backgroundColor: [
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(186, 34%, 60%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)",
                    "hsl(10, 79%, 65%)"
                ],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                beginAtZero: true,
                x: {
                  grid: {
                    display: false
                  }
                },
                y: {
                  grid: {
                    display: false
                  }
                }
            }
        }
    });