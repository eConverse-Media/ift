function toggleTopMenu() {
    $('.top-menu .HtmlContent').toggleClass('open');
    $('body').toggleClass('top-menu-open');
    $('#MPOuterHeader').toggleClass('top-menu-open');
}

function handleMobileNav() {

    // handle moving TTL to nav on mobile

    $('#MPAuxNav ul.level1').clone().insertAfter('.navbar-nav');
    $('#NAV').clone().addClass('mobile-nav').appendTo('.top-menu');

    // handle nav button toggle
    $('.navbar-toggle').click(function () {
        $('body').toggleClass('main-menu-open');
        $('#NAV').toggleClass('open');
        $('#MPOuterHeader').toggleClass('main-menu-open');
    });
}

function handleAnnouncementBar() {
    $('.announcement-bar').append('<button type="button" onclick="closeAnnouncement();"><i class="ift ift-close ift-2x"></i></button>');
}

function closeAnnouncement() {
    $('.announcement-bar').hide();
}

function handleSearch() {
    $('#NAV .navbar-nav').after('<button type="button" class="search-btn-top" onclick="toggleSearch();"></button>');
    $('.search-btn-top').before($('.search-bar-top'));
    $('#searchColumn .form-control').attr('placeholder', 'Search by keyword');
    $(document).click(function (e) {
        var searchBar = $('.search-bar-top'),
            searchButton = $('.search-btn-top'),
            target = e.target;

        if (!($(target).is(searchBar)) &&
            !($(target).is(searchButton)) &&
            !($(target).closest('.search-bar-top').html()) &&
            !($(target).closest('.search-btn-top').html())) {
                closeSearch();
        }
    });
}

function toggleSearch() {
    if ($('.search-bar-top').hasClass('open')) {
        closeSearch();
    } else {
        openSearch();
    }
}
    
function closeSearch() {
    $('.search-bar-top').removeClass('open');
    $('.search-btn-top').removeClass('open');
}

function openSearch() {
    $('.search-bar-top').addClass('open');
    $('.search-btn-top').addClass('open');
    $('.search-bar-top .form-control').focus();
}

function topOfPage() {
	$('body,html').animate({scrollTop: 0}, 500);
}

function scrollToLocation(val) {
	var headerHeight = !!($('#MPOuterHeader').hasClass('stickyNav')) ? $('#MPOuterHeader').height() : 0;
	var location = $(val).offset().top - headerHeight; 
	$('body,html').animate({scrollTop: location}, 500);
}

function handleHangingCards() {
    $('.hanging-card').each(function () {
        var self = $(this),
            link = $(self).find('a'),
            href = $(link).attr('href'),
            target = $(link).attr('target');

        if (target == "_blank") {
            $(self).wrapInner('<a href="' + href + '" target="_blank" />');
        } else {
            $(self).wrapInner('<a href="' + href + '" />');
        }

        $(link).hide();
    });
}

function handleMostPopularStories() {
    handleBgImage($('.popular-stories-bg'), $('.popular-stories'));

    $('.popular-stories .HLLandingControl ul li').wrapInner('<div class="text-container" />');
}

function handleDateBlocks() {
    $('.private-events .HLLandingControl ul li, .interior .HLEventList ul li').each(function () {

        // handle date block

        var self = $(this),
            month = $(self).find('.date-block .calendar-month'),
            text = $(month).text();

        text = $.trim(text);
        text = text.substring(0, 3);
        $(month).text(text);

        // handle date

        var date = $(self).find('.timeAgoFormat'),
            location = $(self).find('div[id*="LocationPanel"]'),
            parent = $(date).closest('.col-md-12.no-pad');

        $(date).appendTo(parent);
        $(location).appendTo(parent);
    });
}

function handleHero() {
    var hero = $('.private-hero'),
        name = $.trim($('#ProfileContainer h4').text()),
        nameH1 = '<h1>' + name + '!</h1>';

    $(nameH1).insertAfter($(hero).find('.HtmlContent > h2'));

    // handle announcements
    $('.hero-announcements').appendTo(hero);

    // handle background image
    var heroSection = !!($('.private-hero').html()) ? $('.private-hero') : $('.public-hero'),
        heroImages = $('.hero-bg-image').toArray(),
        imgToSelect = Math.floor(Math.random() * (heroImages.length - 1)),
        bgImageUrl = 'url("' + $(heroImages[imgToSelect]).find('img').attr('src') + '")';

    $(heroSection).css('background-image', bgImageUrl);
}

function handleBylines() {
    $('.HLLandingControl ul li').each(function () {
        var self = $(this),
            byline = $(self).find('.ByLine');

        $(byline).appendTo(self);
    });
}

function handleInteriorPages() {
    handleBgImage($('.secondary-title'), $('.secondary-title'));
    $('.interior-slide').each(function () {
        var self = $(this);

        $(self).find('img').wrap('<div class="img-container" />');
        handleBgImage($(self).find('.img-container'), $(self).find('.img-container'));
        $(self).find('.HtmlContent > *:not(.img-container)').wrapAll('<div class="text-container" />');
    });
}

$(function () {
    handleAnnouncementBar();
    handleSearch();
    handleHangingCards();
    handleMostPopularStories();
    handleDateBlocks();
    handleHero();
    handleBylines();
    handleMobileNav();
    handleInteriorPages();
});