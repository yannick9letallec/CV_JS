// var m = require( 'mithril' )

let CONTACT = {
	view: function( vnode ){
		return m( "span", { class: 'contact_details' }, [
			m( "a", { "href": "tel:" + vnode.attrs.telephone }, [
				m( "span", { "class": "telephone", "uk-icon": "icon: phone; ratio: 1" } ),
				m( "span", vnode.attrs.telephone )
			] ),
			m( "br" ),
			m( "a", { "href": "mailto:" + vnode.attrs.email }, [
				m( "span", { "class": "email", "rel": "external",  "uk-icon": "icon: mail; ratio: 1" } ),
				m( "span", " " + vnode.attrs.email + " " ) 
			] )
		] )
	}
}
