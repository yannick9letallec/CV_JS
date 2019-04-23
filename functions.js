// local vars
let  default_lang = '',
	is_init = 1


// Worker Management
// simple one task worker
if( window.Worker ){
	var languageWorker = new Worker( 'langs_worker.js' )

	languageWorker.onmessage = function( event ){
		console.log( "MESSAGE FROM WORKER" ) 
		console.dir( event ) 

		document.body.innerHTML = event.data.html
		document.body.classList.toggle( 'body_rotate' )
		document.body.classList.toggle( 'body_default' )

		generateDefaultLanguageFlag( event.data.lang )
	}	
}

function initPage( event ){
	if( is_init ){
		getNavigatorDefaultLanguage( )
		is_init = 0
	}

	document.body.addEventListener( 'transitionend', function( event ){
		console.log( "TRANSITION END" ) 
	/*
	*/
	})
}
function getNavigatorDefaultLanguage(){
	default_lang = navigator.languages[ 0 ]
	console.log( "EDF LANG : " + default_lang ) 

	generateDefaultLanguageFlag( default_lang )
}

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

	header_main.style.display = 'none'
	header_contact_details.style.display = 'initial'

		let data = event.target.dataset

	m.mount( header_contact_details, { 
		view: function(){ 
			return m( CONTACT, { 
				onmouseleave: function( event ){
					reinitContact()
				},
				telephone: data[ 'tel' ], 
				email: data[ 'email' ]
			} ) 
		}
	} )
}
function reinitContact(){
	console.log( 'REINIT CONTACT ' ) 
	header_main.style.display = 'initial'
	header_contact_details.style.display = 'none'
}

function capitalize (s) {
	  if (typeof s !== 'string') return ''
	  return s.charAt(0).toUpperCase() + s.slice(1)
}

function generateDefaultLanguageFlag( lang ){
	// get elements
	let container = document.getElementsByTagName( 'header' )[ 0 ]

	// create default flag
	let default_flag = document.createElement( 'img' )
	default_flag.classList.add( 'default_flag' )
	default_flag.src = getLanguageFlag( lang ).path
	default_flag.alt = getLanguageFlag( lang ).alt
	default_flag.dataset[ 'lang' ] = lang

	// insert default flag
	languages.insertBefore( default_flag, languages.firstChild )

	// code that need images to be loaded
	default_flag.onload = function( event ){
		let el = document.getElementsByClassName( 'flags_sub_div' )[ 0 ]
		if( !el ) {
			generateLanguagesFlag( lang )
		}
	}

	// event to display available languages
	default_flag.addEventListener( 'mouseenter', function( event ){
		let el = document.getElementsByClassName( 'flags' )[ 0 ]
		el.classList.toggle( 'flags_show' )
	})
}

function generateLanguagesFlag( lang ){
	console.log( "LANG : " + lang ) 
	// get langs
	let el = document.getElementsByTagName( 'main' )[ 0 ],
		langs = el.dataset[ 'lang' ],
		l = langs.split( ',' )

	let default_flag = document.getElementsByClassName( 'default_flag' )[ 0 ],
		container = document.getElementById( 'header_main' ),
		nom = document.getElementById( 'nom' ),
	       	div = document.createElement( 'div' ),
		sub_div = document.createElement( 'div' )

	// intermediaite container
	sub_div.classList.add( 'flags_sub_div' )
	sub_div.appendChild( div )

	l.forEach( function( val, ind, arr ){
		if( !lang.includes( val ) ){
			let img = document.createElement( 'img' )
			img.classList.add( 'flag_img' )
			img.src = getLanguageFlag( val ).path	
			img.alt = getLanguageFlag( val ).alt	
			img.dataset[ 'lang' ] = val	

			img.addEventListener( 'load', function( event ){
				
				// get flags height
				let position_verticale = document.getElementsByClassName( 'flags' )[ 0 ]
				console.log( position_verticale.getBoundingClientRect()[ 'height' ] + 'px' ) 
				div.style.top = '-' + position_verticale.getBoundingClientRect()[ 'height' ] + 'px' 

				/*
				div.addEventListener( 'mouseleave', function( event ){
					console.log( "----------------------" ) 
					let el = document.getElementsByClassName( 'flags' )[ 0 ]
					el.classList.toggle( 'flags_show' )

					let y_offset = default_flag.getBoundingClientRect()[ 'height' ]
					this.style.top = y_offset + 'px'
				})
				*/
			})

			img.addEventListener( 'click', swapFlags )

			div.appendChild( img )
		}
	})

	div.classList.add( 'flags' )
	
	let y_offset = default_flag.getBoundingClientRect()[ 'height' ]

	div.style.top = y_offset + 'px'
	container.insertBefore( sub_div, nom )
}

function swapFlags( event ){
	console.dir( event ) 
	// get default lang
	let def = document.getElementsByClassName( 'default_flag' )[ 0 ],
		default_src = def.src,
		default_alt = def.alt
		default_lang = def.dataset[ 'lang' ]

	let el = event.target,
		new_default_src = event.target.src,
		new_default_alt = event.target.alt
		new_default_lang = event.target.dataset[ 'lang' ]

	// swap choosen <- default
	el.src = default_src
	el.alt = default_alt
	el.dataset[ 'lang' ] = default_lang

	// swap default <- choosen
	def.src = new_default_src
	def.alt = new_default_alt
	def.dataset[ 'lang' ] = new_default_lang

	let el_2 = document.getElementsByClassName( 'flags' )[ 0 ]
	el_2.classList.toggle( 'flags_show' )

	document.body.classList.toggle( 'body_rotate' )
	document.body.classList.toggle( 'body_default' )

	setTimeout( function() {
		languageWorker.postMessage( def.dataset[ 'lang' ] )
	}, 500 )
}

function getLanguageFlag( lang ){
	switch( lang ){
		case 'fr':
			return {
				path: './images/drapeau_francais.jpg',
				alt: 'une représentation du drapeau français'
			}
			break
		case 'es':
			return {
				path: './images/drapeau_espagnol.jpg',
				alt: 'una representacion de la bandera espanola'
			}
			break
		case 'bzh':
			return {
				path: './images/drapeau_breton.jpg',
				alt: 'ur abadenn eus banniel brezhoneg'
			}
			break
		case 'en':
		default:
			return {
				path: './images/drapeau_americain.jpg',
				alt: 'an english / american flag representation'
			}
			break
	}
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
