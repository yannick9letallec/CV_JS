var m = require( 'mithril' )

module.exports = {
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






