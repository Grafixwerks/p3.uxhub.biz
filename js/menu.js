$(document).ready(function(){

//	hide when loading main content
	$('a.live').click(function () {
		$('.second-nav').hide();
		$('#nav li a.first').parent().removeClass("selected");
		$('#nav li a.first').parent().removeClass("click");
//		return false;
	});

//	hide everything on click top nav
	$('#nav li a.first').click(function () {
		$('.second-nav').hide();
		$('#nav li a.first').parent().removeClass("selected");
		$('#nav li a.first').parent().removeClass("click");
		$('#nav li a.second').parent().removeClass("click");
//		$('#nav li a.third').parent().removeClass("click");
		return false;
	});

	$('a.first').click(function () {
		$(this).parent().addClass("click");
		$(this).parent().children().show();		
//		return false;
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



// email po-up
	$('.email').click(function () {
		var email = $(this).attr('title');
		$('#email-pop').show();
		$('#shade').toggle().css({ opacity: 0.6, 'width':$(document).width(),'height':$(document).height()});
		return false;
	});

	$('.close').click(function () {
		$('#email-pop').hide();
		$('#shade').hide();
		return false;
	});

   
   $("#send-mail").click(function(event) {

        $.ajax({
        url: "webservice.php",
        type: "POST",
        data: $("#email").serialize(),
        success: function(data) {
//                       $('#email-pop-2 .error-email').html(data);
//           $('#email-pop-2 .error-email').show();
           $('#email-success').html(data);
           $('#email-success').show();
		   $('#email').hide();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
        });
   });



}); // Closes Document Ready
