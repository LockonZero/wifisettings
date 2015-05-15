
var exec = require('cordova/exec');

function WifiSettings() {
}

WifiSettings.prototype.launch = function() {
	exec(null, null, "WifiSettings", "launch", []);
};

WifiSettings.install = function() {
	if(!window.plugins) {
		window.plugins = [];
	}

	window.plugins.WifiSettings = new WifiSettings();
	return window.plugins.WifiSettings;
};

cordova.addConstructor(WifiSettings.install);
