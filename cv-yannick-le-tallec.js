// IMPORT DATA.JS
var data = require( "./data.js" ),
	m = require( 'mithril' )

// IMPORT COMPONENT
var { 
	CONTACT, 
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

// GLOB VARS
var contactInitialText

function initPAGE( ){
	var MAIN = {
		view: function() {
			return m( "main", [
				m( HEADER, { onmouseover: contact, onmouseleave: reinitContact, onclick: contact } ),

				m( SEPARATEUR_B ),

				m( ETAT ),

				m( HERO, { onclick: clickTitleShake, onmouseleave: addTitleShake, onmouseenter: removeTitleShake } ),

				m( SEPARATEUR_B ),

				m( STACK ),

				m( SEPARATEUR_B ),

				m( VALEURS, { data, VALEUR_ARTICLE } ),

				m( SEPARATEUR_W ),
				m( SEPARATEUR_V ),
				m( SEPARATEUR_V ),
				m( SEPARATEUR_W ),

				m( COMPETENCES, { data, applyAnimation } ),

				m( SEPARATEUR_B ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_B ),

				m( EXPERIENCES, { data, EXP_COMPLEXE, EXP_SIMPLE, initExperienceAnimation } ),

				m( SEPARATEUR_W ),
				m( SEPARATEUR_B ),
				m( SEPARATEUR_B ),
				m( SEPARATEUR_B ),
				m( SEPARATEUR_W ),

				m( DIVERS, { divers: data.divers, toggleSign } ),

				m( SEPARATEUR_B ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_B ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_B ),
				m( FOOTER )
			] )
		}
	}
	m.mount( document.body, MAIN )

	function toggleSign( event ){
		var lis = document.querySelectorAll( ".uk-tab li a" ),
			n = lis.length, k, sibling_text

		// resetting target siblings
		for( k = 0; k < n; k++ ){
			sibling_text = lis[ k ].innerHTML
			lis[ k ].innerHTML = sibling_text.replace( /\u25BC/i, "\u25B6" )
		}
	
		// adapting current event target
		var t = event.target.innerHTML 
		event.target.innerHTML = t.replace( /\u25B6/i, "\u25BC" )
	}
	function initExperienceAnimation( i ){
		if( i % 2 === 0 || i % 2 === -0 ){
			return "uk-animation-slide-left"
		} else {
			return "uk-animation-slide-right"
		}
	}
	function applyAnimation( ind, t ){
		var last = t.length - 1

		switch( ind ){
			case 0 :
				return "uk-animation-slide-left"
				break
			case last :
				return "uk-animation-slide-right"
				break
			default :
				return "uk-animation-scale-up"
		}
	}
	function clickTitleShake ( event ){
		addTitleShake( event )

		setTimeout( function( ){
			removeTitleShake( event )
		}, 1000 ) 
	}
	function addTitleShake( event ){
		event.target.classList.add( "uk-animation-shake" )
	}
	function removeTitleShake( event ){
		event.target.classList.remove( "uk-animation-shake" )
	}

	contactInitialText = "",
		init = 0
	function contact( event ) {
		var el = event.target

		if( init === 0 ){

			contactInitialText = el.innerText
			el.innerText = ""

			m.mount( el, { 
				view: function(){ 
					return m( CONTACT, { 
						telephone: data.telephone, 
						email: data.email 
					} ) 
				}
			} )

			init = 1
		}
	}
	function reinitContact( event ){
		console.dir( event ) 
		event.target.innerText = contactInitialText
		init = 0
	}
}

initPAGE()
