$(document).ready(function(){
   $('.responsive').click(function(){
      $('.navbar__menu').addClass('menu__open');
      $('.navbar__menu').slideToggle();
   });

   $('.navbar__menu li a').click(function(){
      var scrollAttri = $(this).data('scroll');
      $('html, body').animate( { scrollTop: $('.'+ scrollAttri).offset().top - 70}, 750 ); 

      if ($('.navbar__menu').hasClass('menu__open')) {
         $('.navbar__menu').slideToggle();
      }
   });

   function removeHamburger(){
      if($(window).width() >= 728){
         $('.navbar__menu').removeClass('menu__open').removeAttr('style');

      }
   } 

   $(window).resize(function(){
      removeHamburger();
   });
});