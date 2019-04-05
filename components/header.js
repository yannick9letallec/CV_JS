var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( "header", { "uk-scrollspy": "cls:uk-animation-fade; repeat: true;" }, [
			m( "span", "Yannick Le Tallec" ),
			m( "span", { "data-tel": vnode.attrs.tel, "data-email": vnode.attrs.email, onmouseover: vnode.attrs.onmouseover, onmouseleave: vnode.attrs.onmouseleave, onclick:vnode.attrs.onclick, class: "contact" }, "Contact" )
		] ) 
	}
}



