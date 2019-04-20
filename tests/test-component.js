var data = require( '../data' )

// Polyfill DOM env for mithril
global.window = require("mithril/test-utils/browserMock.js")()
global.document = window.document

var o = require( 'mithril/ospec/ospec' )
var component = require( '../components/contact.js' )

var vnode = component.view( { 
	attrs : { 
		telephone: data.telephone, 
		email: data.email 
	}
} )

o.spec( 'Contact Component', function(){
	o( 'Returns a SPAN', function(){
		o( vnode.tag ).equals( 'span' )('SPAN : shoud be main tag' )
		o( vnode.children.length ).equals( 3 )( 'Component should contain 3 children' )
	})

	o( 'Phone part', function(){
		o( vnode.children[ 0 ].tag ).equals( 'a' )( '( Phone ) A should be first child' )
		o( vnode.children[ 0 ].attrs[ 'href' ] ).equals( 'tel:' + data.telephone )( '( Phone ) A HREF should be : tel:' + data.telephone )
		o( vnode.children[ 0 ].children[ 1 ].text.trim() ).equals( data.telephone )( '( Phone ) A TEXT should be : ' + data.telephone )
	})

	o( 'Email part', function(){
		o( vnode.children[ 2 ].tag ).equals( 'a' )( '( Email ) A should be last child' )
		o( vnode.children[ 2 ].attrs[ 'href' ] ).equals( 'mailto:' + data.email )( '( Email ) A HREF should be : mailto:' + data.email )
		o( vnode.children[ 2 ].children[ 1 ].text.trim() ).equals( data.email )( '( Email ) A TEXT should be : ' + data.email )
	})
})

