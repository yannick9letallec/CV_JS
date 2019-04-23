let lang = ''

function getData( lang ){
	console.log( "GETTING DATA" ) 
	if( XMLHttpRequest ){
		let xhr = new XMLHttpRequest()

		xhr.onreadystatechange = function( event ){
			if( this.readyState === 4 && this.status === 200 ){
				console.log( "OK : HTML DATA : " + lang.toUpperCase() ) 

				postMessage( { 
					html: xhr.responseText,
					lang: lang
				} )
			}
		}

		xhr.open( 'GET', 'html_' + lang, true )
		xhr.send()
	}
}

onmessage = function( event ){
	console.log( "WORKER MSG :" ) 
	console.dir( event.data ) 

	getData( event.data )
}
