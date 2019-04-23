var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( "header", { "uk-scrollspy": "cls:uk-animation-fade; repeat: true;"  }, [
			m( 'div', { 'id': 'header_main' }, [
				m( vnode.attrs.LANGUAGES, {} ),
				m( "span", { "id": 'nom' }, "Yannick Le Tallec" ),
				m( "span", { "data-tel": vnode.attrs.tel, "data-email": vnode.attrs.email, onmouseenter: vnode.attrs.onmouseenter, onclick:vnode.attrs.onclick, class: "contact" }, vnode.attrs.contact )
			] ),
		       m( 'div', { 'id': 'header_contact_details' } )
		] )	
	}
}
