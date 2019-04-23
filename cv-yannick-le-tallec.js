// MOCK BROWSER
// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global)


// IMPORT DATA.JS
let data = require( "./data.js" ),
	m = require( 'mithril' ),
	render = require('mithril-node-render'),
	{ getNavigatorDefaultLanguage, toggleSign, contact, reinitContact, clickTitleShake, addTitleShake, removeTitleShake, initExperienceAnimation, applyAnimation } = require( './functions.js' )

// getting lang arg
let default_lang = process.argv[ 2 ]

// Factoring lang object
let langs = []
for( let key in data.lang ){
	if( data.lang[ key ].active ){
		langs.push( key )
	} 
}

// IMPORT COMPONENT
var { 
	LANGUAGES,
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
		return m( "main", { 'data-lang': langs.join() }, [
			m( HEADER, { contact: data.lang[ default_lang ].contact, tel: data.lang[ default_lang ].telephone, email: data.email, onmouseenter: 'contact( event)', onclick: 'contact( event)', LANGUAGES } ),

			m( SEPARATEUR_B ),

			m( ETAT, { data: data.lang[ default_lang ].etat }),

			m( HERO, { onclick: 'clickTitleShake( event )', onmouseleave: 'addTitleShake( event )', onmouseenter: 'removeTitleShake( event )' } ),

			m( SEPARATEUR_B ),

			m( STACK ),

			m( SEPARATEUR_B ),

			m( VALEURS, { data: data.lang[ default_lang ].valeurs, VALEUR_ARTICLE } ), 

			m( SEPARATEUR_W ),
			m( SEPARATEUR_V ),
			m( SEPARATEUR_V ),
			m( SEPARATEUR_W ),

			m( COMPETENCES, { data: data.lang[ default_lang ].competences, applyAnimation: 'applyAnimation( event, ind, t )' } ),

			m( SEPARATEUR_B ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_W ),
			m( SEPARATEUR_B ),

			m( EXPERIENCES, { data: data.lang[ default_lang ].experiences, EXP_COMPLEXE, EXP_SIMPLE, initExperienceAnimation: 'initExperienceAnimation( event, i )' } ),

			m( SEPARATEUR_W ),
			m( SEPARATEUR_B ),
			m( SEPARATEUR_B ),
			m( SEPARATEUR_B ),
			m( SEPARATEUR_W ),

			m( DIVERS, { divers: data.lang[ default_lang ].divers, toggleSign: 'toggleSign( event )' } ),

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

