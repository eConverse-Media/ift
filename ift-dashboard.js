$(function () {
    // make the top row
    var greeting = $('.member-dashboard-greeting span'),
        name = $('.HLWelcomeHeader .panel-body h4').text();
    
    $(greeting).html('<span>Welcome back, </span><a href="profile">' + name + '</a>');
    
    // handle image
    $('.user-details > .col-md-3').append($('#Welcome_Content .panel-body a[id*="Welcome_Details_ProfileLink"]'));
    $('.user-details a[id*="Welcome_Details_ProfileLink"]').wrap('<div class="member-dashboard-img" />');

    // add email content
    var linkToInbox = '/network/members/profile/myaccount/inbox/',
		unreadEmailCount = $('a[id^="Welcome_Details_MessagesCount"]').length !== 0 ? parseInt($('a[id^="Welcome_Details_MessagesCount"]').text()) : 0,
        emailContent = '<div class="email-content"><a href ="' + linkToInbox + '"><i class="ift ift-envelope"></i>' + unreadEmailCount + '</a></div>';

    $(emailContent).appendTo('.member-dashboard-img');

    // handle progress bar

    var progressBar = $('div[id*="CompleteBarProgress"]').clone();

    if (!!$.trim($(progressBar).html())) {
        $(progressBar).appendTo('.progress-section');
    }

    // create dashboard

    $('.user-details, .progress-section, .dashboard-links, .dashboard-buttons').wrapAll('<div class="member-dashboard" />');
    $('.member-dashboard').wrap('<div class="member-dashboard-wrap" />');

    // create logout link
    var logoutLink = $('#ProfileContainer a[id*="logoutLink"]').clone();

    $(logoutLink).appendTo('.member-dashboard-wrap');

    // handle button

    $('.HLWelcome').append($('.member-dashboard-wrap'));

    $('.HLWelcome .Welcome .imgButton').after('<button type="button" class="my-dashboard-button">My Dashboard</button>');

    if (unreadEmailCount > 0) {
        $('.HLWelcome .Welcome > .btn-group').prepend('<span class="email-count">' + unreadEmailCount + '</span>');
    }

    $('.my-dashboard-button, .HLWelcome .Welcome .imgButton').click(function () {

        $('.member-dashboard-wrap').toggleClass('open');
        $('.HLWelcome').toggleClass('dashboard-open');
        $('body').toggleClass('dashboard-open');
        $('#MPOuterMost').removeClass('menu-open');

    });


});