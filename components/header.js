var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( "header", { "uk-scrollspy": "cls:uk-animation-fade; repeat: true;" }, [
			m( vnode.attrs.LANGUAGES ),
			m( "span", { "id": 'nom' }, "Yannick Le Tallec" ),
			m( "span", { "data-tel": vnode.attrs.tel, "data-email": vnode.attrs.email, onmouseenter: vnode.attrs.onmouseenter, onclick:vnode.attrs.onclick, class: "contact" }, "CONTACT" )
		] ) 
	}
}



