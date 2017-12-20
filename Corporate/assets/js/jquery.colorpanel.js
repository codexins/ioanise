(function ($) {
    $.fn.ColorPanel = function (options) {
        var settings = $.extend({
            styleSheet: '#cpswitch',
             colors: {
                '#1abc9c': 'skins/default.css',
                '#2980b9': 'skins/blue.css',
                '#c0392b': 'skins/red.css',
            },
            linkClass: 'linka',
            animateContainer: false,
        }, options);
        var panelDiv = this;
		
		$('#cpToggle').click(function(e){
			e.preventDefault();
			 $('ul',panelDiv).slideToggle();
		});
		
        var colors = settings.colors || null;

        // defined manually a cookie name in order to keep the same styleshhet untill users click to change
        var addStyle = "add-stylesheet";
        // Must need jquery.cookie.js https://github.com/carhartl/jquery-cookie
        if($.cookie(addStyle)){
            $("link#cpswitch").attr("href",$.cookie(addStyle));
        }
        // Manual work finished

        if (colors) {
            $.each(colors, function (key, value) {
                var li = $("<li/>");
                var e = $("<a />", {
                    href: value
                    , "class": settings.linkClass, // you need to quote "class" since it's a reserved keyword
                }).css('background-color', key);
                li.append(e);
                $(panelDiv).find('ul').append(li);
            });
            $('ul',panelDiv).on('click', 'a', function (e) {
                e.preventDefault();
                    var CssFile = $(this).attr('href') || 'default.css';
                    if (settings.animateContainer) {
                        $(settings.animateContainer).fadeOut(function () {
                            $(settings.styleSheet).attr('href', CssFile);
                            $.cookie(addStyle, $(this).attr('href')); // set the cookie addStyle's value
                            // And then:
                            $(this).fadeIn();
                        });
                    }
                    else {
                        $(settings.styleSheet).attr('href', CssFile);
                        $.cookie(addStyle, $(this).attr('href')); // set the cookie addStyle's value
                    }
            });
        }
    };
}(jQuery));