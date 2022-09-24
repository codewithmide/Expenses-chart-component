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
                barThickness: 52,
                fill: true,
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
            barValueSpacing: 2,
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


// MOBILE VIEW

var ctxm = document.getElementById("mobile_chart").getContext("2d");

    new Chart(ctxm, {
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
                barThickness: 35,
                fill: true,
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
            barValueSpacing: 2,
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
