// SLICK SLIDER
$(function(){
    $('.banner .slide').slick({
        arrows:false,
        dots:false,
        fade:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false
    });
    // DINING SLIDE
    $('.dining .dining_slide').slick({
        arrows:false,
        dots:false,
        fade:false,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false
    });
});


// TAB MENU
$(function(){
    $('.introduce .roominfo .tab li a').on('click', function(){
        var num = $('.introduce .roominfo .tab li a').index($(this));
        $('.introduce .roominfo .tabbox').removeClass('on');
        $('.introduce .roominfo .tabbox:eq('+ num +')').addClass('on');
    });
});



// SCROLLA
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    });
});

// MENU BUTTON
$(function(){
    $('header .menuopen').on('click',function(){
        $('header .menuwrap').addClass('on');
    });
    $('.menuwrap .close').on('click',function(){
        $('.menuwrap').removeClass('on');
    });
});


// FIXED HEADER
var scrollTop = 0;
scrollTop = $(document).scrollTop();

$(window).on('scroll resize', function(){
    scrollTop = $(document).scrollTop();
    fixHeader();
});

function fixHeader(){
     if( scrollTop > 200 ) { $('header').addClass('on'); }
      else{ $('header').removeClass('on'); }
    }
















































