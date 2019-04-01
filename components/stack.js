var m = require( 'mithril' )

module.exports = {
	state: {

	},
	view: function( vnode ) {
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





