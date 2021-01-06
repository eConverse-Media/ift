$(function () {
    var url = 'https://api-public.rasa.io/v1/top-articles/b95c857c-e040-4662-a45f-a5b6bfe7a887',
        container = $('.most-popular-articles');

    if (!!($(container).html())) {
        $.ajax({
            url: url,
            dataType: 'json',
            success: success,
            error: error
        });
    }


    function success(resp) {

        if ($(container).hasClass('show-3')) {
            numToList = 3;
        } else {
            numToList = resp.results.length;
        }
        
        for (var i = 0; i < numToList; i++) {
            var self = resp.results[i];

                title = self.title,
                img = self.hosted_image_url,
                href = self.original_url,
                source = self.site_name,
                date = self.published,
                text = self.description;

            var elem = '<div class="popular-article"><div class="img-container" style="background-image: url(\'' + img +'\');"></div><div class="text-container"><h3><a href="' + href + '" target="_blank" rel="noopener">' + title + '</a></h3><div class="ByLine">From: ' + source + '</div><div class="desc">' + text + '</div></div></div>';

            $(elem).appendTo(container);
        }
    }

    function error() {
        console.log('There has been an error');
    }
});