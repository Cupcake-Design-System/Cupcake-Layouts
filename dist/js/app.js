// --------------------------------------------
// Sidebars Desktop ----------------------------
// --------------------------------------------

// Toggle min sidebar class
$('.c-sidenav-main-toggle').on('click', function (e) {
  e.preventDefault();

  $('body').toggleClass('c-sidenav-folded').removeClass('c-sidenav-mobile-main');
});


// Toggle main sidebar
$(document).on('click', '.c-sidenav-main-hide', function (e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-main-hidden');
});


// Toggle User in sidebar
$(document).on('click', '.c-sidenav-user-toggle', function (e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-user-hidden');
});


// Toggle secondary sidebar
$(document).on('click', '.c-sidenav-secondary-toggle', function (e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-secondary-hidden');
});


// Show right, resize main
$(document).on('click', '.c-sidenav-right-main-toggle', function (e) {
    e.preventDefault();

    // Right sidebar visibility
    $('body').toggleClass('c-sidenav-right-visible');

    // If visible
    if ($('body').hasClass('c-sidenav-right-visible')) {

        // Make main sidebar mini
        $('body').addClass('c-sidenav-folded');

        // Hide children lists if they are opened, since sliding animation adds inline CSS
        $('.c-sidenav-main .c-sidenav-menu').children('.c-sidenav-menu-item').children('.c-sidenav-menu-submenu-group').css('display', '');
    }
    else {
        $('body').removeClass('c-sidenav-folded');
    }
});


// Show right, hide main
$(document).on('click', '.c-sidenav-right-main-hide', function (e) {
    e.preventDefault();

    // Opposite sidebar visibility
    $('body').toggleClass('c-sidenav-right-visible');

    // If visible
    if ($('body').hasClass('c-sidenav-right-visible')) {
        $('body').addClass('c-sidenav-main-hidden');
    }
    else {
        $('body').removeClass('c-sidenav-main-hidden');
    }
});


// Toggle right sidebar
$(document).on('click', '.c-sidenav-right-toggle', function (e) {
    e.preventDefault();

    $('body').toggleClass('c-sidenav-right-visible');
});


// Show right, hide secondary
$(document).on('click', '.c-sidenav-right-secondary-toggle', function (e) {
    e.preventDefault();

    // Opposite sidebar visibility
    $('body').toggleClass('c-sidenav-right-visible');

    // If visible
    if ($('body').hasClass('c-sidenav-right-visible')) {
        $('body').addClass('c-sidenav-secondary-hidden');
    }
    else {
        $('body').removeClass('c-sidenav-secondary-hidden');
    }
});


// Toggle content sidebar
$(document).on('click', '.c-sidenav-component-toggle', function (e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-component-hidden');
});



// --------------------------------------------
// Sidebars Mobile ----------------------------
// --------------------------------------------

// Expand sidebar to full screen on mobile
$('.c-sidenav-mobile-expand').on('click', function (e) {
    e.preventDefault();
    var $sidebar = $(this).parents('.c-sidenav'),
        sidebarFullscreenClass = 'c-sidenav-fullscreen'

    if(!$sidebar.hasClass(sidebarFullscreenClass)) {
        $sidebar.addClass(sidebarFullscreenClass);
    }
    else {
        $sidebar.removeClass(sidebarFullscreenClass);
    }
});


// Toggle main sidebar on mobile
$('.c-sidenav-mobile-main-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-mobile-main').removeClass('c-sidenav-mobile-secondary c-sidenav-mobile-right');

    if($('.c-sidenav-main').hasClass('c-sidenav-fullscreen')) {
        $('.c-sidenav-main').removeClass('c-sidenav-fullscreen');
    }
});


  // Toggle secondary sidebar on mobile
$('.c-sidenav-mobile-secondary-toggle').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-mobile-secondary').removeClass('c-sidenav-mobile-main c-sidenav-mobile-right');

    // Fullscreen mode
    if($('.c-sidenav-secondary').hasClass('c-sidenav-fullscreen')) {
        $('.c-sidenav-secondary').removeClass('c-sidenav-fullscreen');
    }
});


