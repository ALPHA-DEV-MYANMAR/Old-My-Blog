//Skill Chart
const s = document.getElementById('skills').getContext('2d');
let skilllabel = ['Html', 'Css', 'JavaScript', 'JQuery', 'Vue js', 'PHP', 'Laravel'];
let skilldata = [80, 70, 60, 50, 70, 50, 90];
const skills = new Chart(s, {
    type: 'polarArea',
    data: {
        labels: skilllabel,
        datasets: [{
            label: 'skills',
            data: skilldata,
            backgroundColor: [
                'rgba(153, 204, 255, 0.2)',
                'rgba(0, 51, 102, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(0, 255, 128, 0.2)',
                'rgba(102, 102, 255, 0.2)',
                'rgba(204,0,0,0.2)'
            ],
            borderColor: [
                'rgba(153,204, 255, 1)',
                'rgba(0, 51, 102, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 255, 128, 1)',
                'rgba(102, 102, 255, 1)',
                'rgba(204,0,0,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [
                {
                    display: false,
                    gridLines: [
                        {
                            display: false
                        }
                    ]
                }
            ]
        },
    }
});

// Knowledge Chart
const k = document.getElementById('knowledge').getContext('2d');
const myChart = new Chart(k, {
    type: 'line',
    data: {
        labels: ['MySQL', 'WebSecurity', 'Linux', 'Networking', 'JAVA'],
        datasets: [{
            label: 'knowledge',
            data: [20, 0, 0, 20, 40],
            backgroundColor: [
                '#4C1D95'
            ],
            borderColor: [
                '#4C1D95',
            ],
            borderWidth: 1
        },
        ],
    },
    options: {
        scales: {
            scaleShowVerticalLines: false,
            xAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});


$(".project-slide").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$(".service-slide").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$(".album-slide").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});