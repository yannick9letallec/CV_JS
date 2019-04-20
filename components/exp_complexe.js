var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( "DIV", { "id": "experiences_autres", "class": "uk-accordion-content" }, vnode.attrs.autres.map( function( v, i, a ) { 
			return m( "DIV", m.trust( v.description ), [ 
				m( "UL", { "class": "uk-list uk-list-bullet experience_description" }, v.lignes_description.map( function( v, i, a ){
					return m( "li", m.trust( v ) )
				} ) ),
				m( "br" ),
				"Environnement Technique :",
				m( "UL", { "class": "uk-list uk-list-bullet" }, v.competences_techniques.map( function( v, i, a ){
					return m( "LI", m.trust( v ) )
				} ) )
			] )
		} ) )
	}
}







