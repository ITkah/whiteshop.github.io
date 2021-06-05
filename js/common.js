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