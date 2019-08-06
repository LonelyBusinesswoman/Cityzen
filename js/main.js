var inCorrectValue;
function checkFields(form){
	$name = form.find('[name = name]');
	$tel = form.find('[name = tel]');
	$email = form.find('[name = email]');
	inCorrectValue = [];
	if( $name.val().length <= 1 ){
		inCorrectValue.push($name);
	}
	if( $email.val().indexOf('@') == -1 ){
		inCorrectValue.push($email);
	}
	if( $tel.val().length <= 9 ){
		inCorrectValue.push($tel);
	}
	inCorrectValue.forEach(function(item, i, arr) {
	if( $(item).is(' [name = email] ') ){
		$placeholder = 'Поле e-mail должно содержать символ @';
	}else if( $(item).is(' [name = tel] ') ){
		$placeholder = 'Поле телефон должно содержать минимум 10 цифр';
	}else if( $(item).is(' [name = name] ') ){
		$placeholder = 'Поле имя должно содержать минимум 3 символа';
	}
	  $(item).attr('placeholder', $placeholder);
	  $(item).data('last-value', $(item).val() );
	  $(item).val('');
	  $(item).addClass('wrong_data');
	});
	if( inCorrectValue.length > 0 ){
		return false;
	}
	return true;
}

$(document).ready(function($) {

 function Slider(){

 	var bigSlid = $('.slider_1');
	var smallSlid = $('.slider_2');
    bigSlid.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots:true,
        swipe:false
    });
    smallSlid.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        initialSlide: 1,
        swipe:false
    });

	$('.slid-rightArrow').click(function(){
		bigSlid.slick("slickPrev");
		smallSlid.slick("slickPrev");
    });
    $('.slid-leftArrow').click(function(){
		bigSlid.slick("slickNext");
		smallSlid.slick("slickNext");
	});
 }
 Slider();
 // autoclick
   setTimeout(function() { 
    $('.slid-leftArrow').click();
  }, 3000);


function doFunction() { // функция привязанная к клику на кнопку
  alert('I was pressed!');
}
/*FORM*/

	$(".modal").each( function(){
	    $(this).wrap('<div class="overlay"></div>')
	});

	$(".open-modal").on('click', function(e){
	    e.preventDefault();
	    e.stopImmediatePropagation;
	    
	    var $this = $(this),
	            modal = $($this).data("modal");
	    
	    $(modal).parents(".overlay").addClass("open");
	    setTimeout( function(){
	        $(modal).addClass("open");
	    }, 350);
	    
	    $(document).on('click', function(e){
	        var target = $(e.target);
	        
	        if ($(target).hasClass("overlay")){
	            $(target).find(".modal").each( function(){
	                $(this).removeClass("open");
	            });
	            setTimeout( function(){
	                $(target).removeClass("open");
	            }, 350);
	        }
	        
	    });
	    
	});

	$(".close-modal").on('click', function(e){
	    e.preventDefault();
	    e.stopImmediatePropagation;
	    
	    var $this = $(this),
	            modal = $($this).data("modal");
	    
	    $(modal).removeClass("open");
	    setTimeout( function(){ 
	        $(modal).parents(".overlay").removeClass("open");
	    }, 350);
	    
	}); 

	

	$('form a').click(function(e) {
		e.preventDefault();
		$form = $(this).closest('form');
		if( checkFields($form)){
			$.ajax({
			  type: "POST",
			  url: "mail.php",
			  data: $form.serialize(),
			  success: function(msg){
			   $form[0].reset();
			   $("#success").click();
			  }
			});
		}
		console.log(inCorrectValue);
	});
});