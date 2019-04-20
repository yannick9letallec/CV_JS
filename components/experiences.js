var m = require( 'mithril' )

module.exports = {
	view: function( vnode ) {
		return m( ".experiences", [
			m( "H3", "\u272A PROJETS : " ), 
			m( "UL", { "uk-accordion": "collapsible: true" }, vnode.attrs.data.map( function( v, i, a ){
				return m( "LI", {}, [
					m( "A", { "uk-scrollspy": "cls:" + vnode.attrs.initExperienceAnimation + "; repeat: true;", "class": "titre_experience uk-grid uk-accordion-title" }, [
						m( "SPAN", { "class": "entreprise uk-width-1-20" }, [
							v.experience.logo ? m( "img", { "alt": v.experience.img_alt, "class": "image_experience", "src": v.experience.logo } ) : "", 
						] ),
						m( "SPAN", { "class": "entreprise uk-width-1-5" }, [
							m( "SPAN", { "class": "uk-badge" }, " Entreprise : " ),
							" " + v.experience.entreprise
						] ),
						m( "SPAN", { "class": "entreprise uk-width-1-4" }, [
							m( "SPAN", { "class": "uk-badge" }, "Date : " ),
							" " + v.experience.date
						] ),
						m( "SPAN", { "class": "entreprise uk-width-1-40" }, [
							m( "SPAN", { "class": "uk-badge" }, "Rôle : " ),
							" " + v.experience.poste
						] )
					]),
					!v.experience.autres ? 
						m( vnode.attrs.EXP_SIMPLE, {
							"description": v.experience.description, 
							"lignes_description": v.experience.lignes_description, 
							"competences_techniques": v.experience.competences_techniques 
						} ) :
						m( vnode.attrs.EXP_COMPLEXE, { 
							"autres": v.experience.autres 
						} )
				] )
			} ) )
		] )
	}
}







