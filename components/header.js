var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
		return m( "header", { "uk-scrollspy": "cls:uk-animation-fade; repeat: true;" }, [
			m( "span", "Yannick Le Tallec" ),
			m( "span", { "onmouseover": vnode.attrs.onclick, "onmouseleave": vnode.attrs.onmouseleave, "onclick": vnode.attrs.oncilck, "class" : "contact" }, "Contact" )
		] ) 
	}
}



