$(function () {

    // handle public homepage sliders
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

    // handle hero announcements, member accomplishments, and interior sliders
    $('.member-slide').wrapAll('<div class="member-slider slick-dotted" />');
    $('.interior-slide').wrapAll('<div class="interior-slider slick-dotted" />');
    $('.hero-announcements .HLLandingControl .Content ul.include-ul, .member-slider, .interior-slider').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow prev-arrow"><i class="ift ift-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-arrow next-arrow"><i class="ift ift-chevron-right"></i></button>'
    });
});