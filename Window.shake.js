Window.implement({
	shake: function(){
		var times = 10;
		(function(){
			window.moveBy(5 * ((times % 2) ? -1 : 1), 0);
			times--;
			if (times > 0) arguments.callee.delay(50);
		})();
	}
});

window.shake();
