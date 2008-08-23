// makes Request compatible with requests on the file:// protocol

if (location.protocol == 'file:') Request.implement({
	
	setTransport: function(){
		this.transport = (window.ActiveXObject) ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
	},

	isSuccess: function() {
		return (!this.status || (this.status >= 200) && (this.status < 300));
	}
	
});