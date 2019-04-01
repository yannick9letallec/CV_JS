var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
		return m( "DIV", { "class" : "divers" }, [
			m( "H3", "\u272A ANNEXE : " ),
			m( "UL", { class: "uk-tab", "data-uk-tab": "{connect:'#divers_content'}" }, vnode.attrs.divers.divers_titre.map( function( v, i, a ){
				return m( "LI",
					m( "A", { onclick: vnode.attrs.toggleSign }, m.trust( v ) )
				)
			} ) ) ,
			m( "UL", { id: "divers_content", class: "uk-switcher uk-margin" }, vnode.attrs.divers.divers_contenu.map( function( v, i, a){
				return m( "LI", v.map( function( v, i, a ){
					return m.trust( v.nom + " : " + v.info + "<br />" )
				} ) )
			} ) )
		] )
	}
}







