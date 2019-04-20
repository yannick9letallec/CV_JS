var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( "DIV", { "class" : "valeurs uk-position-relative uk-visible-toggle uk-light", "uk-slideshow": "max-height: 200; autoplay: true;" }, [
			m( "UL", { "class": "uk-slideshow-items" }, vnode.attrs.data.map( function( v, i, t ){ 
				return m( "LI", m( vnode.attrs.VALEUR_ARTICLE, {  titre: v.titre, icon: v.icon, text: v.valeur } ) ) 
			} ) ),
			m( "A", { "class": "uk-position-center-left uk-position-small", "uk-slidenav-previous": "true", "uk-slideshow-item": "previous", "uk-icon": "icon: chevron-left; ratio: 1;" } ),
			m( "A", { "class": "uk-position-center-right uk-position-small","uk-slidenav-next": "true", "uk-slideshow-item": "next", "uk-icon": "icon: chevron-right; ratio: 1;" } )
		] )
	}
}






