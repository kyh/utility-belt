(function(win){
  'use strict';
  
  function Belt(query) {
    return new Element(query);
  }

  function Element(query) {
    this.el = document.querySelector(query);
  }

  //Expose to global scope
  win.Belt = Belt;
  win.BeltElement = Element;  

})(window);