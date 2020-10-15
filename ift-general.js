function handleAnnouncementBar() {
    $('.announcement-bar').append('<button type="button" onclick="closeAnnouncement();"><i class="ift ift-close ift-2x"></i></button>');
}

function closeAnnouncement() {
    $('.announcement-bar').hide();
}

function handleSearch() {
    $('#NAV .navbar-nav').after('<button type="button" class="search-btn-top"></button>');
}

$(function () {
    handleAnnouncementBar();
    handleSearch();
});