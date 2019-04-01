var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
		return m( "section", { "class" : "uk-inline" }, [
			m( "img", { "class" : "hero-image", "src": "images/javascript-code.png", "alt": "code javascript / html / css aléatoire" } ), 
			m( "div", { "class" : "hero uk-text-center uk-overlay uk-position-center uk-light" }, [
				m( "h2", { "onmouseleave": vnode.attrs.onmouseleave, onmouseenter: vnode.attrs.onmouseenter, onclick: vnode.attrs.onclick, "uk-scrollspy": "cls: uk-animation-fade; repeat: true;" }, m.trust( "JAVASCRIPT" + "<br />" + "FULLSTACK" + "<br />" + "DEVELOPPER" ) )
			] )
		] )
	}
}





