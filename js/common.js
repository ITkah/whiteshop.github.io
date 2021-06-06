$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.accordeon .acc-head').on('click', f_acc);

function f_acc() {
    $('.accordeon .acc-body').not($(this).next()).slideUp(200).siblings(".acc-head").removeClass("active_svg");
    $(this).toggleClass("active_svg").next().slideToggle(200);
}

$(".call_menu").on("click", function() {
    $("nav").toggleClass("nav_active");
});

$(".close_men").on("click", function() {
    $("nav").removeClass("nav_active");
});

$(".arr_nav").on("click", function() {
    $(this).toggleClass("arr_active").siblings(".sub_menu").slideToggle(200);
});


var header = $('header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

const swiper = new Swiper('.item .swiper-container', {
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.item .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.item .swiper-button-next',
        prevEl: '.item .swiper-button-prev',
    }
});

$(".heart_slide").on("click", function() {
    $(this).toggleClass("heart_slide_active")
});

$(".items_color_wrap span").on("click", function() {
    $(".items_color_wrap span").removeClass("active_color");
    $(this).toggleClass("active_color");
});

$(".table_size_box").on("click", function() {
    $('.table_size_box').removeClass("table_size_box_active");
    $(this).addClass("table_size_box_active");
});

$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});