Number.implement({
	format: function(kSep, floatsep, decimals){
	    decimals = $pick(decimals, 2);
	    floatsep = $pick(floatsep, '.');
	    kSep = $pick(kSep, ' ');

	    var parts = this.round(decimals).toString().split('.');
	    var integer = parts[0];
	    while (integer != (integer = integer.replace(/([0-9])(...($|[^0-9]))/, '$1' + kSep + '$2')));
	    if (decimals == 0) return integer;
	    return integer + floatsep + ((parts[1] || '') + '0000000000').substr(0, decimals);
	}
});


[
	122032355.235662,
	0,
	0.01,
	0.102,
	0.109,
	21.3
].each(function(n){
	console.log(n.format('.', ','));
});
