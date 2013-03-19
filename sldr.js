// slidr.js
// Copyright (c) 2013 LabArts (MIT License like jQuery)

;(function($, window, document) {
  $.fn.sldr = function(options) {
    
    // defaults
    var s = $.extend({
      speed: 100 
    }, options);
   
    // plugin vars
    var slider = this,
        slide = $('.sldr').children(),
        next = $('.next'),
        prev = $('.prev'),
        current = 0,
        images = [];

    // plugin logic 
    var init = function() {
      slide.each(function(a) {
        images[a] = $(this);
        console.log($(this));
      });
      
      last = images.length - 1;
     
      images[current].show();
      
      next.on('click', function() {
        nav(last,0,true);
      });

      prev.on('click', function() {
        nav(0,last,false);
      });
    };
    
    // function helpers
    function nav(a,b,c) {
      images[current].fadeOut(s.speed);

      if ( current === a ) {
        current = b;
      } else {
        c ? current++ : current--;
      }

      images[current].delay(s.speed/10).fadeIn(s.speed);
    }
    
    // do it
    init();
  };
})(jQuery, window, document);
