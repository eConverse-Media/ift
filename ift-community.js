function handleCommunityHtml() {
    handleBgImage($('.summary-edit .group-banner-image'), $('.summary-edit'));

    $('#PageTitleH1').prependTo('.summary-edit .Content');
    $('.JoinLeaveLink').appendTo('.summary-edit .Content');
    $('.JoinLeaveLink a[id*="ucPermissionJoin"]').text('Join group');
    
}

function handleAnnouncementCard() {
    handleAjaxCall($('.announcement-card .HLLandingControl'), true);
}

$(function () {
    handleCommunityHtml();
    handleAnnouncementCard();
});