Element.Properties.storage = {
	set: function(obj){
		for (key in obj) this.store(key, obj[key]);
	}
};

/*
var el = new Element('div', {
	storage: {
		'nick': 'JanK'
	}
});

el.retrieve('nick');
*/
