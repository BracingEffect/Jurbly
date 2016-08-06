var agent = navigator.userAgent || navigator.vendor || window.opera || '';
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
var isIOS = /iPhone|iPad|iPod/i.test(agent);

if (isIOS) {
    {% include js/iosfix.js %}
}

jQuery(document).ready(function($) {

    var $document = $(document),
        $window = $(window),
        $navbar = $('#top-navbar'),
        $navbarContent = $('#top-navbar-content');

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
