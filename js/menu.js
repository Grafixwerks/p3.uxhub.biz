$(document).ready(function(){


//	hide when loading main content
	$('a.live').click(function () {
		$('.second-nav').hide();
		$('#nav li a.first').parent().removeClass("selected");
		$('#nav li a.first').parent().removeClass("click");
//		$('#nav li a.second').parent().removeClass("click");
//		$('#nav li a.third').parent().removeClass("click");
//		return false;
	});

//	hide everything on click top nav
	$('#nav li a.first').click(function () {
		$('.second-nav').hide();
		$('.third-nav').hide();
		$('.fourth-nav').hide();
		$('#nav li a.first').parent().removeClass("selected");
		$('#nav li a.first').parent().removeClass("click");
		$('#nav li a.second').parent().removeClass("click");
		$('#nav li a.third').parent().removeClass("click");
		return false;
	});

//	hide second click
	$('a.second').click(function () {
		$('a.second').parent().removeClass("click");
//		return false;
	});

////	hide third click
//	$('a.third').click(function () {
//		$('a.third').parent().removeClass("click");
////		return false;
//	});


////	open second
//	$('#meeting a.first').click(function () {
//		$(this).parent().addClass("click");
//		$('#meeting .second-nav').show();
////		return false;
//	});

	$('a.first').click(function () {
		$(this).parent().addClass("click");
		$(this).parent().children().show();		
//		$('#meeting .second-nav').show();
//		return false;
	})

//// open third
//	$('a.second').click(function () {
//		$('.third-nav').hide();
//		$(this).parent().addClass("click");
//		$(this).parent().children().show();
////		$(this).children().show();
////		$('#meeting .third-nav').show();
////		return false;
//	});

//// open fourth
//	$('a.third').click(function () {
//		$('.fourth-nav').hide();
//		$(this).parent().addClass("click");
//		$(this).parent().children().show();
////		$(this).children().show();
////		$('#meeting .third-nav').show();
////		return false;
//	});

//	open venue
//	$('#venue a.first').click(function () {
//		$(this).parent().addClass("click");
//		$('#venue .second-nav').show();
//		return false;
//	});

//	home
	$('#home a.first').click(function () {
		$(this).parent().addClass("selected");
		$('#nav li a.first').parent().removeClass("click");
		//$('#speakers .second-nav').show();
		return false;
	});

//	staff
	$('#staff a.first').click(function () {
		$(this).parent().addClass("selected");
		$('#nav li a.first').parent().removeClass("click");
		//$('#attendees .second-nav').show();
		return false;
	});

// email po-up
	$('#notes').click(function () {
		$('#note-pop').show();
		$('#shade-2').toggle().css({ opacity: 0.5, 'width':$(document).width(),'height':$(document).height()});
		return false;
	});

	$('.close-note').click(function () {
		$('#note-pop').hide();
		$('#shade-2').hide();
		return false;
	});


//$('#wrapper').css({ 'height':$(document).height()});
//'width':$(document).width(),


}); // Closes Document Ready
