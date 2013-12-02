$(document).ready(function(){

	$('.show-hide').click(function () {
		$('#leaving').toggle();
		$('#shade').toggle().css({ opacity: 0.5, 'width':$(document).width(),'height':$(document).height()});
		$('#leaving').css({ 'top':150+$(window).scrollTop() });
		var page = $(this).attr('href');
		$('#ok').attr("href", page);
		return false;
	});
	$('#ok').click(function () {
		$('#leaving').toggle();
		$('#shade').toggle();	
	});
}); // Closes Document Ready

