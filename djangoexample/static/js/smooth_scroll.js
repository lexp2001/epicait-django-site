//Scroll fade fly effect
//console.info(window.innerWidth);
var timer = 0;
function recheck() {
    var window_top = $(this).scrollTop();
    var window_height = $(this).height();
    var view_port_s = window_top;
    var view_port_e = window_top + window_height;
    
    if ( timer ) {
      clearTimeout( timer );
    }
    
    $('.fly').each(function(){
      var block = $(this);
      var block_top = block.offset().top;
      var block_height = block.height();
      
      if ( block_top < view_port_e ) {
        timer = setTimeout(function(){
          block.addClass('show-block');
        },100);       
      } else {
        timer = setTimeout(function(){
          block.removeClass('show-block');
        },100);          
      }
    });
}



//smooth scroll to top
//Click Logo To Scroll To Top
$('#logo').on('click', () => {
  $('html,body').animate({
    scrollTop: 0
  },500);
});

//Smooth Scrolling Using Navigation Menu

$('.smooth-scroll[href*="#"]').on('click', function(e){
  $('#navbar-container').addClass('fixed-top');
  $('#nav').css({'margin-top': '80px', 'transition': 'unset' });
  var offset = 0;
  if (window.innerWidth < 769) {
    offset = 40;
  }
  $('html,body').animate({
    scrollTop: $($(this).attr('href')).offset().top - offset

  },500);
  e.preventDefault();
});

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 50) {
    $('#navbar-container').addClass('fixed-top');
    $('#nav').css({'margin-top': '80px', 'transition': 'all 0.6s ease' });
    recheck();
  }
  else {
    $('#navbar-container').removeClass('fixed-top');
    $('#nav').css({'margin-top': '0', 'transition': 'unset' });
  }
  
});

recheck();

