$(document).ready(function () {

  // sidebar nav elements
  var $sidebarNavContainer = $("body")
  var $sidebarNavBody = $(".c-sidenav-body");
  var $sidebarNavListToggle = $(".c-sidenav-menu-link");
  var $sidebarNavLinkName = $(".c-sidenav-menu");
  var $sidebarId = $("#js-nav");
  var $sidebarNavChildList = ".c-sidenav-menu-submenu";
  var $sidebarNavToggle = $(".c-sidenav-toggle, .c-sidenav-collapse");

  // sub menu toggle
  $($sidebarId).find($sidebarNavListToggle).on("click", function () {
    $(this).siblings($sidebarNavChildList).slideToggle(200);
    $(this).parent().toggleClass("c-sidenav-menu-item-active");
  })

  // point carets right or down when active
  $sidebarNavListToggle.on("click", function () {
    $(this).find(".fa-caret-right, .fa-caret-down").toggleClass("fa-caret-right fa-caret-down");
  })

  // open/close toggle
  $sidebarNavToggle.on("click", function () {
    $(this).find(".fa").toggleClass("fa-angle-left fa-angle-right");
    $sidebarNavContainer.toggleClass("c-sidenav-folded");
  })
})