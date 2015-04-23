(function(){
  'use strict';

  Belt.Ajax = function(settings){
		return new XMLHttpRequest();
  };

  XMLHttpRequest.prototype.get = function(url, data){
		var params;

		this.open("GET", url, true);

		params = Object.keys(data).map(function(key) {
			return key + '=' + data[key];
		}).join('&');

		this.send(params);

		return this;
  };

	XMLHttpRequest.prototype.success = function(callback){
		var _this = this,
				responseData;
		
		_this.onreadystatechange = function(){
			if(_this.readyState == 4 && _this.status == 200){
				responseData = JSON.parse(_this.responseText);
				callback(responseData);
				return _this;
			}
		};
  };

	XMLHttpRequest.prototype.error = function(callback){
		return this.onerror(callback);
  };

})();