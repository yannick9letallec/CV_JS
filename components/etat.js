var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( "section", { "class" : "etat" }, [
			m( "span", { "class" : "disponibilite" }, vnode.attrs.data.contrat,
				m( "span", { "class": "t" }, " " + vnode.attrs.data.contrat_type )
			),
			m( "span", { "class" : "mobilite" }, vnode.attrs.data.mobilite,
				m( "span", { "class": "t" }, vnode.attrs.data.mobilite_type )
			)/*,
			m( "span", { "class" : "tjm" }, "Rémunération : ",
				m( "span", { "class": "t" }, " 50 k€" )
			)*/
		] )
	}
}




