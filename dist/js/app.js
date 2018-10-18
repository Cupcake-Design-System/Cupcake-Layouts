
// Setup module
// ------------------------------

var App = function () {



  // Sidebars
  // -------------------------

  //
  // On desktop
  //

  // Resize main sidebar
  var _sidebarMainResize = function() {


      // If sidebar is resized by default
      if($('body').hasClass('c-sidenav-folded')) {
          revertBottomMenus();
      }

      // Toggle min sidebar class
      $('.c-sidenav-main-toggle').on('click', function (e) {
          e.preventDefault();

          $('body').toggleClass('c-sidenav-folded').removeClass('c-sidenav-mobile-main');
          revertBottomMenus();
      });
  };

  // Toggle main sidebar
  var _sidebarMainToggle = function() {
      $(document).on('click', '.c-sidenav-main-hide', function (e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-main-hidden');
      });
  };

    // Toggle User in sidebar
    var _sidebarUserToggle = function() {
      $(document).on('click', '.c-sidenav-user-toggle', function (e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-user-hidden');
      });
  };


  // Toggle secondary sidebar
  var _sidebarSecondaryToggle = function() {
      $(document).on('click', '.c-sidenav-secondary-toggle', function (e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-secondary-hidden');
      });
  };

  // Show right, resize main
  var _sidebarRightMainToggle = function() {
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
  };

  // Show right, hide main
  var _sidebarRightMainHide = function() {
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
  };

  // Toggle right sidebar
  var _sidebarRightToggle = function() {
      $(document).on('click', '.c-sidenav-right-toggle', function (e) {
          e.preventDefault();

          $('body').toggleClass('c-sidenav-right-visible');
      });
  };

  // Show right, hide secondary
  var _sidebarRightSecondaryToggle = function() {
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
  };

  // Toggle content sidebar
  var _sidebarComponentToggle = function() {
      $(document).on('click', '.c-sidenav-component-toggle', function (e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-component-hidden');
      });
  };


  //
  // On mobile
  //

  // Expand sidebar to full screen on mobile
  var _sidebarMobileFullscreen = function() {
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
  };

  // Toggle main sidebar on mobile
  var _sidebarMobileMainToggle = function() {
      $('.c-sidenav-mobile-main-toggle').on('click', function(e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-mobile-main').removeClass('c-sidenav-mobile-secondary c-sidenav-mobile-right');

          if($('.c-sidenav-main').hasClass('c-sidenav-fullscreen')) {
              $('.c-sidenav-main').removeClass('c-sidenav-fullscreen');
          }
      });
  };

  // Toggle secondary sidebar on mobile
  var _sidebarMobileSecondaryToggle = function() {
      $('.c-sidenav-mobile-secondary-toggle').on('click', function (e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-mobile-secondary').removeClass('c-sidenav-mobile-main c-sidenav-mobile-right');

          // Fullscreen mode
          if($('.c-sidenav-secondary').hasClass('c-sidenav-fullscreen')) {
              $('.c-sidenav-secondary').removeClass('c-sidenav-fullscreen');
          }
      });
  };

  // Toggle right sidebar on mobile
  var _sidebarMobileRightToggle = function() {
      $('.c-sidenav-mobile-right-toggle').on('click', function (e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-mobile-right').removeClass('c-sidenav-mobile-main c-sidenav-mobile-secondary');

          // Hide sidebar if in fullscreen mode on mobile
          if($('.c-sidenav-right').hasClass('c-sidenav-fullscreen')) {
              $('.c-sidenav-right').removeClass('c-sidenav-fullscreen');
          }
      });
  };

  // Toggle component sidebar on mobile
  var _sidebarMobileComponentToggle = function() {
      $('.c-sidenav-mobile-component-toggle').on('click', function (e) {
          e.preventDefault();
          $('body').toggleClass('c-sidenav-mobile-component');
      });
  };


  // Navigations
  // -------------------------

  // Sidebar navigation
  var _navigationSidebar = function() {

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

      // Disable click in disabled navigation items
      $(document).on('click', '.' + navClass + ' .disabled', function(e) {
          e.preventDefault();
      });

  };


  // Misc
  // -------------------------

  // Toggle Dropdown
  var _dropdownToggle = function() {
    $(document).on('click', '.c-sidenav-user-dropdown', function (e) {
      e.preventDefault();
      $('#user-nav').toggleClass('c-d-flex');
      $(this).toggleClass('c-d-flex');
    });
};


  //
  // Return objects assigned to module
  //

  return {


      // Initialize all sidebars
      initSidebars: function() {

          // On desktop
          _sidebarMainResize();
          _sidebarMainToggle();
          _sidebarUserToggle();
          _sidebarSecondaryToggle();
          _sidebarRightMainToggle();
          _sidebarRightMainHide();
          _sidebarRightToggle();
          _sidebarRightSecondaryToggle();
          _sidebarComponentToggle();

          // On mobile
          _sidebarMobileFullscreen();
          _sidebarMobileMainToggle();
          _sidebarMobileSecondaryToggle();
          _sidebarMobileRightToggle();
          _sidebarMobileComponentToggle();
      },

      // Initialize all navigations
      initNavigations: function() {
          _navigationSidebar();
      },


      // Dropdown submenu
      initDropdownSubmenu: function() {
          _dropdownToggle();
      },


      // Initialize core
      initCore: function() {
          App.initSidebars();
          App.initNavigations();
          App.initDropdownSubmenu();
      }
  }
}();


// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener('DOMContentLoaded', function() {
  App.initCore();
});
