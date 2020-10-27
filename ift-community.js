function handleCommunityHtml() {
    handleBgImage($('.summary-edit'), $('.summary-edit'));

    $('#PageTitleH1').prependTo('.summary-edit .Content');
    $('.JoinLeaveLink').appendTo('.summary-edit .Content');
    $('.JoinLeaveLink a[id*="ucPermissionJoin"]').text('Join group');
}

$(function () {
    handleCommunityHtml();
});