// Toggle right sidebar on mobile
$('.c-sidenav-mobile-right-toggle').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-mobile-right').removeClass('c-sidenav-mobile-main c-sidenav-mobile-secondary');

    // Hide sidebar if in fullscreen mode on mobile
    if($('.c-sidenav-right').hasClass('c-sidenav-fullscreen')) {
        $('.c-sidenav-right').removeClass('c-sidenav-fullscreen');
    }
});


// Toggle component sidebar on mobile
$('.c-sidenav-mobile-component-toggle').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('c-sidenav-mobile-component');
});


// --------------------------------------------
// Sidebars Menu ----------------------------
// --------------------------------------------

// Define default class names and options
var navClass = 'c-sidenav-menu',
    navItemClass = 'c-sidenav-menu-item',
    navItemOpenClass = 'c-sidenav-menu-item-open',
    navLinkClass = 'c-sidenav-menu-link',
    navSubmenuClass = 'c-sidenav-menu-submenu-group',
    navSlidingSpeed = 250;

    // Configure collapsible functionality
    $('.' + navClass).each(function() {
        $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
            e.preventDefault();

            // Simplify stuff
            var $target = $(this),
                $navSidebarMini = $('.c-sidenav-folded').not('.c-sidenav-mobile-main').find('.c-sidenav-main .' + navClass).children('.' + navItemClass);

            // Collapsible
            if($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
                $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
            }
            else {
                $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed);
            }

            // Accordion
            if ($target.parents('.' + navClass).data('nav-type') == 'accordion') {
                $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed);
            }
        });
    });



// --------------------------------------------
// Misc ---------------------------------------
// --------------------------------------------

// Toggle Dropdown
$(document).on('click', '.c-sidenav-user-dropdown', function (e) {
  e.preventDefault();
  $('#user-nav').toggleClass('c-d-flex');
  $(this).toggleClass('c-d-flex');
});


// Quickview Stuff
$(".c-quickview-close").on("click", function () {
  $(this).closest(".c-quickview").toggleClass("reveal")
});

$("#qv-basic-trigger").on("click", function () {
  $("#qv-basic").toggleClass("reveal");
  $("#backdrop-main").toggle()
});

$("#backdrop-main").on("click", function () {
  $("#backdrop-main").toggle();
  $("#qv-basic").toggleClass("reveal")
});

$("#qv-sm-trigger").on("click", function () {
  $("#qv-sm").toggleClass("reveal")
});

$("#qv-lg-trigger").on("click", function () {
  $("#qv-lg").toggleClass("reveal")
});

$("#qv-xl-trigger").on("click", function () {
  $("#qv-xl").toggleClass("reveal")
});

$("#qv-xxl-trigger").on("click", function () {
  $("#qv-xxl").toggleClass("reveal")
});

$("#qv-backdrop-light-trigger").on("click", function () {
  $("#qv-backdrop-light").toggleClass("reveal");
  $("#backdrop-light").toggle()
});

$("#backdrop-light").on("click", function () {
  $("#backdrop-light").toggle();
  $("#qv-backdrop-light").toggleClass("reveal")
});

$("#light-close").on("click", function () {
  $("#backdrop-light").toggle();
  $("#qv-backdrop-light").removeClass("reveal")
});

$("#qv-backdrop-dark-trigger").on("click", function () {
  $("#qv-backdrop-dark").toggleClass("reveal");
  $("#backdrop-dark").toggle()
});

$("#backdrop-dark").on("click", function () {
  $("#backdrop-dark").toggle();
  $("#qv-backdrop-dark").toggleClass("reveal")
});

$("#dark-close").on("click", function () {
  $("#backdrop-dark").toggle();
  $("#qv-backdrop-dark").removeClass("reveal")
});
