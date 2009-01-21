String.implement({

	// replaces all occurences of KEY with VALUE and returns the result
	// data = {"KEY1": "VALUE1", "KEY2": "VALUE2", ... , "KEYn": "VALUEn"}
	encode: function(data){
		return this.replace(new RegExp(Hash.getKeys(data).map(String.escapeRegExp).join('|'), 'g'), Hash.prototype.get.bind(data));
	},

	// Works like String.encode but in reverse
	decode: function(data){
		return this.encode(Hash.getKeys(data).reverse().associate(Hash.getValues(data).reverse()));
	},

	// PHP`s strtr(string, string, string) like function
	translate: function(from, to){
		return this.replace(new RegExp(Array.map(from, String.escapeRegExp).join('|'), 'g'), function(chr){
			return to[from.indexOf(chr)];
		});
	},
	
	rot13: function(){
		return this.replace(/[a-z]/gi, function(chr){
			var code = chr.charCodeAt(0);
			var base = (code < 91) ? 65 : 97;
			return String.fromCharCode((code - base + 13) % 26 + base);
		});
	}

});

var htmlEntities = {'ä': '&auml;', 'ö': '&ouml', 'ü': '&uuml'};
alert('Grüne Bäume.'.encode(htmlEntities));
alert('all your base are belong to us'.translate('aeiou', 'AEIOU'));