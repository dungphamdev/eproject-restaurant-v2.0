$(document).ready(function(){
    $(".featured-filter").click(function(){        
    	var value = $(this).attr('data-filter');                
    	if(value == "all"){
    		$('.filter').show('1000');        
    	} else {
    		$(".filter").not('.'+value).hide('3000');            
    		$('.filter').filter('.'+value).show('3000');
    	}
    	$('.featured-filter').each(function(){
    		if($(this).hasClass("active")){
    			$(this).removeClass("active");
    		}
    		if($(this).hasClass(value)){
    			$(this).addClass("active");
    		}
    	});
   	});
});