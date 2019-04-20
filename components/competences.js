var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
		return m( "DIV", { "class": "competence_wrapper" },
			m( "H3", "\u272A COMPETENCES CLEFS :" ),
			m( ".competences.uk-grid-match.uk-grid-small.uk-child-width-expand@s", vnode.attrs.data.map( function( val, ind, t ){
				return m("DIV",
					m(".competence.uk-light.uk-background-secondary.uk-padding.uk-card.uk-card-default.uk-card-body", { "uk-scrollspy": "cls:" + vnode.attrs.applyAnimation +"; repeat: true;" }, [
						m("h3.uk-card-title", [
							m("div[uk-icon='icon:" + t[ ind ].icon + "; ratio: 2']"), " ",
							m("span", t[ ind ].entry )
						] ) ,
						m("ul.uk-list.uk-list-bullet", t[ ind ].tags.map( function( v, i, t2 ){
								return m("li", v )
							} ) )
					] ) )
				} ) )
			)
	}
}







