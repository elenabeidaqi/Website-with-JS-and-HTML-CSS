$(document).ready(function () {
    $('section.menu>section.openMenu>i.open').on("click", function () {
        $('section.menu>section.topMenu').slideToggle(700).css({
            "display": "flex",
            "flexFlow": "column wrap",
        });
        $('section.menu>section.menuBottom').slideToggle(700).css({
            "display": "flex",
            "flexFlow": "column wrap",
        });
    });
    $('section.menu>section.menuBottom a').hover(function () {
        $(this).css({
            "borderBottom": "solid 2px black",
        });
    }, function () {
        $(this).css({
            "border": "none",
        });
    });
    $('section.collectionItem>section').hover(function () {
        $(this).css({
            "transform": "scale(1.1,1.1)",
        });
    }, function () {
        $(this).css({
            "transform": "scale(1,1)",
        });
    });

    $('section.productsIcone>span>img').hover(function () {
        $(this).css({
            "transform": "scale(1.1,1.1)",
        });
    }, function () {
        $(this).css({
            "transform": "scale(1,1)",
        });
    });

    $('div.sale').hover(function () {
        $(this).css({
            "transform": "scale(1.1,1.1)",
            "border": "2px solid black",
        });
    }, function () {
        $(this).css({
            "transform": "scale(1,1)",
            "borer": "2px inset gray",
        });
    });

    $('div.new').hover(function () {
        $(this).css({
            "transform": "scale(1.1,1.1)",
            "border": "2px solid black",
        });
    }, function () {
        $(this).css({
            "transform": "scale(1,1)",
            "borer": "2px inset gray",
        });
    });


    $('section.productsItem>section#products-2').hover(function () {
        $(this).css({
            "opacity": 0.6,
            "background": "rgba(0,0,0,0.1)",
        })
    }, function () {
        $(this).css({
            "opacity": 1,
            "background": "white",
        });
    });

    $('span.icons>img').click(function () {
        if ($(this).hasClass('select')) {
            $(this).removeClass('select')
        } else {
            $(this).addClass('select')
        }
    });
    /**scroll**/
    $(document).on("scroll", function () {
        let st = $(this).scrollTop();
        if (st > 400) {
            $('section.scroll').fadeIn(500);
        } else {
            $('section.scroll').fadeOut(500);
        }
    });
    $('section.scroll').click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 650, "linear");
    });
    /****end scroll****/


});
