(function(){
  'use strict';

  BeltElement.prototype.click = function(callback) {
    this.addEventListener("click", callback);
    return this;
  };

  BeltElement.prototype.mouseOver = function(callback) {
    this.addEventListener("mouseover", callback);
    return this;
  };

  BeltElement.prototype.mouseOut = function(callback) {
    this.addEventListener("mouseout", callback);
    return this;
  };

})();