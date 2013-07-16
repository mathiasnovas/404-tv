(function () {

    var app = {

        init: function () {
            app.fetch();
        },

        fetch: function () {
            $.ajax({
                url: 'http://www.reddit.com/r/perfectloops/hot.json',
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'jsonp',
                crossDomain: true,
                data: {
                    'limit': 10,
                    'sort': 'new'
                },
                success: function (data) {
                    if (data.data.children.length > 0) {
                        var random = Math.floor(Math.random()*10)+1;
                        app.render(data.data.children[random].data);
                    }
                }
            });
        },

        render: function (data) {
            var screen = $('.image');
            screen.css('background-image', 'url("' + data.url + '")');
        }

    }

    app.init();

}) ();
