jQuery(document).ready(function($) {
  
  const socialsIconsAnimate = function(){

    const buttonActivator = $('.banner-share__button'),
          socialsBlock = $('#socials');

    const activeClass ='socials--active';

    buttonActivator.on('click', function(){
      if ( !socialsBlock.hasClass(activeClass) ) {
        socialsBlock.addClass(activeClass);
      }else if (socialsBlock.hasClass(activeClass)) {
        socialsBlock.removeClass(activeClass);
      }
    })
  }

  socialsIconsAnimate();

});
