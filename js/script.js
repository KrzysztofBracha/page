$(document).ready(function () {

    var curr_size;
    function make_gallery(quantity) {
        $(".gallery").html("");
        for (var i=1; i<=quantity; ++i) {
            var el = document.createElement("div");
            var filter = document.createElement("div");
            $(filter).addClass("filter");
            el.append(filter);
            $(el).css('background-image', 'url("img/gallery/img' + i +'.jpg")');
            $(".gallery").append(el);
        }
    }

    $(window).resize(function() {
        check_size();
    });

    function check_size() {
        var width = $(window).width();
        choose_quantity(width);
    }

    function choose_quantity(width) {
        if (width >= 1200 && curr_size != 'xl') {
            console.log(curr_size);
            curr_size = 'xl';
            make_gallery(21);
        } else if ((width >= 992) && (width < 1200) && (curr_size != 'lg')) {
            curr_size = 'lg';
            make_gallery(18);
        } else if ((width >= 768) && (width < 992) && (curr_size != 'md')) {
            curr_size = 'md';
            make_gallery(15);
        } else if ((width >= 576) && (width < 768) && (curr_size != 'sm')) {
            curr_size = 'sm';
            make_gallery(11);
        } else if ((width < 576) && (curr_size != 'xs')) {
            curr_size = 'xs';
            make_gallery(6);
        }
    }
    check_size();
});