$(document).ready(function () {

	// *** Disable image map on small devices
	if ($(window).width() < 1200) {
		$('#sprint-car').removeAttr('usemap');
		$('.part').addClass('part-small');
	}

	// *** Highlight part cards on car part hover
	// car wheel
	$('#sprint-car-tire').hover(function () {
		$('#part3').toggleClass('part-highlighted');
	});
	// car large wing
	$('#sprint-car-large-wing').hover(function () {
		$('#part1').toggleClass('part-highlighted');
	});

	// car large wing
	$('#sprint-car-exhaust').hover(function () {
		$('#part4').toggleClass('part-highlighted');
	});

	// car large wing
	$('#sprint-car-small-wing').hover(function () {
		$('#part5').toggleClass('part-highlighted');
	});

	// car large wing
	$('#sprint-car-large-sponsor').hover(function () {
		$('#part2').toggleClass('part-highlighted');
	});

	// car large wing
	$('#sprint-car-wheel').hover(function () {
		$('#part6').toggleClass('part-highlighted');
	});
});
