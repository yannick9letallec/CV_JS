// local vars
let default_lang = 'uk'

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
function contact( event, telephone, email ) {
	console.log( 'CONTACT ' ) 

	var el = event.target.parentNode, // .contact
		data = event.target.dataset,
		el_content = el.innerHTML.toString()

	el.innerHTML = ""

	m.mount( el, { 
		view: function(){ 
			return m( CONTACT, { 
				onmouseleave: function( event ){
					reinitContact( event, data[ 'tel'], data['email'], el_content )
				},
				telephone: data[ 'tel' ], 
				email: data[ 'email' ]
			} ) 
		}
	} )
}
function reinitContact( event, tel, email, html ){
	console.log( 'REINIT CONTACT ' ) 
	el = document.getElementsByTagName( 'header' )[ 0 ]

	el.innerHTML = html
}

function capitalize (s) {
	  if (typeof s !== 'string') return ''
	  return s.charAt(0).toUpperCase() + s.slice(1)
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
