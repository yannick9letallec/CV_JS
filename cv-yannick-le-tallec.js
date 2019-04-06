// MOCK BROWSER
// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global)

// IMPORT DATA.JS
let data = require( "./data.js" ),
	m = require( 'mithril' ),
	render = require('mithril-node-render'),
	{ toggleSign, contact, reinitContact, clickTitleShake, addTitleShake, removeTitleShake, initExperienceAnimation, applyAnimation } = require( './functions.js' )

// IMPORT COMPONENT
var { 
	HEADER, 
	SEPARATEUR_B, SEPARATEUR_W, SEPARATEUR_V, 
	ETAT, 
	HERO, 
	STACK, 
	VALEURS, VALEUR_ARTICLE, 
	COMPETENCES, 
	EXPERIENCES, EXP_SIMPLE, EXP_COMPLEXE, 
	DIVERS, 
	FOOTER 
} = require( './components/all.js' )

var MAIN = {
	view: function() {
		return m( "main", [
			m( HEADER, { tel: data.telephone, email: data.email, onmouseover: 'contact( event)', onmouseleave: 'reinitContact( event )', onclick: 'contact( event)' } ),

			m( SEPARATEUR_B ),

			m( ETAT ),

			m( HERO, { onclick: 'clickTitleShake( event )', onmouseleave: 'addTitleShake( event )', onmouseenter: 'removeTitleShake( event )' } ),

			m( SEPARATEUR_B ),

			m( STACK ),

			m( SEPARATEUR_B ),

			m( VALEURS, { data, VALEUR_ARTICLE } ),

			m( SEPARATEUR_W ),
			m( SEPARATEUR_V ),
			m( SEPARATEUR_V ),
			m( SEPARATEUR_W ),

			m( COMPETENCES, { data, applyAnimation: 'applyAnimation( event, ind, t )' } ),

			m( SEPARATEUR_B ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_B ),

			m( EXPERIENCES, { data, EXP_COMPLEXE, EXP_SIMPLE, initExperienceAnimation: 'initExperienceAnimation( event, i )' } ),

			m( SEPARATEUR_W ),
			m( SEPARATEUR_B ),
			m( SEPARATEUR_B ),
			m( SEPARATEUR_B ),
			m( SEPARATEUR_W ),

			m( DIVERS, { divers: data.divers, toggleSign: 'toggleSign( event )' } ),

			m( SEPARATEUR_B ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_B ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_B ),
			m( FOOTER )
		] )
	}
}

// m.mount( document.body, MAIN )
render( MAIN ).then( function( html ){
	console.dir( html ) 
})

