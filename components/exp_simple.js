var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( "DIV", { "class": "uk-accordion-content" }, m.trust( vnode.attrs.description ), [
			m( "UL", { "class": "uk-list uk-list-bullet" }, vnode.attrs.lignes_description.map( function( v, i, a ){
				return m( "li", m.trust( v ) )
			} ) ),
			m( "br" ),
			"Environnement Technique :",
			m( "UL", { "class": "uk-list uk-list-bullet" }, vnode.attrs.competences_techniques.map( function( v, i, a ){
				return m( "LI", m.trust( v ) )
			} ) )
		] )
	}
}







