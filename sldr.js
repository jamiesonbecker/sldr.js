// slidr.js
// Copyright (c) 2013 LabArts (MIT License like jQuery)

;(function($, window, document) {
  $.fn.sldr = function(options) {
    
    // defaults
    var s = $.extend({
      speed: 100 
    }, options);
   
    // plugin vars
    var slider = $('.sldr'),
        slide = $('.sldr li'),
        img = $('.sldr li img'),
        next = $('.sldr-next'),
        prev = $('.sldr-prev'),
        current = 0,
        images = [];

    // plugin logic 
    var init = function() {
      setSize();
      
      slide.each(function(a) {
        images[a] = $(this);
      });
      
      last = images.length - 1;
      
      images[current].show(0, setDisplay);
      
      next.on('click', function() {
        nav(last,0,true);
      });
      
      prev.on('click', function() {
        nav(0,last,false);
      });
    };
   
    // get the size of the images
    // and set the same size for the slider
    function setSize() {
      img.load(function() {
        slider.parent().css('width', img.width() + 100);
        slider.css('width', img.width());
        slider.css('height', img.height());
      });
    }
    
    // add display: table to parent element
    function setDisplay() {
      $(this).css('display', 'table');
    }

    // navigation
    function nav(a,b,c) {
      images[current].fadeOut(s.speed);

      if ( current === a ) {
        current = b;
      } else {
        c ? current++ : current--;
      }

      images[current].delay(s.speed).fadeIn(s.speed, setDisplay);
    }
    
    // do it
    init();
  };
})(jQuery, window, document);
