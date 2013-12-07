// Andy Pearson
// CSCI E-15 P 3
$(document).ready(function(){
$('.scrollable').load('home.html', function(response, status, xhr) {
			  if (status == "error") {
			  var msg = "<h3>Sorry but there was an error.</h3>";
			 $("#load-error").html(msg);
			  }
		});	

// text resize 
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

//	hide navigation items when loading main content
	$('a.live').click(function () {
		$('.second-nav').hide();
		$('#nav li a.first').parent().removeClass("selected");
		$('#nav li a.first').parent().removeClass("click");
	});

//	hide everything on click top nav
	$('#nav li a.first').click(function () {
		$('.second-nav').hide();
		$('#nav li a.first').parent().removeClass("selected");
		$('#nav li a.first').parent().removeClass("click");
		$('#nav li a.second').parent().removeClass("click");
		return false;
	});

	$('a.first').click(function () {
		$(this).parent().addClass("click");
		$(this).parent().children().show();		
	})

	// load main content
	$('.content').click(function () {
		var link = $(this).attr('href');
		$('.scrollable').load(link, function(response, status, xhr) {
			  if (status == "error") {
			  var msg = "<h3>Sorry but there was an error.</h3>";
			 $("#load-error").html(msg);
			  }
		});	
		return false;
	});

//	Nav home link
	$('#home a.first').click(function () {
		var link = $(this).attr('href');
		$(this).parent().addClass("selected");
		$('#nav li a.first').parent().removeClass("click");
		return false;
	});

//	Nav staff link
	$('#staff a.first').click(function () {
		var link = $(this).attr('href');
		$(this).parent().addClass("selected");
		$('#nav li a.first').parent().removeClass("click");
		return false;
	});

// email modal
	$('.scrollable').on("click", ".email", function() {
		var name = $(this).attr('title');
		$('#email-pop').show();
		$('#to').text(name);
		$('#shade').toggle().css({ opacity: 0.6, 'width':$(document).width(),'height':$(document).height()});
		return false;	
	});		

// close email modal
	$('.close').click(function () {
		$('#email-pop').hide();
		$('#shade').hide();
		return false;
	});

// Validate email form and send email via Ajax
$('#email').validate({
		rules: {
			"subject": {
				required: true,
				minlength: 2
			},
			"message": {
				required: true,
				minlength: 2
			}
		},
		messages: {
			"subject": "Please enter subject.",
			"message": "Please enter message."
		},
		// move error message 
		errorPlacement: function(error, element) {
			 error.appendTo(element.parent());
		},
    submitHandler: function(form) {
        $.ajax({
        url: "webservice.php",
        type: "POST",
        data: $("#email").serialize(),
        success: function(data) {
           $('#email-success').html(data);
           $('#email-success').show();
		   $('#email').hide();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
        });
    }
});

}); // Closes Document Ready