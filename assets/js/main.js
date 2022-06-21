(function($) {
    "use strict";

    var animateHTML = function() {
        var elems;
        var windowHeight;

        function init() {
            elems = document.querySelectorAll('.inGP-animate-in');
            windowHeight = window.innerHeight;
            addEventHandlers();
            checkPosition();
        }

        function addEventHandlers() {
            window.addEventListener('scroll', checkPosition);
            window.addEventListener('resize', init);
        }

        function checkPosition() {
            for (var i = 0; i < elems.length; i++) {
                var positionFromTop = elems[i].getBoundingClientRect().top;

                if (positionFromTop - windowHeight <= 0) {
                    elems[i].classList.add('inGP-in');
                    if ($(elems[i]).hasClass('inGP-info-stats-item')) {
                        animateBubbles(elems[i]);
                    }
                    if ($(elems[i]).hasClass('inGP-testimonials-1-circles-item')) {
                        animateTestimonialsCircles(elems[i]);
                    }
                }
            }
        }

        return {
            init: init
        };
    };

    function handlePreloader() {
        if ($('.inGP-preloader').length > 0) {
            $('.inGP-preloader').delay(200).fadeOut(500, function() {
                animateHTML().init();
                animateHeroElement('.inGP-hero-right-bg-card');
                animateHeroElement('.inGP-hero-card-info');
                animateHeroElement('.inGP-hero-cards-container');
                animateHeroElement('.inGP-hero-center-carousel');
                setTimeout(function() {
                    animateHeroElement('.inGP-hero-stats-item');
                }, 200);
                setTimeout(function() {
                    animateHeroElement('.inGP-header-side-image');
                }, 200);

                setTimeout(function() {
                    animateHeroElement('.inGP-contact-us-form');
                }, 200);

                animateHeroElement('.inGP-hero-boxed-circulars');
                animateHeroElement('.inGP-hero-boxed-icon-circle-1');
                animateHeroElement('.inGP-hero-boxed-icon-circle-2');

                animateHeroElement('.inGP-hero-boxed-info-card-big');
                animateHeroElement('.inGP-hero-boxed-info-card-small');
                animateHeroElement('.inGP-hero-boxed-info-list-container');

                animateOnMouseMove('.inGP-mouse-move');
            });
        }
    }

    function windowResizeHandler() {
        resizeHeroBoxedCirculars();
    }

    function onContentScroll() {
        if ($('.inGP-header').hasClass('inGP-bigger') || $('.inGP-header').hasClass('inGP-no-bg')) {
            if (window.pageYOffset > 20) {
                $('.inGP-header').addClass('inGP-is-sticky');
            } else {
                $('.inGP-header').removeClass('inGP-is-sticky');
            }
        } else if ($('.inGP-header').hasClass('inGP-no-bg')) {
            if (window.pageYOffset > 0) {
                $('.inGP-header').addClass('inGP-is-sticky');
            } else {
                $('.inGP-header').removeClass('inGP-is-sticky');
            }
        } else {
            if (window.pageYOffset > 93) {
                $('.inGP-header').addClass('inGP-is-sticky');
            } else {
                $('.inGP-header').removeClass('inGP-is-sticky');
            }
        }
    }

    window.onscroll = function() {
        onContentScroll();
    };

    $(window).on('load', function() {
        handlePreloader();
    });

    windowResizeHandler();

    $(window).resize(function() {
        windowResizeHandler();
    });

    function animateHeroElement(element) {
        if ($(element).hasClass('inGP-has-animation')) {
            $(element).addClass('inGP-animate');
        }
        if ($(element).hasClass('inGP-animate-cards')) {
            setTimeout(function() {
                $(element).find('.inGP-hero-card').addClass('inGP-animate');
            }, 600);
            setTimeout(function() {
                $(element).find('.inGP-hero-card-dark').addClass('inGP-animate');
                $(element).find('.inGP-hero-card-light').addClass('inGP-animate');
            }, 1200);
        }
        if ($(element).hasClass('inGP-animate-bounce')) {
            setTimeout(function() {
                $(element).addClass('animate__animated animate__bounceIn');
            }, 1800);
        }
        if ($(element).hasClass('inGP-animate-circles-bounce')) {
            $(element).addClass('animate__animated animate__bounceIn');
        }
        if ($(element).hasClass('inGP-animate-info-card')) {
            setTimeout(function() {
                $(element).addClass('animate__animated animate__flipInX');
            }, 300);
        }
        if ($(element).hasClass('inGP-animate-icon-circle-bounce')) {
            setTimeout(function() {
                $(element).addClass('animate__animated animate__bounceIn');
            }, 800);
        }
    }

    function animateBubbles(element) {
        if ($(element).hasClass('inGP-animate-bounce')) {
            setTimeout(function() {
                $(element).addClass('animate__animated animate__bounceIn');
            }, 500);
        }
    }

    function animateTestimonialsCircles(element) {
        if ($(element).hasClass('inGP-animate-bounce')) {
            setTimeout(function() {
                $(element).addClass('animate__animated animate__bounceIn');
            }, 200);
        }
    }

    function animateOnMouseMove(element) {
        const mouseMoveElems = document.querySelectorAll(element);

        mouseMoveElems.forEach(function(mouseMoveElem) {
            var speed = mouseMoveElem.getAttribute('data-speed');

            window.addEventListener('mousemove', (evt) => {
                const x = -(window.innerWidth / 2 - evt.pageX) / parseInt(speed);
                const y = -(window.innerHeight / 2 - evt.pageY) / parseInt(speed);
                mouseMoveElem.style.transform = `translateY(${y}px) translateX(${x}px)`;
            });
        });
    }

    function resizeHeroBoxedCirculars() {
        if ($('.inGP-hero-boxed-circulars').length > 0) {
            var circularsWidth = $('.inGP-hero-boxed-circulars').width();
            $('.inGP-hero-boxed-circulars').height(circularsWidth);
        }
    }

    if ($('.inGP-hero-logos-carousel').length > 0) {
        $('.inGP-hero-logos-carousel').owlCarousel({
            'nav': false,
            'dots': false,
            'margin': 40,
            'loop': true,
            'responsive': {
                0: {
                    'items': 4
                },
                767: {
                    'items': 5
                },
                991: {
                    'items': 7
                },
                1200: {
                    'items': 5
                },
                1400: {
                    'items': 6
                }
            },
            'checkVisible': false,
            'smartSpeed': 600,
            'autoplay': false,
            'autoplayTimeout': 5000
        });
    }

    $('.inGP-animate-icon').hover(function() {
        $(this).find('img').addClass('animate__animated animate__jackInTheBox');
    }, function() {
        $(this).find('img').removeClass('animate__animated animate__jackInTheBox');
    });

    // Price plans switcher
    $('[name=inGP-price-plans-switcher]').on('change', function() {
        var checkedValue = $('[name=inGP-price-plans-switcher]:checked').attr('data-period');

        if (checkedValue == 'month') {
            $('.inGP-plans-price-annual').hide();
            $('.inGP-plans-price-monthly').show();
        } else {
            $('.inGP-plans-price-monthly').hide();
            $('.inGP-plans-price-annual').show();
        }
    });

    if ($('.inGP-categories-carousel').length > 0) {
        $('.inGP-categories-carousel').owlCarousel({
            'nav': false,
            'dots': true,
            'margin': 30,
            'loop': false,
            'responsive': {
                0: {
                    'items': 1
                },
                600: {
                    'items': 2
                },
                900: {
                    'items': 4
                },
                1600: {
                    'items': 6
                }
            },
            'checkVisible': false,
            'smartSpeed': 600
        });
    }

    // Set checked badge color for jobs list filter
    $('.inGP-jobs-list-side-filter .list-group-item input[type="checkbox"').on('change', function() {
        if ($(this).is(":checked")) {
            $(this).parent().parent().addClass('inGP-checked');
        } else {
            $(this).parent().parent().removeClass('inGP-checked');
        }
    });

    // Company dashboard charts
    if ($('#inGP-company-dashboard-visits-chart').length > 0) {
        var companyVisitsChartElem = document.getElementById('inGP-company-dashboard-visits-chart').getContext('2d');

        var gradient = companyVisitsChartElem.createLinearGradient(0, 250, 0, 0);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(.5, 'rgba(0, 112, 201, 0.09)');
        gradient.addColorStop(1, 'rgba(0, 112, 201, 0.12)');

        var companyVisitsChart = new Chart(companyVisitsChartElem, {
            type: 'line',
            data: {
                labels: ['Oct 06', 'Oct 07', 'Oct 08', 'Oct 09', 'Oct 10', 'Oct 11', 'Oct 12'],
                datasets: [{
                    label: 'Visits',
                    data: [12, 56, 34, 78, 38, 28, 54],
                    borderWidth: 3,
                    borderColor: 'rgba(0, 112, 201, 1)',
                    pointBackgroundColor: 'rgba(255, 255, 255, 0)',
                    pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                    pointBorderColor: 'rgba(66, 133, 244, 0)',
                    pointHoverBorderColor: 'rgba(0, 112, 201, 1)',
                    pointBorderWidth: 10,
                    pointHoverBorderWidth: 3,
                    pointHitRadius: 20,
                    cubicInterpolationMode: 'monotone',
                    fill: true,
                    backgroundColor: gradient
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: 'rgba(153, 153, 153, 1)',
                            maxTicksLimit: 7,
                            maxRotation: 0
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 1)',
                            drawOnChartArea: false,
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'rgba(153, 153, 153, 1)',
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 0)',
                        },
                    }],
                },
                responsive: true,
                tooltips: {
                    backgroundColor: 'rgba(0, 39, 69, 1)',
                    cornerRadius: 7,
                    mode: 'index',
                    intersect: false,
                    displayColors: false,
                    xPadding: 10,
                    yPadding: 10,
                    titleFontColor: 'rgba(255, 255, 255, .7)',
                    bodyFontColor: 'rgba(255, 255, 255, 1)',
                    titleFontStyle: 'normal',
                    bodyFontStyle: 'bold',
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if ($('#inGP-company-dashboard-app-chart').length > 0) {
        var companyAppChartElem = document.getElementById('inGP-company-dashboard-app-chart').getContext('2d');

        var gradient = companyVisitsChartElem.createLinearGradient(0, 250, 0, 0);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(.5, 'rgba(255, 168, 35, 0.09)');
        gradient.addColorStop(1, 'rgba(255, 168, 35, 0.12)');

        var companyAppChart = new Chart(companyAppChartElem, {
            type: 'line',
            data: {
                labels: ['Oct 06', 'Oct 07', 'Oct 08', 'Oct 09', 'Oct 10', 'Oct 11', 'Oct 12'],
                datasets: [{
                    label: 'Applications',
                    data: [43, 81, 72, 85, 42, 65, 80],
                    borderWidth: 3,
                    borderColor: 'rgba(255, 168, 35, 1)',
                    pointBackgroundColor: 'rgba(255, 255, 255, 0)',
                    pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                    pointBorderColor: 'rgba(66, 133, 244, 0)',
                    pointHoverBorderColor: 'rgba(255, 168, 35, 1)',
                    pointBorderWidth: 10,
                    pointHoverBorderWidth: 3,
                    pointHitRadius: 20,
                    cubicInterpolationMode: 'monotone',
                    fill: true,
                    backgroundColor: gradient
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: 'rgba(153, 153, 153, 1)',
                            maxTicksLimit: 7,
                            maxRotation: 0
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 1)',
                            drawOnChartArea: false,
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'rgba(153, 153, 153, 1)',
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 0)',
                        },
                    }],
                },
                responsive: true,
                tooltips: {
                    backgroundColor: 'rgba(0, 39, 69, 1)',
                    cornerRadius: 7,
                    mode: 'index',
                    intersect: false,
                    displayColors: false,
                    xPadding: 10,
                    yPadding: 10,
                    titleFontColor: 'rgba(255, 255, 255, .7)',
                    bodyFontColor: 'rgba(255, 255, 255, 1)',
                    titleFontStyle: 'normal',
                    bodyFontStyle: 'bold',
                },
                legend: {
                    display: false,
                }
            }
        });
    }

    // Candidate dashboard charts
    if ($('#inGP-candidate-dashboard-visits-chart').length > 0) {
        var candidateVisitsChartElem = document.getElementById('inGP-candidate-dashboard-visits-chart').getContext('2d');

        var gradient = candidateVisitsChartElem.createLinearGradient(0, 250, 0, 0);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(.5, 'rgba(0, 112, 201, 0.09)');
        gradient.addColorStop(1, 'rgba(0, 112, 201, 0.12)');

        var candidateVisitsChart = new Chart(candidateVisitsChartElem, {
            type: 'line',
            data: {
                labels: ['Oct 06', 'Oct 07', 'Oct 08', 'Oct 09', 'Oct 10', 'Oct 11', 'Oct 12'],
                datasets: [{
                    label: 'Visits',
                    data: [12, 56, 34, 78, 38, 28, 54],
                    borderWidth: 3,
                    borderColor: 'rgba(0, 112, 201, 1)',
                    pointBackgroundColor: 'rgba(255, 255, 255, 0)',
                    pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                    pointBorderColor: 'rgba(66, 133, 244, 0)',
                    pointHoverBorderColor: 'rgba(0, 112, 201, 1)',
                    pointBorderWidth: 10,
                    pointHoverBorderWidth: 3,
                    pointHitRadius: 20,
                    cubicInterpolationMode: 'monotone',
                    fill: true,
                    backgroundColor: gradient
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: 'rgba(153, 153, 153, 1)',
                            maxTicksLimit: 7,
                            maxRotation: 0
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 1)',
                            drawOnChartArea: false,
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'rgba(153, 153, 153, 1)',
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 0)',
                        },
                    }],
                },
                responsive: true,
                tooltips: {
                    backgroundColor: 'rgba(0, 39, 69, 1)',
                    cornerRadius: 7,
                    mode: 'index',
                    intersect: false,
                    displayColors: false,
                    xPadding: 10,
                    yPadding: 10,
                    titleFontColor: 'rgba(255, 255, 255, .7)',
                    bodyFontColor: 'rgba(255, 255, 255, 1)',
                    titleFontStyle: 'normal',
                    bodyFontStyle: 'bold',
                },
                legend: {
                    display: false,
                }
            }
        });
    }
    if ($('#inGP-candidate-dashboard-app-chart').length > 0) {
        var candidateAppChartElem = document.getElementById('inGP-candidate-dashboard-app-chart').getContext('2d');

        var gradient = candidateVisitsChartElem.createLinearGradient(0, 250, 0, 0);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(.5, 'rgba(255, 168, 35, 0.09)');
        gradient.addColorStop(1, 'rgba(255, 168, 35, 0.12)');

        var candidateAppChart = new Chart(candidateAppChartElem, {
            type: 'line',
            data: {
                labels: ['Oct 06', 'Oct 07', 'Oct 08', 'Oct 09', 'Oct 10', 'Oct 11', 'Oct 12'],
                datasets: [{
                    label: 'Applications',
                    data: [43, 81, 72, 85, 42, 65, 80],
                    borderWidth: 3,
                    borderColor: 'rgba(255, 168, 35, 1)',
                    pointBackgroundColor: 'rgba(255, 255, 255, 0)',
                    pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                    pointBorderColor: 'rgba(66, 133, 244, 0)',
                    pointHoverBorderColor: 'rgba(255, 168, 35, 1)',
                    pointBorderWidth: 10,
                    pointHoverBorderWidth: 3,
                    pointHitRadius: 20,
                    cubicInterpolationMode: 'monotone',
                    fill: true,
                    backgroundColor: gradient
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: 'rgba(153, 153, 153, 1)',
                            maxTicksLimit: 7,
                            maxRotation: 0
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 1)',
                            drawOnChartArea: false,
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'rgba(153, 153, 153, 1)',
                            callback: function(value, index, values) {
                                if (Math.floor(value) === value) {
                                    return value;
                                }
                            }
                        },
                        gridLines: {
                            zeroLineColor: 'rgba(232, 232, 232, 0)',
                        },
                    }],
                },
                responsive: true,
                tooltips: {
                    backgroundColor: 'rgba(0, 39, 69, 1)',
                    cornerRadius: 7,
                    mode: 'index',
                    intersect: false,
                    displayColors: false,
                    xPadding: 10,
                    yPadding: 10,
                    titleFontColor: 'rgba(255, 255, 255, .7)',
                    bodyFontColor: 'rgba(255, 255, 255, 1)',
                    titleFontStyle: 'normal',
                    bodyFontStyle: 'bold',
                },
                legend: {
                    display: false,
                }
            }
        });
    }

    // Upload company cover photo and logo
    if ($('#inGP-company-cover-choose-file').length > 0) {
        const chooseCoverFile = document.getElementById('inGP-company-cover-choose-file');

        chooseCoverFile.addEventListener('change', function() {
            const files = chooseCoverFile.files[0];

            if (files) {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function() {
                    $('#inGP-company-cover-choose-file').next('label').css({
                        'background-image': 'url(' + this.result + ')',
                        'border': '0 none'
                    }).find('span').hide();
                });
            }
        });
    }
    if ($('#inGP-company-logo-choose-file').length > 0) {
        const chooseLogoFile = document.getElementById('inGP-company-logo-choose-file');

        chooseLogoFile.addEventListener('change', function() {
            const files = chooseLogoFile.files[0];

            if (files) {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function() {
                    $('#inGP-company-logo-choose-file').next('label').css({
                        'background-image': 'url(' + this.result + ')',
                        'border': '0 none'
                    }).find('span').hide();
                });
            }
        });
    }

    // Upload candidate cover photo and logo
    if ($('#inGP-candidate-cover-choose-file').length > 0) {
        const chooseCandidateCoverFile = document.getElementById('inGP-candidate-cover-choose-file');

        chooseCandidateCoverFile.addEventListener('change', function() {
            const files = chooseCandidateCoverFile.files[0];

            if (files) {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function() {
                    $('#inGP-candidate-cover-choose-file').next('label').css({
                        'background-image': 'url(' + this.result + ')',
                        'border': '0 none'
                    }).find('span').hide();
                });
            }
        });
    }
    if ($('#inGP-candidate-photo-choose-file').length > 0) {
        const chooseCandidatePhotoFile = document.getElementById('inGP-candidate-photo-choose-file');

        chooseCandidatePhotoFile.addEventListener('change', function() {
            const files = chooseCandidatePhotoFile.files[0];

            if (files) {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(files);
                fileReader.addEventListener("load", function() {
                    $('#inGP-candidate-photo-choose-file').next('label').css({
                        'background-image': 'url(' + this.result + ')',
                        'border': '0 none'
                    }).find('span').hide();
                });
            }
        });
    }

    // Toogle side filter on mobile
    $('.inGP-list-side-filter-header a').on('click', function() {
        $(this).parent().parent().find('.inGP-list-side-filter-panel').slideToggle();
    });

    // Toggle job details panel on mobile
    $('.inGP-jobs-card-4').on('click', function() {
        $('.inGP-jobs-tab-content').addClass('inGP-show');
    });
    $('.inGP-jobs-tab-pane-close-btn').on('click', function() {
        $('.inGP-jobs-tab-content').removeClass('inGP-show');
    });

    // Toggle messages panel on mobile
    $('.inGP-dashboard-inbox-list-item').on('click', function() {
        $('.inGP-dashboard-inbox-messages-container').addClass('inGP-show');
    });
    $('.inGP-dashboard-inbox-messages-close-btn').on('click', function() {
        $('.inGP-dashboard-inbox-messages-container').removeClass('inGP-show');
    });
})(jQuery);
