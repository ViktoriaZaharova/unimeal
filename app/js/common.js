$(".countdown-time").countdowntimer({
    // dateAndTime: "2021/05/27 00:00:00",
    labelsFormat: true,
    displayFormat: "MS",
    tickInterval: 2,
    minutes: 5,
    seconds: 0
    // currentTime: true,
});

$('.reviews-slider').slick({
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.plane-card').on('click', function () {
   $('.plane-card').removeClass('active');
   $(this).addClass('active');
});