var plugins = require('electron-plugins'),
	util = require('util')

document.addEventListener('DOMContentLoaded', function () {
	var context = { document: document }
	plugins.load(context, function (err, loaded) {
		if(err) return console.log(util.inspect(err))
		console.log('Plugins loaded successfully.')
	})
})