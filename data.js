module.exports = { 
	email: 'yannick9letallec@gmail.com',
	lang: {
		fr: {
			contact: 'CONTACT',
			telephone: '06 51 34 53 31',
			active: 1,
			flag_image: './images/drapeau_français.jpg',
			etat: {
				contrat: 'Contrat : ',
				contrat_type: 'CDI',
				mobilite: 'Mobilité : ',
				mobilite_type: 'Grand Ouest'
			},
			valeurs: [{
				titre: "agilité",
				icon: "heart",
				valeur: "Récemment certifié en Agilité, via <strong> Scrum.org </strong> ( <a href='https://www.scrum.org/certification-list' target='_blank'> PSM 1 / PSPO 1 </a> ). Les valeurs de l'agilité m'animent ... au point de me demander, comment a t-on fait jusqu'à maintenant ?!? <br /> Certainement, je souhaite continuer à oeuvrer dans un contexte agile, et améliorer mes pratiques au quotidien. <br />" +
						"Je suis également adepte des valeurs du <strong> Software Craftmanship </strong> qui étendent les principes de base de l'agilité :). <br />" +
						"Les changements culturels en cours dans notre société, rendent l'époque formidable. En ce qui me concerne, je n'ai jamais travaillé en mode cascade, et je m'en félicite !"
				}, {
				titre: "engagement",
				icon: "lock",
				valeur: "<strong> Intrapreneur </strong>, voilà un concept auquel j'adhère totalement. <br />" +
					"M'investir, m'approprier et chercher à améliorer votre produit est mon fonctionnement naturel au quotidient. <br />" +
					"Tout en respectant votre code, le rythme et les valeurs de votre organisation. <br />" +
					"Concrètement, mon expertise, ma créativité, mon gout pour la recherche et le partage bénéficieront à votre projet. <br />"
				}, {
				titre: "curiosite",
				icon: "world",
				valeur: "Curieux insatiable, j'ai besoin au quotidient de nourrir cette soif d'apprendre, et de progresser. <br />" +
					"Que ce soit un nouvel outil, un language, un nouveau concept. Je cherche constamment à étendre et approfondir mes connaissances." +
					"C'est ce voyage parmi les connaissances et les innovations de notre époque qui donne <strong> du sens à la vie ! </strong> <br />"
			} ],
			competences: {
				titre: 'COMPETENCES CLEFS', 
				entries: [ 
					{ "entry": "SYSTEME", "tags": [ "Linux ( Debian / Ubuntu )", "Windows 7 / 8", "BASH / ZSH / TMUX", "Cron" ], "icon": "laptop" } ,
					{ "entry": "CODE", "tags": [ "HTML 5", "CSS 3 :", "Less, Sass, Stylus", "Javascript ( ES6 / 7 )", "NodeJS", "Vue ( CLI, Router, Vuex )" ], "icon": "code" },
					{ "entry": "DATA", "tags": [ "REST API", "MySQL", "MongoDB", "Redis", "JSON / Jq" ], "icon": "database" },
					{ "entry": "PROJECT", "tags": [ "Git", "Rallye", "Jira", "Confluence", "Splunk" ], "icon": "grid" }
				]
			},
			experiences: [ 
				{ "experience": {
					"entreprise": "{ PERSO }",
					"logo": "./images/pmu_logo.png",
					"img_alt": "logo client PMU / projet Hippigo",
					"date": "01 / 2019 à Aujourd'hui",
					"poste":"Javascript Fullstack Developper",
					"description" : "Divers projets, en autonomie ( <a href='http://messages-des-anges.fr' target='_blank'> Messages des Anges </a> )",
					"lignes_description": [
						"Administration de serveur dédié Apache ( SSL / TLS, CORS, CSP ... )",
						"Exploration de frameworks front ( VueJS, Mithril ... )",
						"Mise en oeuvre de REDIS",
						"Automatisation des emails ...",
						"Mise en oeuvre de l'API Twitter",
						"Création d'une chaîne Youtube ( <a href='https://www.youtube.com/channel/UCeFk1a3sTbJBgNccpPnFtEw' target='_blank'> sur les douches froides </a> )",
						"Améliorations SEO, SMO"
					],
					"competences_techniques": [
						"Amélioration de mes compétences Bash / ZSH / Cron",
						"Intégration de TMUX",
						"Tooling : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} }, { "experience": {
					"entreprise": "PMU",
					"logo": "./images/pmu_logo.png",
					"img_alt": "logo client PMU / projet Hippigo",
					"date": "05 / 2018 à 07 / 2018",
					"poste":"Javascript Front End Developper",
					"description" : "Projet <strong> HIPPIGO </strong>. Dans une équipe agile mature ( Scrum ) de 5 personnes, au sein d'un plateau IT d'environ 70 collaborateurs.<br />",
					"lignes_description": [
						"Animation des Sprint Review ( démonstration produit )",
						"Animation du Comité de Pratique Front",
						"Développement de composants Front ( Mix React / Backbone )",
						"Ecriture de test ( Mocha / Sinon JS )",
						"Conseils UI / UX. Optimisation front diverses, en lien avec le métier",
						"Recherche de solution ( spike )"
					],
					"competences_techniques": [
						"Application Mobile Hybride ( Cordova + plugins maison ). Android / IOs",
						"Framework Front : React / Flux / Backbone / Less",
						"Tooling : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} },
				{ "experience": {
					"entreprise": "ADP",
					"logo": "./images/adp_logo.png",
					"img_alt": "logo client ADP / projets Expense / Pay",
					"date": "09 / 2016 à 11 / 2017",
					"poste":"Javascript Fullstack Developper",
					"description" : "Contexte international, au sein du département R & D, et intégré à une SCRUM TEAM de 6 personnes, ma mission à consisté en :<br />",
					"lignes_description": [
						"Développement d'application mobile, refactoring et versionning ( Pay / Expense / Management )",
						"Résolution des bugs et maintenance diverse, front et back",
						"Ecriture des tests d'API ( UnitJS, Mocha, Should )",
						"Conseils Javascript ( best practice, concepts spécifique ( closure, prototype ... ), orientation vanilla )",
						"Conseils UI / UX. Optimisation front diverses, en lien avec le métier",
						"Recherche de solution ( spike )"
					],
					"competences_techniques": [
						"Application Mobile Hybride ( Cordova + plugins maison ). Android / IOs",
						"Framework Front : Backbone / Underscore / Less",
						"Coté Serveur : NodeJS ( ES 6 )",
						"MongoDB",
						"Git / Rally / Jenkins / Splunk"
					]
				} },
				{ "experience": {
					"entreprise": "LA POSTE",
					"logo": "./images/la_poste_logo.png",
					"img_alt": "logo client La Poste / projet eBoutique La Poste",
					"date": "02 / 2016 à 10 / 2016 ",
					"poste":"Javascript FrontEnd Developper",
					"description": "Au sein de la branche numérique du groupe La Poste. Intégré à un plateau SCRUM de 40 développeurs, groupés en équipes multiculturelles, multi-disciplines et multi-projets. Objectif principal : <br />",
					"lignes_description": [
						"Refonte de la boutique e-commerce La Poste ( CMS Hybris )",
						"TMA - Résolution de'incidents et bugs divers",
						"Développemnt d'évolutions diverses",
						"Recherche outils et étude des différents framework front",
						"Conseils Javascript, UI et UX."
					],
					"competences_techniques": [
						"Plateforme Hybris",
						"Framework Front : Jquery",
						"Oracle / Elastic Search",
						"Git / Jira / Jenkins",
						"RWD / Accessibilité / RSE"
					]
				} },
				{ "experience": {
					"entreprise": "OBEXTO",
					"logo": "./images/obexto_logo.png",
					"img_alt": "logo client Obexto / projet Notes de Frais",
					"date": "02 / 2015 à 07 / 2015",
					"poste":"Javascript Mobile Developper",
					"description": " Développement d'une application mobile hybride dédiée à la gestion des notes de frais, couplée à l'ERP maison ( Obexto ). <br /> Objectif : Faciliter la gestion des notes de frais pour les collaborateurs en mobilité, et faciliter la saisie administrative des notes de frais. ",
					"lignes_description": [
						"Analyse et modélisation de l'application",
						"Développement Javascript / Framework SensaTouch",
						"Geolocatlisation et horodatage",
						"Déploiement de l'app sur les stores IOS / Android et Windows Phone",
						"Packaging via Cordova / Phonegap ( IOs distant )"
					],
					"competences_techniques": [
						"Frameworks Front : SensaTouch / Sass",
						"Cordova / Phonegap",
						"SQL Server",
						"Git / Jira / Jenkins"
					]
				} },{ "experience": {
					"entreprise": "DIVERS",
					"logo": "",
					"date": "08 / 2015 à 12 / 2015 ",
					"poste":"Web Developper",
					"autres": [
							{ 
							"description": "<strong> CLIENT </strong>: <a href='http://pepiniere-roche-saint-louis.fr/fr/' target='_blank'> La Roche St Louis </a>. <br />" +
							"En collaboration avec Agiléo informatique, migration du site de 1&1 vers Prestashop. <br />" + 
							"Objectif : Extraction des fiches produits existantes en texte brut. Rechercher et affiner les critères présents pour intégration dans MySQL.",
							"lignes_description": [
								"Scrapping du site 1&1. Extraction des 2000 fiches produits et 4 à 5000 photos",
								"Recherche & transformation des données utilisateurs ( HTML -> JSON )",
								"Import dans MySQL avec contraintes de produits multi images et multi caractéristiques"
							],
							"competences_techniques": [
								"Wget",
								"NodeJS / Cheerio / Request / Async",
								"Prestashop / MySQL"
							]
						}, {
							"description": "<strong> CONTEXTE </strong>: Projet Personnel <br />" +
									"Vente du pico projecteur tactile Touch-Pond. Création du site e-commerce.",
							"lignes_description": [
								"Optimisation dela charte graphique et maquettage des pages",
								"Responsive Web Design",
								"Conforme au standart W3C et aux normes d'accessibilité",
								"Création et gestion du compte facebook. Alimentation et communauty management"
							],
							"competences_techniques": [
								"HTML 5 / CSS 3",
									"NodeJS / Cheerio / Request / Async",
									"Prestashop / MySQL"
								]
						}, {
							"description": "<strong> PARTENARIAT </strong>: Rowlands <br />" +
									"Association avec la marque de chemise française pour homme. <br />" +
									"Respoonsable de la partie e-commerce. ",
							"lignes_description": [
								"Mise en place du site avec la plateforme Magento",
								"Analytics avec Piwik",
								"Création du contenu: shooting photo, rédaction des fiches produit, intégration",
								"Administration du serveur dédié OVH ",
								"Mise en place des exports produits vers les différentes place de marché ( Twenga ... )",
								"Optimisation et recherche de performance",
								"Référencement, SEO et AdWords"
							],
							"competences_techniques": [
								"Magento",
								"Debian / SSH / Bash",
								"HTML 5 / CSS 3"
							]
					
						}, {
							"description": "<strong> CONTEXTE </strong>: NiyaStudio <br />" +
									"Micro entreprise personnelle <br />" +
									"Développement de sites web statiques et e-commerce ( front et back office )",
							"lignes_description": [
									"Développement UI / UX",
									"Développement de back office CMS",
									"Tous clients : Agence Immobilière, Importateur CD, Salle de jeux en réseau, Evènements ... "
							],
							"competences_techniques": [
								"PHP 4 / MYSQL",
								"HTML / CSS / Javascript"
							]
					
						}
					]
				} } 
			],
			divers: {
				divers_titre: [ "\u25BC Langues", "\u25B6 Loisirs / Sports", "\u25B6 Autres" ],
				divers_contenu: [
					// langues
					[ {
						nom: "<b>Anglais</b>",
						niveau: "Lu, Parlé, Ecrit.",
						diplome: "Bulat",
						info: "Technique, et niveau conversationnel courant"
					},
					{
						nom: "<b>Espagnol</b>",
						niveau: "Lu, Parlé, Ecrit.",
						info: "Niveau scolaire + voyages Espagnes / Brézil"
					}, 
					{
						nom: "<b>Breton</b>",
						niveau: "Débutant.( Lu partiellement )",
						info: "Pour le fun. Culture personnelle & connexion à mes racines :)"
					} ] , [ {
					// loisirs
						nom: "<b>Voile</b>",
						info: "Formations régulières avec les Glénans ( niveau 3 en cours ), avec pour objectif le niveau 5, et la capacité à skipper un voilier et une équipe en toute sécurité."
					}, {
						nom: "<b>Yoga</b>",
						info: "Je pratique le yoga régulièrement, depuis des années. En collectif, ou en autonomie."
					}, {
						nom: "<b>Course à Pied / Nage</b>",
						info: "Ces activités sont indispensables à mon bien-être."
					} ] , [ {
					// Autres
						nom: "<b>CNV</b>",
						info: "Communication Non Violente, module 1 suivi en Février 2018, module 2 prévu bientôt."
					} ]
				]
			}
		},
		en: {
			contact: 'CONTACT',
			telephone: '+(33)6 51 34 53 31',
			active: 1,
			flag_image: './images/drapeau_americain.jpg',
			etat: {
				contrat: 'Contract : ',
				contrat_type: 'Long Term',
				mobilite: 'Mobility : ',
				mobilite_type: 'Word Wide'
			},
			valeurs: [{
				titre: "agility",
				icon: "heart",
				valeur: "Recently certified in Agility, via <strong> Scrum.org </strong> <a href='https://www.scrum.org/certification-list' target='_blank'> PSM 1 / PSPO 1 </ a >). " +
					"The values of agility animate me ... to the point of asking me, how have we done so far?!? <br /> Certainly, I wish to continue to work in an agile context, and improve my daily practices. <br />" +
					"The cultural changes in our society make the time great. In my case, I have never worked in cascade mode, and I'm quite happy with that!"
				}, {
				titre: "engagement",
				icon: "lock",
				valeur: "<strong> Intrapreneur </strong>, here is a concept i totally adhere to. <br />" +
					"To invest myself, to appropriate myself and to seek to improve your product is my natural functioning on a daily basis. <br />" +
					"While respecting your code, the pace and values of your organization. <br />" +
					"Concretely, my expertise, my creativity, my taste for research and sharing will benefit your project. <br />"
				}, {
				titre: "curiosity",
				icon: "world",
				valeur: "Curious insatiable, I need daily to feed this thirst for learning, and progress. <br />" +
					"Whether it's a new tool, a language, a new concept. I am constantly looking to expand and deepen my knowledge." +
					"It is this journey among the knowledge and innovations of our time that gives <strong> meaning to life! </strong> <br />"
			} ],
			competences: {
				titre: 'KEY COMPETENCIES',
				entries: [ 
					{ "entry": "SYSTEME", "tags": [ "Linux ( Debian / Ubuntu )", "Windows 7 / 8", "BASH / ZSH / TMUX", "Cron" ], "icon": "laptop" } ,
					{ "entry": "CODE", "tags": [ "HTML 5", "CSS 3 :", "Less, Sass, Stylus", "Javascript ( ES6 / 7 )", "NodeJS", "Vue ( CLI, Router, Vuex )" ], "icon": "code" },
					{ "entry": "DATA", "tags": [ "REST API", "MySQL", "MongoDB", "Redis", "JSON / Jq" ], "icon": "database" },
					{ "entry": "PROJECT", "tags": [ "Git", "Rallye", "Jira", "Confluence", "Splunk" ], "icon": "grid" }
				]
			},
			experiences: [ 
				{ "experience": {
					"entreprise": "{ PERSO }",
					"logo": "./images/pmu_logo.png",
					"img_alt": "Personnals projects logo",
					"date": "01 / 2019 from today",
					"poste":"Javascript Fullstack Developper",
					"description" : "Various projects, in autonomy (<a href='http://messages-des-anges.fr' target='_blank'> Messages of the Angels </a>)",
					"lignes_description": [
						"Apache dedicated server administration (SSL / TLS, CORS, CSP ...)",
						"Exploring front end frameworks (VueJS, Mithril ...)",
						"Implementation of REDIS",
						"Automation of emails",
						"Implementing the Twitter API",
						"Creating a Youtube channel (<a href='https://www.youtube.com/channel/UCeFk1a3sTbJBgNccpPnFtEw' target='_blank'> on cold showers </a>)",
						"Improving SEO, SMO"
					],
					"competences_techniques": [
						"Improved my Bash / ZSH / Cron skills",
						"TMUX integration",
						"Tooling : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} }, { "experience": {
					"entreprise": "PMU",
					"logo": "./images/pmu_logo.png",
					"img_alt": "PMU / Hippigo project logo",
					"date": "05 / 2018 à 07 / 2018",
					"poste":"Javascript Front End Developper",
					"description" : "Project <strong> HIPPIGO </strong>. In a mature agile team (Scrum) of 5 people, within an IT platform of about 70 employees. <br />",
					"lignes_description": [
						"Animation of Sprint Review (product demonstration)",
						"Animation of the Front Practice Committee",
						"Front Component Development (Mix React / Backbone)",
						"Test writing (Mocha / Otherwise JS)",
						"UI / UX tips. Optimization front various, in connection with the profession",
						"Solution search (spike US)"
					],
					"competences_techniques": [
						"Application Mobile Hybride ( Cordova + customs plugins ). Android / IOs",
						"Framework Front : React / Flux / Backbone / Less",
						"Tooling : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} },
				{ "experience": {
					"entreprise": "ADP",
					"logo": "./images/adp_logo.png",
					"img_alt": "ADP customer logo / Expense / Pay projects",
					"date": "09 / 2016 à 11 / 2017",
					"poste":"Javascript Fullstack Developper",
					"description" : "International context, within the R & D department, and integrated in a SCRUM TEAM of 6 people, my mission consisted in: <br /> ",
					"lignes_description": [
						"Mobile application development, refactoring and versionning (Pay / Expense / Management)",
						"Bug fixes and miscellaneous maintenance, front and back",
						"Writing API tests (UnitJS, Mocha, Should)",
						"Javascript advice (best practice, specific concepts (closure, prototype ...), vanilla orientation)",
						"UI / UX tips. Optimization front various, in connection with the profession",
						"Solution search (spike US)"
					],
					"competences_techniques": [
						"Application Mobile Hybride ( Cordova + plugins maison ). Android / IOs",
						"Framework Front : Backbone / Underscore / Less",
						"Coté Serveur : NodeJS ( ES 6 )",
						"MongoDB",
						"Git / Rally / Jenkins / Splunk"
					]
				} },
				{ "experience": {
					"entreprise": "LA POSTE",
					"logo": "./images/la_poste_logo.png",
					"img_alt": "customer's logo La Poste / eBoutique project La Poste",
					"date": "02 / 2016 à 10 / 2016 ",
					"poste":"Javascript FrontEnd Developper",
					"description": "In the digital branch of La Poste Group. Integrated into a SCRUM platform of 40 developers, grouped into multicultural, multi-disciplinary and multi-project teams. Main objective: <br />",
					"lignes_description": [
						"Redesign of the La Poste e-commerce shop (CMS Hybris)",
						"TMA - Resolution of incidents and various bugs",
						"Development of various evolutions",
						"Research tools and study of different front-end frameworks",
						"Javascript, UI and UX tips."
					],
					"competences_techniques": [
						"Plateforme Hybris",
						"Framework Front : Jquery",
						"Oracle / Elastic Search",
						"Git / Jira / Jenkins",
						"RWD / Accessibilité / RSE"
					]
				} },
				{ "experience": {
					"entreprise": "OBEXTO",
					"logo": "./images/obexto_logo.png",
					"img_alt": "Obexto customer logo / Bill of Lading project",
					"date": "02 / 2015 à 07 / 2015",
					"poste":"Javascript Mobile Developper",
					"description": "Development of a hybrid mobile application dedicated to the management of expense reports, coupled with the house ERP (Obexto). <br /> Objective: Facilitate the management of expense reports for employees on the move, and facilitate the administrative entry of expense reports.",
					"lignes_description": [
						"Analysis and modeling of the application",
						"Javascript Development / SensaTouch Framework",
						"Geolocalisation and time stamping",
						"Deploying the app on IOS / Android and Windows Phone stores",
						"Packaging via Cordova / Phonegap ( remote IOs )"
					],
					"competences_techniques": [
						"Frameworks Front : SensaTouch / Sass",
						"Cordova / Phonegap",
						"SQL Server",
						"Git / Jira / Jenkins"
					]
				} },{ "experience": {
					"entreprise": "DIVERS",
					"logo": "",
					"date": "08 / 2015 à 12 / 2015 ",
					"poste":"Web Developper",
					"autres": [
							{ 
							"description": "<strong> CUSTOMER </strong>: <a href='http://pepiniere-roche-saint-louis.fr/fr/' target='_blank'> La Roche St Louis </a>. <br />" +
							"In collaboration with Agileo informatique, migration of the 1 & 1 site to Prestashop. <br />" + 
							"Objective: Extract existing product sheets in plain text. Search and refine the criteria for integration in MySQL.",
							"lignes_description": [
								"Scrapping of the site 1 & 1. Extraction of 2000 product sheets and 4 to 5000 photos",
								"Search and transformation of user data ( HTML -> JSON )",
								"Import into MySQL with multi-image and multi-product product constraints "
							],
							"competences_techniques": [
								"Wget",
								"NodeJS / Cheerio / Request / Async",
								"Prestashop / MySQL"
							]
						}, {
							"description": "<strong> CONTEXT </strong>: Personnal Project <br />" +
									"Sale of Touch-Pond touch-screen pico. Creation of the e-commerce site.  ",
							"lignes_description": [
								"Optimization of the graphic charter and layout of the pages",
								"Responsive Web Design",
								"Meets W3C standart and accessibility standards",
								"Creation and management of the facebook account. Food and community management"
							],
							"competences_techniques": [
								"HTML 5 / CSS 3",
									"NodeJS / Cheerio / Request / Async",
									"Prestashop / MySQL"
								]
						}, {
							"description": "<strong> PARTNERSHIP </strong>: Rowlands <br />" +
									"Association with the French shirt brand for men. <br />" +
									"Responsible for the e-commerce part. ",
							"lignes_description": [
								"Setting up the site with the Magento platform",
								"Piwik Analytics ",
								"Creation of the content: photo shooting, drafting of the product sheets, integration",
								"OVH dedicated server administration",
								"Implementation of product exports to different marketplaces (Twenga ...)",
								"Optimization and performance research",
								"SEO, SEO and AdWords"
							],
							"competences_techniques": [
								"Magento",
								"Debian / SSH / Bash",
								"HTML 5 / CSS 3"
							]
					
						}, {
							"description": "<strong> CONTEXT </strong>: NiyaStudio <br />" +
									"Personnal business" +
									"Development of static websites and e-commerce (front and back office)",
							"lignes_description": [
									"Development UI / UX",
									"Development of CMS back office",
									"All clients: Real Estate Agency, Importer CD, Network Game Room, Events ..."
							],
							"competences_techniques": [
								"PHP 4 / MYSQL",
								"HTML / CSS / Javascript"
							]
					
						}
					]
				} } 
			],
			divers: {
				divers_titre: [ "\u25BC Languages", "\u25B6 Leisures / Sports", "\u25B6 Others" ],
				divers_contenu: [
					// langues
					[ {
						nom: "<b>English</b>",
						niveau: "Read, writen, spoken. ",
						diplome: "Bulat",
						info: "Technical, and current conversational level"
					},
					{
						nom: "<b>Spanish</b>",
						niveau: "Read, writen, spoken. ",
						info: "School level + travels Spain / Brazil"
					}, 
					{
						nom: "<b>Brezhoneg</b>",
						niveau: "Débutant.( Lu partiellement )",
						info: "For fun. Personal culture & connection to my roots : "
					} ] , [ {
					// loisirs
						nom: "<b>Yachting</b>",
						info: "Regular training with the Glénans (level 3 in progress), with the objective of level 5, and the ability to skipper a sailboat and a team safely."
					}, {
						nom: "<b>Yoga</b>",
						info: "I have been practicing yoga regularly for years. In collective, or in autonomy."
					}, {
						nom: "<b>Running / Swimming</b>",
						info: "These activities are essential to my well-being."
					} ] , [ {
					// Autres
						nom: "<b>NVC</b>",
						info: "Non Violent Communication, module 1 followed in February 2018, module 2 planned soon."
					} ]
				]
			}
		},
		es: {
			contact: 'CONTACTAR',
			telephone: '+(33)6 51 34 53 31',
			active: 1,
			flag_image: './images/drapeau_espagnol.jpg',
			etat: {
				contrat: 'Contrato : ',
				contrat_type: 'CDI',
				mobilite: 'Movilidad  : ',
				mobilite_type: 'Gran Oeste'
			},
			valeurs: [{
				titre: "agilidad",
				icon: "heart",
				valeur: "Certificado recientemente en Agility, a través de <strong> Scrum.org </strong> <a href='https://www.scrum.org/certification-list' target='_blank'> PSM 1 / PSPO 1 </ a >). Los valores de la agilidad me animan ... hasta el punto de preguntarme, ¿cómo hemos hecho hasta ahora? <br /> Ciertamente, deseo continuar trabajando en un contexto ágil y mejorar mis prácticas diarias. <br />" +
						"También soy experto en los valores de <strong> Craftmanship </strong> de Software que amplían los principios básicos de agilidad :). <br />" +
						"Los cambios culturales en nuestra sociedad hacen que el tiempo sea grandioso. En mi caso, nunca he trabajado en modo de cascada, y estoy feliz!"
				}, {
				titre: "compromiso",
				icon: "lock",
				valeur: "<strong> Intrapreneur </strong>, ese es un concepto con el que estoy totalmente de acuerdo. <br />" +
					"Invertir, apropiarme y tratar de mejorar su producto es mi funcionamiento natural a diario. <br />" +
					"Respetando su código, el ritmo y los valores de su organización. <br />" +
					"Concretamente, mi experiencia, mi creatividad, mi gusto por la investigación y el compartir beneficiarán su proyecto. <br />"
				}, {
				titre: "curiosidad",
				icon: "world",
				valeur: "Curioso e insaciable, necesito diariamente alimentar esta sed de aprendizaje y progreso. <br />" +
					"Ya sea una nueva herramienta, un lenguaje, un nuevo concepto. Estoy constantemente buscando expandir y profundizar mi conocimiento." +
					"¡Es este viaje entre el conocimiento y las innovaciones de nuestro tiempo lo que le da sentido a <strong> la vida! </strong> <br />"
			} ],
			competences: {
				titre: 'HABILIDADES CLAVE', 
				entries: [ 
					{ "entry": "SYSTEME", "tags": [ "Linux ( Debian / Ubuntu )", "Windows 7 / 8", "BASH / ZSH / TMUX", "Cron" ], "icon": "laptop" } ,
					{ "entry": "CODE", "tags": [ "HTML 5", "CSS 3 :", "Less, Sass, Stylus", "Javascript ( ES6 / 7 )", "NodeJS", "Vue ( CLI, Router, Vuex )" ], "icon": "code" },
					{ "entry": "DATA", "tags": [ "REST API", "MySQL", "MongoDB", "Redis", "JSON / Jq" ], "icon": "database" },
					{ "entry": "PROJECT", "tags": [ "Git", "Rallye", "Jira", "Confluence", "Splunk" ], "icon": "grid" }
				]
			},
			experiences: [ 
				{ "experience": {
					"entreprise": "{ PERSONAL }",
					"logo": "./images/pmu_logo.png",
					"img_alt": "Logos por proyectos presonales",
					"date": "Desde enero de 2019 hasta hoy",
					"poste":"Javascript Fullstack Developper",
					"description" : "Varios proyectos, en autonomía (<a href='http://messages-des-anges.fr' target='_blank'> Mensajes de los Ángeles </a>)",
					"lignes_description": [
						"Administración del servidor dedicado Apache (SSL / TLS, CORS, CSP ...)",
						"Explorando marcos frontales (VueJS, Mithril ...)",
						"Implementación de REDIS",
						"Automatización de correos electrónicos ...",
						"Implementando la API de Twitter",
						"Creación de un canal de Youtube (<a href='https://www.youtube.com/channel/UCeFk1a3sTbJBgNccpPnFtEw' target='_blank'> en duchas frías </a>)",
						"Mejoras SEO, SMO"
					],
					"competences_techniques": [
						"Mejoras en mis practicas Bash / ZSH / Cron",
						"Integracion de TMUX",
						"Instrumentos : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} }, { "experience": {
					"entreprise": "PMU",
					"logo": "./images/pmu_logo.png",
					"img_alt": "PMU logo del cliente / proyecto Hippigo",
					"date": "05 / 2018 à 07 / 2018",
					"poste":"Javascript Front End Developper",
					"description" : "Proyecto <strong> HIPPIGO </strong>. En un equipo ágil maduro (Scrum) de 5 personas, dentro de una plataforma de TI de aproximadamente 70 empleados. <br />",
					"lignes_description": [
						"Animación de Sprint Review (demostración de producto)",
						"Animación del Comité de Práctica del Frente",
						"Desarrollo de componentes frontales (Mix React / Backbone)",
						"Prueba de escritura (Mocha / De lo contrario JS)",
						"Consejos UI / UX. Optimización frente a varios, en relación con la profesión.",
						"Búsqueda de soluciones (spike)"
					],
					"competences_techniques": [
						"Aplicación móvil híbrida (Cordova + complementos caseros). Android / IOs",
						"Framework Front : React / Flux / Backbone / Less",
						"Instrumentos : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} },
				{ "experience": {
					"entreprise": "ADP",
					"logo": "./images/adp_logo.png",
					"img_alt": "ADP logo del cliente / Gastos / Pagar proyectos",
					"date": "09 / 2016 à 11 / 2017",
					"poste":"Javascript Fullstack Developper",
					"description" : "Contexto internacional, dentro del departamento de I + D, e integrado en un EQUIPO SCRUM de 6 personas, mi misión consistió en: <br />",
					"lignes_description": [
						"Desarrollo de aplicaciones móviles, refactorización y control de versiones (Pago / Gastos / Gestión)",
						"Corrección de errores y mantenimiento misceláneo, delantero y trasero.",
						"Pruebas API de escritura (UnitJS, Mocha, Should)",
						"Consejo de Javascript (buenas prácticas, conceptos específicos (cierre, prototipo ...), orientación de vainilla)",
						"Consejos UI / UX. Optimización frente a varios, en relación con la profesión.",
						"Búsqueda de soluciones (spike)"
					],
					"competences_techniques": [
						"Aplicación móvil híbrida (Cordova + complementos caseros). Android / IOs",
						"Marco frontal: Backbone / Subrayado / Menos",
						"Lado del servidor: NodeJS (ES 6)",
						"MongoDB",
						"Git / Rally / Jenkins / Splunk"
					]
				} },
				{ "experience": {
					"entreprise": "LA POSTE",
					"logo": "./images/la_poste_logo.png",
					"img_alt": "logotipo del cliente La Poste / proyecto eBoutique La Poste",
					"date": "02 / 2016 à 10 / 2016 ",
					"poste":"Javascript FrontEnd Developper",
					"description": "En la rama digital del Grupo La Poste. Integrado en una plataforma SCRUM de 40 desarrolladores, agrupados en equipos multiculturales, multidisciplinarios y de múltiples proyectos. Objetivo principal: <br />",
					"lignes_description": [
						"Rediseño de la tienda de comercio electrónico La Poste (CMS Hybris)",
						"TMA - Resolución de incidencias y errores varios.",
						"Desarrollo de diversas evoluciones.",
						"Herramientas de investigación y estudio de diferentes marcos front-end.",
						"Asesoriamientos Javascript, UI y UX."
					],
					"competences_techniques": [
						"Plataforma Hybris",
						"Framework Front : Jquery",
						"Oracle / Elastic Search",
						"Git / Jira / Jenkins",
						"RWD / Accesibilidad / RSE"
					]
				} },
				{ "experience": {
					"entreprise": "OBEXTO",
					"logo": "./images/obexto_logo.png",
					"img_alt": "logo client Obexto / projet Notes de Frais",
					"date": "02 / 2015 à 07 / 2015",
					"poste":"Javascript Mobile Developper",
					"description": "Desarrollo de una aplicación móvil híbrida dedicada a la gestión de informes de gastos, junto con el ERP de la casa (Obexto). <br /> Objetivo: Facilitar la gestión de informes de gastos para los empleados en movimiento, y facilitar la entrada administrativa de informes de gastos.",
					"lignes_description": [
						"Análisis y modelización de la aplicación.",
						"Desarrollo de Javascript / SensaTouch Framework",
						"Geoloculación y sellado de tiempo.",
						"Implementación de la aplicación en tiendas IOS / Android y Windows Phone",
						"Embalaje a través de Cordova / Phonegap (E / S remotas)"
					],
					"competences_techniques": [
						"Frameworks Front : SensaTouch / Sass",
						"Cordova / Phonegap",
						"SQL Server",
						"Git / Jira / Jenkins"
					]
				} },{ "experience": {
					"entreprise": "DIVERS",
					"logo": "",
					"date": "08 / 2015 à 12 / 2015 ",
					"poste":"Web Developper",
					"autres": [
							{ 
							"description": "<strong> CLIENTE </strong>: <a href='http://pepiniere-roche-saint-louis.fr/fr/' target='_blank'> La Roche St Louis </a>. <br />" +
							"En collaboration avec Agiléo informatique, migration du site de 1&1 vers Prestashop. <br /> En colaboración con Agileo informatique, la migración del sitio 1 y 1 a Prestashop. <br />" + 
							"Objetivo: Extraer las hojas de productos existentes en texto plano. Busca y refina los criterios de integración en MySQL.",
							"lignes_description": [
								"Desguace del sitio 1 y 1. Extracción de 2000 hojas de producto y de 4 a 5000 fotos.",
								"Búsqueda y transformación de datos de usuario (HTML -> JSON)",
								"Importe a MySQL con restricciones de productos de múltiples imágenes y productos múltiples"
							],
							"competences_techniques": [
								"Wget",
								"NodeJS / Cheerio / Request / Async",
								"Prestashop / MySQL"
							]
						}, {
							"description": "<strong> ANTECEDENTES </strong>: Proyecto personal <br />" +
									"Venta de pantalla táctil touch-pond pico. Creación del sitio de comercio electrónico.",
							"lignes_description": [
								"Optimización de la carta gráfica y maquetación de las páginas.",
								"Diseño Web Responsivo",
								"Cumple con el estándar W3C y los estándares de accesibilidad.",
								"Creación y gestión de la cuenta de facebook. Gestión de alimentos y comunidad."
							],
							"competences_techniques": [
								"HTML 5 / CSS 3",
								"NodeJS / Cheerio / Request / Async",
								"Prestashop / MySQL"
							]
						}, {
							"description": "<strong> PARTENARIAT </strong>: Rowlands <br />" +
									"Asociación con la marca de camisa francesa para hombre. <br />" +
									"Responsable de la parte de e-commerce.",
							"lignes_description": [
								"Configurando el sitio con la plataforma Magento.",
								"Analítica con Piwik",
								"Creación del contenido: toma de fotos, redacción de las hojas de producto, integración.",
								"Administración de servidores dedicados OVH",
								"Implementación de exportaciones de productos a diferentes mercados (Twenga ...).",
								"Optimización y búsqueda del rendimiento.",
								"SEO, SEO y AdWords"
							],
							"competences_techniques": [
								"Magento",
								"Debian / SSH / Bash",
								"HTML 5 / CSS 3"
							]
					
						}, {
							"description": "<strong> ANTECEDENTES </strong>: NiyaStudio <br />" +
									"Negocio micro personal <br />" +
									"Desarrollo de sitios web estáticos y comercio electrónico (front y back office).",
							"lignes_description": [
									"Desarrollo UI / UX",
									"Desarrollo de Back Office CMS",
									"Todos los clientes: Agencia Inmobiliaria, CD Importador, Sala de Juegos en Red, Eventos ..."
							],
							"competences_techniques": [
								"PHP 4 / MYSQL",
								"HTML / CSS / Javascript"
							]
					
						}
					]
				} } 
			],
			divers: {
				divers_titre: [ "\u25BC Idiomas", "\u25B6 Recreacion / Deportes", "\u25B6 Otros" ],
				divers_contenu: [
					// langues
					[ {
						nom: "<b>Ingles</b>",
						niveau: "Lee, escribe, habla.",
						diplome: "Bulat",
						info: "Técnico, y nivel de conversación actual."
					},
					{
						nom: "<b>Frances</b>",
						niveau: "Langua materna",
						info: ""
					}, 
					{
						nom: "<b>Breton</b>",
						niveau: "Principiante.( leer parcialmente )",
						info: "Por diversion. Cultura personal y connexion a mis raices."
					} ] , [ {
					// loisirs
						nom: "<b> De Yates</b>",
						info: "Entrenamiento regular con los Glénans (nivel 3 en progreso), con el objetivo del nivel 5, y la capacidad de saltarse un velero y un equipo de manera segura."
					}, {
						nom: "<b>Yoga</b>",
						info: "He estado practicando yoga regularmente durante años. En colectivo, o en autonomía."
					}, {
						nom: "<b>Carrera a pie / Natacion</b>",
						info: "Estas actividades son esenciales para mi bienestar."
					} ] , [ {
					// Autres
						nom: "<b>NVC</b>",
						info: "Comunicación No Violenta, módulo 1 seguido en febrero de 2018, módulo 2 previsto pronto."
					} ]
				]
			}
		},
		bzh: {
			active: 0,
			flag_image: './images/drapeau_breton.jpg',
			contact: 'JUBENNAN',
			telephone: '06 51 34 53 31',
			etat: {
				contrat: 'Kevrat : ',
				contrat_type: 'Kevrat Didermen',
				mobilite: 'Finvusted : ',
				mobilite_type: 'Ledag Kornog'
			},
			valeurs: [{
				titre: "primder",
				icon: "heart",
				valeur: "A-nevez testeniekaet e Primder, dre hentererezh <strong> Scrum.org </strong> ( <a href='https://www.scrum.org/certification-list' target='_blank'> PSM 1 / PSPO 1 </a> ). Buhezekaat eo dre ar talvoud eus primder ... a-us poent goulenn don, penaos a rit betek breman ?!? <br /> Moarvat, hetin a ran derc'hel euvrin e ur kendestenn primder, ha gwellaat ma pleustr bemdez. <br />" +
						"Dalc'hiad eo ivez ar talvoud eus  <strong> Software Craftmanship </strong> emledan ar pennaenn eus primder :). <br />" +
						"Ar chench sevenadurel war ober e hon kevredigezh , rentan er hoalad ijnek. Evit ma perzh, n'eo ket biken labouret e daore 'c'hweldro V', ha laouenn eo !"
				}, {
				titre: "engouestl",
				icon: "lock",
				valeur: "<strong> Embreger </strong>, setu ur meizad eget emezelan eo a-bezh. <br />" +
					"Am gronnan, am aloubin ha klask gwellaat ho liesad eo ma mont en-dro e-dreuz pemdez. <br />" +
					"Briaat ho areg ijnenn, ar lusk hag ar talvoud eus ho aozadur. <br />" +
					"Dont da wir, ma prizacherezh, ma krouin, mon tanva evit enklask ha kevrennadur korvoin ho raktres. <br />"
				}, {
				titre: "kuriusted",
				icon: "world",
				valeur: "Ranell rankles eo, ezhomm am eus magan ar c'hoant eus deskin, ha araokaat. <br />" +
					"Eo ur nevez ostilh, ur nevezh yezh, ur nevezh meizad. Klask a ran atav da astenn ha donaat ma anaoudegezh." +
					"Er beajinman e-touez anaoudegezh ha ar nevezenti eus hon hoalad rein <strong> ur ster don da buhez ! </strong> <br />"
			} ],
			competences: {
				titre: 'COMPETENCES CLEFS', 
				entries: [ 
					{ "entry": "SYSTEME", "tags": [ "Linux ( Debian / Ubuntu )", "Windows 7 / 8", "BASH / ZSH / TMUX", "Cron" ], "icon": "laptop" } ,
					{ "entry": "CODE", "tags": [ "HTML 5", "CSS 3 :", "Less, Sass, Stylus", "Javascript ( ES6 / 7 )", "NodeJS", "Vue ( CLI, Router, Vuex )" ], "icon": "code" },
					{ "entry": "DATA", "tags": [ "REST API", "MySQL", "MongoDB", "Redis", "JSON / Jq" ], "icon": "database" },
					{ "entry": "PROJECT", "tags": [ "Git", "Rallye", "Jira", "Confluence", "Splunk" ], "icon": "grid" }
				]
			},
			experiences: [ 
				{ "experience": {
					"entreprise": "{ PERSO }",
					"logo": "./images/pmu_logo.png",
					"img_alt": "logo client PMU / projet Hippigo",
					"date": "01 / 2019 à Aujourd'hui",
					"poste":"Javascript Fullstack Developper",
					"description" : "Divers projets, en autonomie ( <a href='http://messages-des-anges.fr' target='_blank'> Messages des Anges </a> )",
					"lignes_description": [
						"Administration de serveur dédié Apache ( SSL / TLS, CORS, CSP ... )",
						"Exploration de frameworks front ( VueJS, Mithril ... )",
						"Mise en oeuvre de REDIS",
						"Automatisation des emails ...",
						"Mise en oeuvre de l'API Twitter",
						"Création d'une chaîne Youtube ( <a href='https://www.youtube.com/channel/UCeFk1a3sTbJBgNccpPnFtEw' target='_blank'> sur les douches froides </a> )",
						"Améliorations SEO, SMO"
					],
					"competences_techniques": [
						"Amélioration de mes compétences Bash / ZSH / Cron",
						"Intégration de TMUX",
						"Tooling : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} }, { "experience": {
					"entreprise": "PMU",
					"logo": "./images/pmu_logo.png",
					"img_alt": "logo client PMU / projet Hippigo",
					"date": "05 / 2018 à 07 / 2018",
					"poste":"Javascript Front End Developper",
					"description" : "Projet <strong> HIPPIGO </strong>. Dans une équipe agile mature ( Scrum ) de 5 personnes, au sein d'un plateau IT d'environ 70 collaborateurs.<br />",
					"lignes_description": [
						"Animation des Sprint Review ( démonstration produit )",
						"Animation du Comité de Pratique Front",
						"Développement de composants Front ( Mix React / Backbone )",
						"Ecriture de test ( Mocha / Sinon JS )",
						"Conseils UI / UX. Optimisation front diverses, en lien avec le métier",
						"Recherche de solution ( spike )"
					],
					"competences_techniques": [
						"Application Mobile Hybride ( Cordova + plugins maison ). Android / IOs",
						"Framework Front : React / Flux / Backbone / Less",
						"Tooling : Webpack / Babel / ESLint",
						"Git / Gitlab / Jira / Confluence"
					]
				} },
				{ "experience": {
					"entreprise": "ADP",
					"logo": "./images/adp_logo.png",
					"img_alt": "logo client ADP / projets Expense / Pay",
					"date": "09 / 2016 à 11 / 2017",
					"poste":"Javascript Fullstack Developper",
					"description" : "Contexte international, au sein du département R & D, et intégré à une SCRUM TEAM de 6 personnes, ma mission à consisté en :<br />",
					"lignes_description": [
						"Développement d'application mobile, refactoring et versionning ( Pay / Expense / Management )",
						"Résolution des bugs et maintenance diverse, front et back",
						"Ecriture des tests d'API ( UnitJS, Mocha, Should )",
						"Conseils Javascript ( best practice, concepts spécifique ( closure, prototype ... ), orientation vanilla )",
						"Conseils UI / UX. Optimisation front diverses, en lien avec le métier",
						"Recherche de solution ( spike )"
					],
					"competences_techniques": [
						"Application Mobile Hybride ( Cordova + plugins maison ). Android / IOs",
						"Framework Front : Backbone / Underscore / Less",
						"Coté Serveur : NodeJS ( ES 6 )",
						"MongoDB",
						"Git / Rally / Jenkins / Splunk"
					]
				} },
				{ "experience": {
					"entreprise": "LA POSTE",
					"logo": "./images/la_poste_logo.png",
					"img_alt": "logo client La Poste / projet eBoutique La Poste",
					"date": "02 / 2016 à 10 / 2016 ",
					"poste":"Javascript FrontEnd Developper",
					"description": "Au sein de la branche numérique du groupe La Poste. Intégré à un plateau SCRUM de 40 développeurs, groupés en équipes multiculturelles, multi-disciplines et multi-projets. Objectif principal : <br />",
					"lignes_description": [
						"Refonte de la boutique e-commerce La Poste ( CMS Hybris )",
						"TMA - Résolution de'incidents et bugs divers",
						"Développemnt d'évolutions diverses",
						"Recherche outils et étude des différents framework front",
						"Conseils Javascript, UI et UX."
					],
					"competences_techniques": [
						"Plateforme Hybris",
						"Framework Front : Jquery",
						"Oracle / Elastic Search",
						"Git / Jira / Jenkins",
						"RWD / Accessibilité / RSE"
					]
				} },
				{ "experience": {
					"entreprise": "OBEXTO",
					"logo": "./images/obexto_logo.png",
					"img_alt": "logo client Obexto / projet Notes de Frais",
					"date": "02 / 2015 à 07 / 2015",
					"poste":"Javascript Mobile Developper",
					"description": " Développement d'une application mobile hybride dédiée à la gestion des notes de frais, couplée à l'ERP maison ( Obexto ). <br /> Objectif : Faciliter la gestion des notes de frais pour les collaborateurs en mobilité, et faciliter la saisie administrative des notes de frais. ",
					"lignes_description": [
						"Analyse et modélisation de l'application",
						"Développement Javascript / Framework SensaTouch",
						"Geolocatlisation et horodatage",
						"Déploiement de l'app sur les stores IOS / Android et Windows Phone",
						"Packaging via Cordova / Phonegap ( IOs distant )"
					],
					"competences_techniques": [
						"Frameworks Front : SensaTouch / Sass",
						"Cordova / Phonegap",
						"SQL Server",
						"Git / Jira / Jenkins"
					]
				} },{ "experience": {
					"entreprise": "DIVERS",
					"logo": "",
					"date": "08 / 2015 à 12 / 2015 ",
					"poste":"Web Developper",
					"autres": [
							{ 
							"description": "<strong> CLIENT </strong>: <a href='http://pepiniere-roche-saint-louis.fr/fr/' target='_blank'> La Roche St Louis </a>. <br />" +
							"En collaboration avec Agiléo informatique, migration du site de 1&1 vers Prestashop. <br />" + 
							"Objectif : Extraction des fiches produits existantes en texte brut. Rechercher et affiner les critères présents pour intégration dans MySQL.",
							"lignes_description": [
								"Scrapping du site 1&1. Extraction des 2000 fiches produits et 4 à 5000 photos",
								"Recherche & transformation des données utilisateurs ( HTML -> JSON )",
								"Import dans MySQL avec contraintes de produits multi images et multi caractéristiques"
							],
							"competences_techniques": [
								"Wget",
								"NodeJS / Cheerio / Request / Async",
								"Prestashop / MySQL"
							]
						}, {
							"description": "<strong> CONTEXTE </strong>: Projet Personnel <br />" +
									"Vente du pico projecteur tactile Touch-Pond. Création du site e-commerce.",
							"lignes_description": [
								"Optimisation dela charte graphique et maquettage des pages",
								"Responsive Web Design",
								"Conforme au standart W3C et aux normes d'accessibilité",
								"Création et gestion du compte facebook. Alimentation et communauty management"
							],
							"competences_techniques": [
								"HTML 5 / CSS 3",
									"NodeJS / Cheerio / Request / Async",
									"Prestashop / MySQL"
								]
						}, {
							"description": "<strong> PARTENARIAT </strong>: Rowlands <br />" +
									"Association avec la marque de chemise française pour homme. <br />" +
									"Respoonsable de la partie e-commerce. ",
							"lignes_description": [
								"Mise en place du site avec la plateforme Magento",
								"Analytics avec Piwik",
								"Création du contenu: shooting photo, rédaction des fiches produit, intégration",
								"Administration du serveur dédié OVH ",
								"Mise en place des exports produits vers les différentes place de marché ( Twenga ... )",
								"Optimisation et recherche de performance",
								"Référencement, SEO et AdWords"
							],
							"competences_techniques": [
								"Magento",
								"Debian / SSH / Bash",
								"HTML 5 / CSS 3"
							]
					
						}, {
							"description": "<strong> CONTEXTE </strong>: NiyaStudio <br />" +
									"Micro entreprise personnelle <br />" +
									"Développement de sites web statiques et e-commerce ( front et back office )",
							"lignes_description": [
									"Développement UI / UX",
									"Développement de back office CMS",
									"Tous clients : Agence Immobilière, Importateur CD, Salle de jeux en réseau, Evènements ... "
							],
							"competences_techniques": [
								"PHP 4 / MYSQL",
								"HTML / CSS / Javascript"
							]
					
						}
					]
				} } 
			],
		}
	}
}
