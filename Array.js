// http://davidwalsh.name/array-shuffling-mootools
Array.implement({
	shuffle: function() {
		for (i = this.length; i; i--){
			var j = parseInt(Math.random() * i, 10);
			var tmp = this[i];
			this[i] = this[j];
			this[j] = tmp;
		}
		return this;
	}
});
