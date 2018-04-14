/*
// VARS
var body = document.body

// HEADER
var HEADER = {
	view: function (){
		return m( ".header", [
			m( "span", "Yannick Le Tallec | JAVASCRIPT FULLSTACK DEVELOPPER" ),
			m( "span.contact", { onlick: contact() }, "Contact" ),
			m( "div.contact", { "uk-drop": "top-right" }, [
				m( "a.tel", { href: "tel: 06 51 34 53 31" }, "Appelez moi !" ),
				m( "br" ),
				m( "a.email", { href: "mailto:yannick9letallec@gmail.com" }, "Envoyez moi un email ! " ),
			] )
		] )
	}
}

// ETAT
var ETAT = {
	view: function (){
		return m( ".etat", [
			m( "span.disponibilite", "DISPONIBLE" ),
			m( "sapn.mobilite", "MOBILITE" ),
			m( "span.TJM", "Voyons ensemble !" )
		] )
	}
}

m.mount( body, HEADER, ETAT )



function contact( ){
	console.log( "[ OK ] : " ) 
}
*/
