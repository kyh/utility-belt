(function(){
  'use strict';

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  if('classList' in document.documentElement){
    BeltElement.prototype.hasClass = function(c) {
      return this.el.classList.contains(c);
    };

    BeltElement.prototype.addClass = function(c) {
      this.el.classList.add(c);
      return this;
    };

    BeltElement.prototype.removeClass = function(c) {
      this.el.classList.remove(c);
      return this;
    };
  } else {
    BeltElement.prototype.hasClass = function(c) {
      return classReg(c).test(this.el.className);
    };

    BeltElement.prototype.addClass = function(c) {
      if ( !this.el.hasClass(c) ) {
        this.el.className = this.el.className + ' ' + c;
        return this;
      }
    };

    BeltElement.prototype.removeClass = function(c) {
      this.el.className = this.el.className.replace(classReg(c), ' ');
      return this;
    };
  }

  BeltElement.prototype.toggleClass = function(c) {
    var fn = this.el.hasClass(c) ? this.el.removeClass : this.el.addClass;
    fn(c);
    return this;
  };

})();