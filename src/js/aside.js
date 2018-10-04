$('#aside-sm-trigger').on('click', function () {
	$('.c-aside').removeClass('c-aside-lg').toggleClass('c-aside-sm');
});

$('#aside-lg-trigger').on('click', function () {
	$('.c-aside').removeClass('c-aside-sm').toggleClass('c-aside-lg');
});

$('#aside-collapse-trigger').on('click', function () {
	$('.c-aside').toggleClass('c-aside-collapse');
});

$('#aside-right-trigger').on('click', function () {
	$('.c-aside').toggleClass('c-aside-right');
});
