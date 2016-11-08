jQuery(document).ready(function($) {

    var $window = $(window),
        $navbar = $('#top-navbar'),
        $navbarContent = $('#top-navbar-content'),
        $navbarToggle = $('#top-navbar-toggle');

    $navbarContent.localScroll({
        filter:'.smoothScroll',
        duration: 300,
        hash: true,
        onBefore: function() {
            if ($navbarToggle.is(':visible')) {
                $navbarContent.collapse('hide');
            }
        }
    });

    $navbarContent.on('hide.bs.collapse', function () {
        $navbar.removeClass('expanded');
    });

    $navbarContent.on('show.bs.collapse', function () {
        $navbar.addClass('expanded');
    });

    var updateNavbarTransparency = function() {
        if ($window.scrollTop() > 0) {
            $navbar.addClass('opaque');
        } else {
            $navbar.removeClass('opaque');
        }
    };
    updateNavbarTransparency();
    $window.scroll(updateNavbarTransparency);
});
