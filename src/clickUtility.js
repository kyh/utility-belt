(function(){
  'use strict';

  HTMLElement.prototype.click = function(callback) {
    this.addEventListener("click", callback);
    return this;
  };

  HTMLElement.prototype.mouseOver = function(callback) {
    this.addEventListener("mouseover", callback);
    return this;
  };

  HTMLElement.prototype.mouseOut = function(callback) {
    this.addEventListener("mouseout", callback);
    return this;
  };

})();