// for header start-------------------------------------------------

$(document).ready(function() {
    $(".megamenu").on("click", function(e) {
        e.stopPropagation();
    });
    $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('navbar-dark bg-dark');
          $('nav').removeClass('navbar-light bg-light');
    }

    else {
          $('nav').addClass('navbar-light bg-light');
          $('nav').removeClass('navbar-dark bg-dark');
    }
    });
    
    
});
// header end-------------------------------------------------


// preloader start----------------------------------------------
$(window).on("load",function (){

    var wind = $(window);

    // Preloader
    $(".loading").fadeOut(3000);
});
// preloader end-------------------------------------------------

// login start-------------------------------------------------
    $().ready(function(){
        $('[rel="tooltip"]').tooltip();

        $('a.scroll-down').click(function(e){
            e.preventDefault();
            scroll_target = $(this).data('href');
             $('html, body').animate({
                 scrollTop: $(scroll_target).offset().top - 60
             }, 1000);
        });

    });
    function rotateCard(btn){
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }
// login end-------------------------------------------------

