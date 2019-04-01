var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
		return m( "section", { "class" : "etat" }, [
			m( "span", { "class" : "disponibilite" }, "Disponibilité : ",
				m( "span", { "class": "p" }, "Recherche CDI ( ASAP )" )
			),
			m( "span", { "class" : "mobilite" }, "Mobilité : ",
				m( "span", { "class": "t" }, "Grand Ouest" )
			),
			m( "span", { "class" : "tjm" }, "Rémunération : ",
				m( "span", { "class": "d" }, "A négocier :)" )
			)
		] )
	}
}




