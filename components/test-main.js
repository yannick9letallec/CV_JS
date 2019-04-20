var data = require( '../data' )

// Polyfill DOM env for mithril
global.window = require("mithril/test-utils/browserMock.js")()
global.document = global.window.document

console.dir( document ) 
var mithril = require( 'mithril' )

// var script = require( '../cv-yannick-le-tallec.js' )
var o = require( 'mithril/ospec/ospec' )

o.spec( 'Main Script Testing ( cv-yannick-le-tallec.js', function(){
	o( 1 + 1 ).notEquals( 2 )( 'Fuzzy Test' )
})

o.run( function( results ){
	results.forEach( function( result, index, array ){
		console.log( result.pass, result.message ) 
	})
})
