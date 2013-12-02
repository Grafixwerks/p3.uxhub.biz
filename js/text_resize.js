$(document).ready(function(){
    var resize = $.cookie('textsize');
    var options = { path: '/', expires: 10 };
    if (resize == 'small') {
      $('body').removeClass("medium");
      $('body').removeClass("large");
      $('body').addClass("small");
    };
	
    if (resize == 'medium') {
      $('body').removeClass("small");
      $('body').removeClass("large");
      $('body').addClass("medium");
    };		

    if (resize == 'large') {
      $('body').removeClass("small");
      $('body').removeClass("medium");
      $('body').addClass("large");
    };	

    $('#small-text').click(function () {
      $('body').removeClass("medium");
      $('body').removeClass("large");
      $('body').addClass("small");
	  $.cookie('textsize', 'small');
	  return false;
    });
	
    $('#medium-text').click(function () {
      $('body').removeClass("small");
      $('body').removeClass("large");
      $('body').addClass("medium");
	  $.cookie('textsize', 'medium');
	  return false;
    });	
	
    $('#large-text').click(function () {
      $('body').removeClass("small");
      $('body').removeClass("medium");
      $('body').addClass("large");
	  $.cookie('textsize', 'large');
	  return false;
    });	
	
}); // Closes Document Ready
