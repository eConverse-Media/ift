function handleAnnouncementBar() {
    $('.announcement-bar').append('<button type="button" onclick="closeAnnouncement();"><i class="ift ift-close ift-2x"></i></button>');
}

function closeAnnouncement() {
    $('.announcement-bar').hide();
}

function handleSearch() {
    $('#NAV .navbar-nav').after('<button type="button" class="search-btn-top"></button>');
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

    $('.popular-stories .HLLandingControl ul li').each(function () {
        var self = $(this);

        handleAjaxCall(self);

        // handle community name text
        var communityName = $(self).find('h5 a'),
            title = $(self).find('h3');

        $(communityName).insertBefore(title);
        $(communityName).wrap('<h5 class="community-name" />');
    });
}

$(function () {
    handleAnnouncementBar();
    handleSearch();
    handleHangingCards();
    handleMostPopularStories();
});