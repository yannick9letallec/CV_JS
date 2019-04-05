var data = require( '../data' )

// Polyfill DOM env for mithril
global.window = require("mithril/test-utils/browserMock.js")()
global.document = window.document


var o = require( 'mithril/ospec/ospec' )
var script = require( '../cv-yannick-le-tallec.js' )

o.spec( 'Main Script Testing ( cv-yannick-le-tallec.js', function(){
	o( 'Styffing', function(){
		o( 1 + 1 ).equals( 2 )( 'Fuzzy Test' )
	})
})

