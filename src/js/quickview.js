$('.c-quickview-close').on('click', function () {
	$(this).closest('.c-quickview').toggleClass('reveal');
});

$('#qv-basic-trigger').on('click', function () {
	$('#qv-basic').toggleClass('reveal');
	$('#backdrop-main').toggle();
});

$('#backdrop-main').on('click', function () {
	$('#backdrop-main').toggle();
	$('#qv-basic').toggleClass('reveal');
});

$('#qv-sm-trigger').on('click', function () {
	$('#qv-sm').toggleClass('reveal');
});

$('#qv-lg-trigger').on('click', function () {
	$('#qv-lg').toggleClass('reveal');
});

$('#qv-xl-trigger').on('click', function () {
	$('#qv-xl').toggleClass('reveal');
});

$('#qv-xxl-trigger').on('click', function () {
	$('#qv-xxl').toggleClass('reveal');
});

//  Light
$('#qv-backdrop-light-trigger').on('click', function () {
	$('#qv-backdrop-light').toggleClass('reveal');
	$('#backdrop-light').toggle();
});

$('#backdrop-light').on('click', function () {
	$('#backdrop-light').toggle();
	$('#qv-backdrop-light').toggleClass('reveal');
});

$('#light-close').on('click', function () {
	$('#backdrop-light').toggle();
	$('#qv-backdrop-light').removeClass('reveal');
});
// Light

$('#qv-backdrop-dark-trigger').on('click', function () {
	$('#qv-backdrop-dark').toggleClass('reveal');
	$('#backdrop-dark').toggle();
});

$('#backdrop-dark').on('click', function () {
	$('#backdrop-dark').toggle();
	$('#qv-backdrop-dark').toggleClass('reveal');
});

$('#dark-close').on('click', function () {
	$('#backdrop-dark').toggle();
	$('#qv-backdrop-dark').removeClass('reveal');
});

