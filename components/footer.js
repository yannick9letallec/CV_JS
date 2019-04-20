var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
		return m( "footer", { "class" : "footer" }, [
			m( "span", "Yannick Le Tallec .2019" ),
			m( "span", "Mithril.JS & UIKit : Merci !" )
		] )
	}
}







