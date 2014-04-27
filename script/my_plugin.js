$(document).ready(function() {


	$("#plus").click(function() {

		$("h1").removeClass('decrease_h1');
		$("h2").removeClass('decrease_h2');
		$("p").removeClass('decrease_p');
		$("h1").addClass('increase_h1');
		$("h2").addClass('increase_h2');
		$("p").addClass('increase_p');

	});

	$("#reset").click(function() {

		$("h1").removeClass('increase_h1');
		$("h1").removeClass('decrease_h1');
		$("h2").removeClass('increase_h2');
		$("h2").removeClass('decrease_h2');
		$("p").removeClass('increase_p');
		$("p").removeClass('decrease_p');

	});

	$("#minus").click(function() {
		$("h1").removeClass('increase_h1');
		$("h2").removeClass('increase_h2');
		$("p").removeClass('increase_p');
		$("h1").addClass('decrease_h1');
		$("h2").addClass('decrease_h2');
		$("p").addClass('decrease_p');

	});

});

