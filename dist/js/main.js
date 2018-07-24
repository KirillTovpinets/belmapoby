$(document).ready(function(){
    $(".slider").slick({
        prevArrow: `<button type="button" class="slick-prev"><i class="icon-arrow-1-left"></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class="icon-arrow-1-right"></i></button>`,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-out'
    })
    $("#cost-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        appendArrows: '#slider-controls',
        prevArrow: `<button type="button" class="cost-slick-prev cost-arrow"><i class="icon-arrow-1-left"></i></button>`,
        nextArrow: `<button type="button" class="cost-slick-next cost-arrow"><i class="icon-arrow-1-right"></i></button>`,
    });

    $(".advert-item").hover(function(e){
        $(this).children(".description").animate({
            right: "0%",
            opacity: "1"
        });
        $(this).children(".overlay").animate({
            opacity: "0.3"
        });
    }, function(e){
        $(this).children(".description").animate({
            right: "-100%",
            opacity: "0"
        });
        $(this).children(".overlay").animate({
            opacity: "0"
        });
    });

    let descHeight = $("#academy-descr").outerHeight();
    $("#academy-photo").css("height", descHeight);
})