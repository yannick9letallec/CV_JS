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

var contactInitialText = "",
	init = 0

function contact( event, telephone, email ) {
	var el = event.target,
		data = el.dataset,
		nom = document.getElementById( 'nom' )

	nom.style.visibility = 'hidden'

	if( init === 0 ){
		contactInitialText = el.innerText
		el.innerHTML = ""

		m.mount( el, { 
			view: function(){ 
				return m( CONTACT, { 
					telephone: data[ 'tel' ], 
					email: data[ 'email' ] 
				} ) 
			},
			oncreate: function( vnode ){
				// Force to wait until next tick / reflow
				setTimeout( function() {
					document.getElementsByClassName( 'contact' )[ 0 ].style.position = 'initial'
				}, 0 )
			}
		} )

		init = 1
	}
}
function reinitContact( event ){
	nom = document.getElementById( 'nom' )
	nom.style.visibility = 'visible'

	setTimeout( function() {
		document.getElementsByClassName( 'contact' )[ 0 ].style.position = 'absolute'
	}, 0 )

	event.target.innerText = contactInitialText
	init = 0
}

module.exports = {
	applyAnimation,
	contact,
	toggleSign,
	reinitContact,
	addTitleShake,
	clickTitleShake,
	removeTitleShake,
	initExperienceAnimation
}
