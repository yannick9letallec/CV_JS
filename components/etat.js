var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
		return m( "section", { "class" : "etat" }, [
			m( "span", { "class" : "disponibilite" }, "Contrat : ",
				m( "span", { "class": "t" }, " CDI" )
			),
			m( "span", { "class" : "mobilite" }, "Mobilité : ",
				m( "span", { "class": "t" }, " Grand Ouest & +" )
			),
			m( "span", { "class" : "tjm" }, "Rémunération : ",
				m( "span", { "class": "t" }, " 50 k€" )
			)
		] )
	}
}




