(function(){
  'use strict';

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  if('classList' in document.documentElement){
    HTMLElement.prototype.hasClass = function(c) {
      return this.classList.contains(c);
    };

    HTMLElement.prototype.addClass = function(c) {
      this.classList.add(c);
      return this;
    };

    HTMLElement.prototype.removeClass = function(c) {
      this.classList.remove(c);
      return this;
    };
  } else {
    HTMLElement.prototype.hasClass = function(c) {
      return classReg(c).test(this.className);
    };

    HTMLElement.prototype.addClass = function(c) {
      if ( !this.hasClass(c) ) {
        this.className = this.className + ' ' + c;
        return this;
      }
    };

    HTMLElement.prototype.removeClass = function(c) {
      this.className = this.className.replace(classReg(c), ' ');
      return this;
    };
  }

  HTMLElement.prototype.toggleClass = function(c) {
    var fn = this.hasClass(c) ? this.removeClass : this.addClass;
    fn(c);
    return this;
  };

})();