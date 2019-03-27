// IMPORT DATA.JS
var data = require( "./data.js" ),
	m = require( 'mithril' )


// GLOB VARS
var contactInitialText

function contact( event ) {
	var el = event.target

	if( init === 0 ){
		var tel = {
			view: function(){
				return m( "span", [
					m( "a", { "href": "tel:0651345331" }, [
						m( "span", { "uk-icon": "icon: phone; ratio: 1" } ),
						m( "span", "06 51 34 53 31 " )
					] ),
					m( "span", " / " ),
					m( "a", { "href": "mailto:yannick9letallec@gmail.com" }, [
						m( "span", { "class": "email", "rel": "external",  "uk-icon": "icon: mail; ratio: 1" } ),
						m( "span", " yannick9letallec@gmail.com " ) 
					] )
				] )
			}
		}

		contactInitialText = el.innerText
		el.innerText = ""

		m.mount( el, tel )
		init = 1
	}
}
function reinitContact( event ){
	event.target.innerText = contactInitialText
	init = 0
}
function initPAGE( ){
	var SEPARATEUR_B = {
		view: function() {
			return m( "div", { 'class': 'separateur_bleu' } )
		}
	}
	var SEPARATEUR_W = {
		view: function() {
			return m( "div", { 'class': 'separateur_blanc' } )
		}
	}
	var SEPARATEUR_V = {
		view: function() {
			return m( "div", { 'class': 'separateur_violet' } )
		}
	}
	var HEADER = {
		view: function() {
			return m( "header", { "uk-scrollspy": "cls:uk-animation-fade; repeat: true;" }, [
				m( "span", "Yannick Le Tallec" ),
				m( "span", { "class" : "contact" }, "Contact" )
			] ) 
		}
	}
	var ETAT = {
		view: function() {
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
	var HERO = {
		view: function() {
			return m( "section", { "class" : "uk-inline" }, [
				m( "img", { "class" : "hero-image", "src": "images/javascript-code.png", "alt": "code javascript / html / css aléatoire" } ), 
				m( "div", { "class" : "hero uk-text-center uk-overlay uk-position-center uk-light" }, [
					m( "h2", { "uk-scrollspy": "cls: uk-animation-fade; repeat: true;" }, m.trust( "JAVASCRIPT" + "<br />" + "FULLSTACK" + "<br />" + "DEVELOPPER" ) )
				] )
			] )
		}
	}
	var STACK = {
		view: function() {
			return m( "section", { "class": "stack uk-grid-small uk-child-width-expand@s uk-text-center" }, [
					m( "div", { "id": "front", "uk-scrollspy": "cls: uk-animation-slide-left; repeat: true;" }, [
						m( "div", { "class": "ui uk-card uk-card-default uk-card-hover" }, [
							m( "h3", { "class": "uk-card-header" }, "FRONT" ),
							m( "div", { "class": "uk-card-body" }, [
								m( "span", { "uk-icon": "icon: desktop; ratio: 1.5" } ),
								m( "span", { "class": "icon-spread", "uk-icon": "icon: tablet; ratio:1.5" } ),
								m( "span", { "uk-icon": "icon: phone; ratio: 1.5" } )
							])
						] )
					] ),
					m( "div", { "uk-scrollspy": "cls: uk-animation-scale-up; repeat: true;" }, [
						m( "div", { "class": "ui uk-card uk-card-default uk-card-hover" }, [
							m( "h3", { "class": "uk-card-header" }, "BACK"),
							m( "div", { "class": "uk-card-body" }, [
								m( "span", { "uk-icon": "icon: server; ratio: 1.5" } ),
								m( "span", { "class": "icon-spread", "uk-icon": "icon: database; ratio:1.5" } ),
								m( "span", { "uk-icon": "icon: git-branch; ratio: 1.5" } )
							])
						] )
					] ),
					m( "div", { "uk-scrollspy": "cls: uk-animation-slide-right; repeat: true;" }, [
						m( "div", { "class": "ui uk-card uk-card-default uk-card-hover" }, [
							m( "h3", { "class": "uk-card-header" }, "CORE" ),
							m( "div", { "class": "uk-card-body" }, [
								m( "span", { "uk-icon": "icon: users; ratio: 1.5" } ),
								m( "span", { "class": "icon-spread", "uk-icon": "icon: settings; ratio:1.5" } ),
								m( "span", { "uk-icon": "icon: cog; ratio: 1.5" } )
							])
						] )
					] )
			] )
		}
	}
	var VALEUR_ARTICLE = {
		view: function( vnode ) {
			return m( "article", { "class": "uk-article" }, [
					m( "h2", { "class": "uk-article-title uk-text-center" }, [
						m( "span", { "uk-icon": "icon: " + vnode.attrs.icon + "; ratio: 2" } ),
						" " + vnode.attrs.titre.toUpperCase()
					] ),
					m( "div", [
						m( "blockquote", { "class": "uk-text-lead uk-text-center", "style": "font-size: 1em; color: #fc5130;" }, m.trust( vnode.attrs.text ) )
					] )
				] )
		}
	}
	var VALEURS = {
		view: function() {
			return m( "DIV", { "class" : "valeurs uk-position-relative uk-visible-toggle uk-light", "uk-slideshow": "max-height: 200; autoplay: true;" }, [
					// m( "UL", { "class": "uk-slideshow-items" }, data.valeurs.map( function( v, i, t ){ 
					// m( "UL", { "class": "uk-slideshow-items" }, for( var p in a ) {
					m( "UL", { "class": "uk-slideshow-items" }, data.valeurs.map( function( v, i, t ){ 
						console.dir( v ) 
						return m( "LI", m( VALEUR_ARTICLE, {  titre: v.titre, icon: v.icon, text: v.valeur } ) ) 
					// } ),
					} ) ),
					m( "A", { "class": "uk-position-center-left uk-position-small", "uk-slidenav-previous": "true", "uk-slideshow-item": "previous", "uk-icon": "icon: chevron-left; ratio: 1;" } ),
					m( "A", { "class": "uk-position-center-right uk-position-small","uk-slidenav-next": "true", "uk-slideshow-item": "next", "uk-icon": "icon: chevron-right; ratio: 1;" } )
				] )
		}
	}
	var COMPETENCES = {
		view: function( vnode ){
			return m( "DIV", { "class": "competence_wrapper" },
				m( "H3", "\u272A COMPETENCES CLEFS :" ),
				m( ".competences.uk-grid-match.uk-grid-small.uk-child-width-expand@s", data.competences.map( function( val, ind, t ){
					return m("DIV",
						m(".competence.uk-light.uk-background-secondary.uk-padding.uk-card.uk-card-default.uk-card-body", { "uk-scrollspy": "cls:" + applyAnimation( ind, t ) +"; repeat: true;" }, [
							m("h3.uk-card-title", [
								m("div[uk-icon='icon:" + t[ ind ].icon + "; ratio: 2']"), " ",
								m("span", t[ ind ].entry )
							] ) ,
							m("ul.uk-list.uk-list-bullet", t[ ind ].tags.map( function( v, i, t2 ){
									return m("li", v )
								} ) )
						] ) )
					} ) )
				)
			}
	}
	var EXP_SIMPLE = {
		view: function( vnode ){
			return m( "DIV", { "class": "uk-accordion-content" }, m.trust( vnode.attrs.description ), [
				m( "UL", { "class": "uk-list uk-list-bullet" }, vnode.attrs.lignes_description.map( function( v, i, a ){
					return m( "li", m.trust( v ) )
				} ) ),
				m( "br" ),
				"Environnement Technique :",
				m( "UL", { "class": "uk-list uk-list-bullet" }, vnode.attrs.competences_techniques.map( function( v, i, a ){
					return m( "LI", m.trust( v ) )
				} ) )
			] )
		}
	}
	var EXP_COMPLEXE = {
		view: function( vnode ){
			return m( "DIV", { "id": "experiences_autres", "class": "uk-accordion-content" }, vnode.attrs.autres.map( function( v, i, a ) { 
				return m( "DIV", m.trust( v.description ), [ 
					m( "UL", { "class": "uk-list uk-list-bullet experience_description" }, v.lignes_description.map( function( v, i, a ){
						return m( "li", m.trust( v ) )
					} ) ),
					m( "br" ),
					"Environnement Technique :",
					m( "UL", { "class": "uk-list uk-list-bullet" }, v.competences_techniques.map( function( v, i, a ){
						return m( "LI", m.trust( v ) )
					} ) )
				] )
			} ) )
		}
	}
	var EXPERIENCES = {
		view: function( vnode ){
			return m( ".experiences", [
				m( "H3", "\u272A PROJETS : " ), 
				m( "UL", { "uk-accordion": "collapsible: true" }, data.experiences.map( function( v, i, a ){
					return m( "LI", {}, [
						m( "A", { "uk-scrollspy": "cls:" + initExperienceAnimation( i ) + "; repeat: true;", "class": "titre_experience uk-grid uk-accordion-title" }, [
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
							m( EXP_SIMPLE, {
								"description": v.experience.description, 
								"lignes_description": v.experience.lignes_description, 
								"competences_techniques": v.experience.competences_techniques 
							} ) :
							m( EXP_COMPLEXE, { 
								"autres": v.experience.autres 
							} )
					] )
				} ) )
			] )
		}
	}
	var DIVERS = {
		view: function( vnode ) {
			return m( "DIV", { "class" : "divers" }, [
				m( "H3", "\u272A ANNEXE : " ),
				m( "UL", { class: "uk-tab", "data-uk-tab": "{connect:'#divers_content'}" }, vnode.attrs.divers.divers_titre.map( function( v, i, a ){
					return m( "LI",
						m( "A", { onclick: toggleSign }, m.trust( v ) )
					)
				} ) ) ,
				m( "UL", { id: "divers_content", class: "uk-switcher uk-margin" }, vnode.attrs.divers.divers_contenu.map( function( v2, i2, a2){
					return m( "LI", v2.map( function( v3, i3, a3 ){
						return m.trust( v3.nom + " : " + v3.info + "<br />" )
					} ) )
				} ) )
			] )
		}
	}
	var FOOTER = {
		view: function() {
			return m( "footer", { "class" : "footer" }, [
				m( "span", "Yannick Le Tallec .2019" ),
				m( "span", "Mithril.JS & UIKit : Merci !" )
			] )
		}
	}
	var MAIN = {
		view: function() {
			return m( "main", [
				m( HEADER ),

				m( SEPARATEUR_B ),

				m( ETAT ),
				m( HERO ),

				m( SEPARATEUR_B ),

				m( STACK ),

				m( SEPARATEUR_B ),

				m( VALEURS ),

				m( SEPARATEUR_W ),
				m( SEPARATEUR_V ),
				m( SEPARATEUR_V ),
				m( SEPARATEUR_W ),

				m( COMPETENCES ),

				m( SEPARATEUR_B ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_W ),
				m( SEPARATEUR_B ),

				m( EXPERIENCES ),

				m( SEPARATEUR_W ),
				m( SEPARATEUR_B ),
				m( SEPARATEUR_B ),
				m( SEPARATEUR_B ),
				m( SEPARATEUR_W ),

				m( DIVERS, { divers: data.divers } ),

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

	// COMPETENCE CARDS FLIP
	/*
	var front = document.getElementById( 'front' )
	front.addEventListener( 'mouseenter', function( event ){
		console.log( "--- ENTER" ) 
		event.target.classList.toggle( 'flip' )

		var el = event.target,
			screen_w = window.screen.width,
			screen_h = window.screen.height,
			el_w = el.getClientRects()[ 0 ].width
			el_h = el.getClientRects()[ 0 ].height

			console.log( screen_h, el_h ) 
			el.style.top = (( screen_h - el_h ) / 2 ) + 'px'
			el.style.left = (( screen_w - el_w ) / 2 ) + 'px'

		
		console.dir( event.target ) 
	})
	front.addEventListener( 'mouseleave', function( event ){
		event.target.classList.toggle( 'flip' )
		console.log( "--- LEAVE" ) 
		console.dir( event.target ) 
	})
	*/
	// CONTACT EVENT ( ANIM )
	var contact_elem = document.querySelector( ".contact" )
	contact_elem.addEventListener( "click", function( event ) {
		contact ( event )
	} )
	contact_elem.addEventListener( "mouseover", function( event ) {
		contact( event )
	} )
	contact_elem.addEventListener( "mouseleave", function( event ){
		reinitContact( event )
	} )

	contactInitialText = "",
		init = 0

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
	document.querySelector( ".hero h2" ).addEventListener( "click", function( ev ){
		addTitleShake( this )

		setTimeout( function( ){
			removeTitleShake( this )
		}.bind( this ), 1000 ) 
	} )
	document.querySelector( ".hero h2" ).addEventListener( "mouseover", function( ev ){
		addTitleShake( this )
	} )
	document.querySelector( ".hero h2" ).addEventListener( "mouseleave", function( ev ){
		removeTitleShake( this )
	} )
	function addTitleShake( el ){
		el.classList.add( "uk-animation-shake" )
	}
	function removeTitleShake( el ){
		el.classList.remove( "uk-animation-shake" )
	}
}

initPAGE()
