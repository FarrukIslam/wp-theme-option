
(function($){

    "use strict";
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $('#scrolltotop-btn').fadeIn();
        }else{
            $('#scrolltotop-btn').fadeOut();
        }
    });
    $('#scrolltotop-btn').click(function(){
        $('html,body').animate({scrollTop : 0},500);
    });

})(jQuery);