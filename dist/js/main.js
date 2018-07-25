$(document).ready(function(){
    let today = new Date();
    let year = today.getFullYear();
    $("#current-year").text(year);
    
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
        autoplay:true,
        appendArrows: '#slider-controls',
        prevArrow: `<button type="button" class="cost-slick-prev cost-arrow"><i class="icon-arrow-1-left"></i></button>`,
        nextArrow: `<button type="button" class="cost-slick-next cost-arrow"><i class="icon-arrow-1-right"></i></button>`,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 594,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
    $("#educational-slick").slick({
        slidesToScroll: 7,
        slidesToShow: 7,
        prevArrow: `<div class="button-container container-left"><button type="button" class="educ-slick-prev educ-arrow"><i class="icon-arrow-1-left"></i></button></div>`,
        nextArrow: `<div class="button-container container-right"><button type="button" class="educ-slick-next educ-arrow"><i class="icon-arrow-1-right"></i></button></div>`,
    })

    $(".advert-item").hover(function(e){
        $(this).children(".description").stop(true, true).animate({
            right: "0%",
            opacity: "1"
        });
        $(this).children(".overlay").stop(true, true).animate({
            opacity: "0.3"
        });
    }, function(e){
        $(this).children(".description").stop(true, true).animate({
            right: "-100%",
            opacity: "0"
        });
        $(this).children(".overlay").stop(true, true).animate({
            opacity: "0"
        });
    });

    let descHeight = $("#academy-descr").outerHeight();
    $("#academy-photo").css("height", descHeight);

    $(".btn").hover(function(){
        $(this).stop()
        $(this).children(".icon-arrow-1-right").stop(true, true).animate({
            right: '-=10'
        })
    }, function(){
        $(this).stop()
        $(this).children(".icon-arrow-1-right").stop(true, true).animate({
            right: '+=10'
        })
    })

    const studNumber = $("#stud-number").data("countto");
    const specialityNumber = $("#speciality-number").data("countto");
    const yearsNumber = $("#years-number").data("countto");

    $("#main-slider").hover(function(){
        $(this).children(".slick-prev").animate({
            left: '+=60'
        })
        $(this).children(".slick-next").animate({
            right: '+=60'
        })
    }, function(){
        $(this).children(".slick-prev").animate({
            left: '-=60'
        })
        $(this).children(".slick-next").animate({
            right: '-=60'
        })
    })

    $("#to-top").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 500)
        return false;
    })

    $(window).scroll(function(){
        const offset = $(this).scrollTop();
        console.log(offset);
        if(offset > 800){
            $("#study-section .icon").addClass("fadeInLeft");
            $("#study-section h4").addClass("fadeInRight");
            $("#study-section .description").addClass("fadeInRight");

            $("#study-section .icon").animate({
                opacity: 1
            })
            $("#study-section h4").animate({
                opacity: 1
            })
            $("#study-section .description").animate({
                opacity: 1
            })
        }
        if(offset > 1400){
            $(".distant-services .animated").addClass("fadeInUp");
            $(".distant-services .animated").animate({
                opacity:1
            })
        }
        if(offset > 1600){
            $(".online-service .animated").addClass("fadeIn");
            $(".online-service .animated").animate({
                opacity:1
            })
        }
        if(offset > 4000){
            setInterval(() => {
                let current = $("#stud-number").text();
                if(current < studNumber){
                    $("#stud-number").text(++current);
                }else{
                    clearInterval();
                }
            }, 70);
        
            setInterval(() => {
                let current = $("#speciality-number").text();
                if(current < specialityNumber){
                    $("#speciality-number").text(++current);
                }else{
                    clearInterval();
                }
            }, 20);
        
            setInterval(() => {
                let current = $("#years-number").text();
                if(current < yearsNumber){
                    $("#years-number").text(++current);
                }else{
                    clearInterval();
                }
            }, 20);
        }
    })
    $("#menu-toggler").click(function(){
        if($(this).hasClass("open")){
            $(".mobile-menu").animate({
                left: "-=300"
            })
            $(this).removeClass("open");
        }else{
            $(".mobile-menu").animate({
                left: "+=300"
            })
            $(this).addClass("open");
        }
    })
})