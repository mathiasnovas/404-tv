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
                        var isGif = function (el) {
                            return el.data.url.match(/gif$/);
                        }

                        var filtered = data.data.children.filter(isGif),
                            rand = filtered[Math.floor(Math.random() * filtered.length)];

                        app.render(rand.data);
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
