$(function () {
    $('.slider-content .community-list').wrapAll('<ul class="communities-list" />');
    $('.slider-content .Content ul > li, .slider-content .community-list').wrapInner('<div class="card" />');
    $('.slider-content .Content ul, .slider-content ul.communities-list').each(function () {
        var self = $(this),
            parentRow = $(self).closest('.row-wide'),
            text = $(parentRow).find('.slider-text'),
            prevArrow = $(text).find('button.prev-arrow'),
            nextArrow = $(text).find('button.next-arrow');

            
        $(self).slick({
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: prevArrow,
            nextArrow: nextArrow,
            responsive: [
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(prevArrow).wrap('<div class="slider-buttons" />');
        $(nextArrow).insertAfter(prevArrow);
    });
});