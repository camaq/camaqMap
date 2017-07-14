var graphRoot;
var graphRDLMDO;
var graphFCEP;
var graphAéroFormation;
var graphFPLR;
var graphODS;
var graphInternationalODS;
var graphNationalODS;
var graphRégionalODS;
var graphIAM;
var graphProvincialODS;
var graphOPLSAFDLF;
var graphProvincial;
var graphFédéral;
var graphRégional;
var graphEDE;
var graphUniversitaire;
var graphCOLLÉGIALETTECHNIQUE;
var graphSECONDAIREETPROFESSIONNEL;
var graphExtend; 

////////////////////Noeuds Root///////////////////
graphRoot = function () { return {
  "nodes": [
	{"id": 0, "titre": "Accueil", "img": "img/accueil.png", "graphOpen": "NAN"},
	
	{"id": 1, "titre": "Relève de main-d'oeuvre", "logo": "img/releve.png", "graphOpen": "graphRDLMDO"},
	{"id": 2, "titre": "Formation continue\net perfectionnement", "logo": "img/formationcontinue.png", "graphOpen": "graphFCEP"},
	{"id": 3, "titre": "Organismes de soutien", "logo": "img/organismessoutien.png", "graphOpen": "graphODS"},
	{"id": 4, "titre": "Formation par\nla recherche", "logo": "img/rechercheetdev.png", "graphOpen": "graphFPLR"},
	{"id": 5, "titre": "Organismes pour le\nsoutien au financement\nde la formation", "logo": "img/orggouvernement.png", "graphOpen": "graphOPLSAFDLF"},
	{"id": 6, "titre": "Établissements\nd'enseignement", "logo": "img/écoles.png", "graphOpen": "graphEDE"}
  ],
  "links": [
	{"source": 0, "target": 1},
	{"source": 0, "target": 2},
	{"source": 0, "target": 3},
	{"source": 0, "target": 4},
	{"source": 0, "target": 5},
	{"source": 0, "target": 6}
	  ]
  }
};

//////////////Noeud Relève de la main-d'oeuvre///////////////////
graphRDLMDO = function () { return {
	  "nodes": [
			{"id": 0, "titre": "Relève de main-d'oeuvre", "logo": "NAN", "graphOpen": "NAN"},
			
			{"id": 1, "titre": "Folie Technique (campus\nPolytechnique Montréal)", "graphOpen": "NAN",
				"mission": "Folie Technique est un organismes à but non lucratif qui a vu le jour en 1991, à la suite d'une initiative d'étudiants en ingénierie de Polytechnique Montréal. L'objectif de Folie Technique est d'offrir à tous les jeunes la possibilité de s'ouvrir au monde des sciences et de l'ingénierie et de faire naître chez eux une confiance en soi, peu importe leur lieu de résidence, leur situation socioéconomique et leur sexe.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d'activités proposées :</span><br><br>\
							Camp d'été scientifique : <br><br>\
							\u27E9 AÉROSPATIAL (14-17 ANS) : Conception et construction en équipe d\'une fusée. Modélisation sur le logiciel Catia. Lancement de la fusée. <br>\
							\u27E9 AÉRONAUTIQUE (14-17 ANS) : Découverte du monde de l\'ingénierie en concevant puis en réalisant en équipe un avion téléguidé. Apprendre comment les ingénieurs travaillent à l\'aide de logiciels et de plans pour créer un nouveau produit. Pratique pour diriger un avion par jeu vidéo et test en vol.<br><br>\
							Diverses autres activités destinées aux élèves du primaire et du secondaire.",
				"lien":  "http://www.folietechnique.com/" },
				
			{"id": 2, "titre": "Programme Aéro2", "graphOpen": "NAN",
				"mission": "Ce programme scolaire unique au Québec a été conçu et réalisé avec des partenaires majeurs du monde de l’aérospatiale et de l’exploration de carrières chez les jeunes : l’École des métiers de l’aérospatiale de Montréal (ÉMAM), le Comité sectoriel de main-d’œuvre en aérospatiale (CAMAQ), Montréal Relève et Entretien de moteurs d’aéronefs de LM, une entreprise de Lockheed Martin Canada, spécialisée dans la réparation de moteurs d’avion de compagnies aériennes commerciales.<br><br>\
								Offert à l’École secondaire Louis-Riel.<br><br>\
								Durant le 1er cycle du secondaire, la science et la technologie, les mathématiques et l’anglais occuperont une place importante. L’environnement technologique sera aussi privilégié. En partenariat avec Montréal Relève, un organisme expert en préparation de la relève, les élèves de la 1re à la 5e secondaire auront accès à diverses activités d’exploration. Des visites en entreprise, du mentorat, des stages et des découvertes de secteurs seront offerts au cours de leur formation.<br><br>\
								L’élève terminera ses études avec deux diplômes, soit son diplôme d’études secondaires (DES) et un diplôme d’études professionnelles (DEP) en Assemblage et montage mécanique en aérospatiale de l’École des métiers de l’aérospatiale de Montréal (ÉMAM).<br><br>",
				"activite": "",
				"lien":  "http://www.louis-riel.csdm.ca/programmes/aero2" },			
			{"id": 3, "titre": "Cosmodôme", "graphOpen": "NAN",
				"mission": "L’objectif du Cosmodôme est de stimuler l’intérêt des jeunes et des moins jeunes, d’ici et d’ailleurs, aux sciences de l’espace, à la culture scientifique et aux carrières liées au monde de l’astronautique.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d’expositions et de missions virtuelles :</span><br><br>\
							\u27E9 La planète rouge<br>\
							\u27E9 Aux frontières du Cosmos<br>\
							\u27E9 Le rêve impossible<br>\
							\u27E9 Camp spatial",
				"lien":  "http://www.cosmodome.org" },
							
			{"id": 4, "titre": "Centre des sciences de\nMontréal", "graphOpen": "NAN",
				"mission": "Institution entièrement dédiée à la science et à la technologie, le Centre des Sciences de Montréal se démarque par son approche interactive accessible à tous et par sa mise en valeur de l’innovation et des gens d’ici dans un cadre à la fois éducatif et ludique. Le Centre des sciences de Montréal a pour mandat d’aider les visiteurs de tous âges à découvrir, à mieux comprendre et à s’approprier la science et la technologie pour bâtir leur avenir.<br><br>",
				"activite": "",
				"lien":  "http://www.centredessciencesdemontreal.com" },
				
			{"id": 5, "titre": "Cadets de l'Air", "graphOpen": "NAN",
				"mission": "Le comité provincial de la Ligue des cadets de l’Air du Canada - Québec et Vallée de l’Outaouais (CPQVO) - est un organisme civil de bienfaisance, fondé sur l’engagement bénévole dirigé. Il a comme mission d’apporter aide, soutien et conseil au programme des cadets de l’Air et d’agir à titre de porte-parole au nom de la Ligue. De plus, le comité souhaite stimuler l’intérêt des jeunes âgées de 12 à 18 ans envers le domaine de l’aviation et de l’aérospatiale, tout en faisant la promotion des bienfaits d’une vie active et saine. Nous croyons fermement contribuer au développement de citoyens responsables qui participeront activement aux projets futurs dans leur communauté.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de programmes éducatifs :</span><br><br>\
							\u27E9 Pilotage<br>\
							\u27E9 Exercice militaire d’escadron<br>\
							\u27E9 Visite d’installation aéronautique<br>\
							\u27E9 Bourses d’études",
				"lien":  "http://www.aircadetleague.com/fr" },
				
			{"id": 6, "titre": "Expo-sciences", "graphOpen": "NAN",
				"mission": "Les Expo-sciences sont des compétitions scientifiques ouvertes aux jeunes de 6 à 20 ans organisées par le Réseau Technoscience, qui comprend les neuf organismes régionaux membres ainsi que l’Alliance pour l’enseignement de la science et des technologies (AEST).<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d’activités :</span><br><br>\
							\u27E9 Finales régionales des Expo-sciences<br>\
							\u27E9 Montreal Regional Science and Technology Fair<br>\
							\u27E9 La Super Expo-sciences Hydro-Québec (finale québécoise)<br>\
							\u27E9 Des projets particuliers aux différentes régions sont aussi mis sur pied à l’échelle du Québec",
				"lien":  "http://www.exposciences.qc.ca" },
							
			{"id": 7, "titre": "Robotique FIRST Québec", "graphOpen": "NAN",
				"mission": "Favoriser l’Inspiration et la Reconnaissance des Sciences et de la Technologie auprès des jeunes du Québec, en les engageant dans un programme innovant de mentorat en robotique qui s’appuie sur l’expertise d’ingénieurs, d’universitaires et d’autres membres de la communauté, tout en promouvant un modèle de vie équilibré et enrichissant, et en développant des compétences et aptitudes incontournables telles la confiance en soi, la communication, le travail d’équipe, le professionnalisme et le leadership.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d’activités offertes :</span><br><br>\
							\u27E9 Ligue Junior LEGO FIRST 6-10 ans<br>\
							\u27E9 Ligue LEGO FIRST 9 -14 ans<br>\
							\u27E9 Compétition de Robotique FIRST 14-18 ans<br>\
							\u27E9 Festival de Robotique",
				"lien":  "http://www.robotiquefirstquebec.org" },
							
			{"id": 8, "titre": "Réseau Technoscience", "graphOpen": "NAN",
				"mission": "Le Réseau Technoscience et ses organismes régionaux sont présents partout au Québec afin de promouvoir le goût des sciences et des technologies chez les jeunes Québécois de 4 à 20 ans. Leurs programmes et leurs activités encouragent l’émergence d’une relève scientifique tout en soutenant l’enseignement des sciences et des technologies par une approche concrète.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de programmes offerts :</span><br><br>\
							\u27E9 Expo-sciences<br>\
							\u27E9 Défis technologiques<br>\
							\u27E9 Club des Débrouillards<br>\
							\u27E9 Les Innovateurs à l’école<br>\
							\u27E9 Diffusion de trousses et animations pédagogiques en science pour le primaire et le secondaire.",
				"lien":  "http://www.technoscience.ca/" },
							
			{"id": 9, "titre": "Fusion Jeunesse", "graphOpen": "NAN",
				"mission": "La mission de Fusion Jeunesse consiste à contrer le décrochage scolaire en créant des liens continus entre le système scolaire et la communauté, tout en implantant des projets pédagogiques, pratiques et innovants destinés aux jeunes à risque afin de contribuer à leur instruction, leur socialisation et leur qualification.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de projets jeunesse :</span><br><br>\
							\u27E9 Robotique et Festival de Robotique<br>\
							\u27E9 Entrepreunariat<br>\
							\u27E9 Sciences et Technologies<br>\
							\u27E9 Leadership ",
				"lien":  "http://www.fusionjeunesse.org" },
					  
			{"id": -1, "titre": "Accueil", "graphOpen": "graphRoot"}

	  ],
	  "links": [
			{"source": 0, "target": 1},
			{"source": 0, "target": 2},
			{"source": 0, "target": 3},
			{"source": 0, "target": 4},
			{"source": 0, "target": 5},
			{"source": 0, "target": 6},
			{"source": 0, "target": 7},
			{"source": 0, "target": 8},
			{"source": 0, "target": 9}
	  ]
  }
};

////////////////////Noeud Formation continue et perfectionnement///////////////////////
graphFCEP = function () { return {
  "nodes": [
		{"id": 0, "titre": "Formation continue\net perfectionnement", "logo": "NAN", "graphOpen": "NAN"},

		{"id": 1, "titre": "Cégep André-Laurendeau", "graphOpen": "NAN",
				"mission": "Engagé dans la pleine réussite des étudiants et partenaire de sa région, le Cégep André-Laurendeau a pour mission de « contribuer à la formation d’une personne qualifiée, responsable et engagée tout en participant activement à la vie de la communauté ».<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Formations offertes :</span><br><br>\
							\u27E9 Gestion de la chaîne d’approvisionnement et logistique<br>\
							\u27E9 Techniques de la logistique du transport<br>\
							\u27E9 Technologie de l’électronique industrielle",
				"lien":  "http://www.claurendeau.qc.ca" },
						
		{"id": 2, "titre": "Centre de métallurgie du\nQuébec (CMQ) du Cégep\nde Trois-Rivières", "graphOpen": "NAN",
				"mission": "Créé en 1985, le Centre de métallurgie du Québec (CMQ) est un centre collégial de transfert de technologies intégré au Cégep de Trois-Rivières qui vise à soutenir le développement technologique des entreprises manufacturières œuvrant dans le secteur métallurgique. Le CMQ est pourvu d’un laboratoire de caractérisation des matériaux à la fine pointe de la technologie, d’une usine pilote avec des équipements uniques au Québec et au Canada et d’un centre de formation et d’examens en essais non destructifs.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de formations dispensées :</span><br><br>\
							\u27E9 Essais non destructifs (END)<br>\
							\u27E9 Désignation des métaux et alliages<br>\
							\u27E9 Inspection visuelle, niveau 1<br>\
							\u27E9 Introduction au soudage robotisé<br>\
							\u27E9 Le grenaillage<br>\
							\u27E9 L’aluminium, bien le connaître<br>\
							\u27E9 Métallurgie 101<br>\
							\u27E9 Métallurgie de l’aluminium<br>\
							\u27E9 Placage<br>\
							\u27E9 Soudabilité de l’aluminium<br>\
							\u27E9 Traitements thermiques",
				"lien":  "http://www.cmqtr.qc.ca" },
						
		{"id": 3, "titre": "Collège de Bois-de-Boulogne", "graphOpen": "NAN",
				"mission": "Le Collège de Bois-de-Boulogne offre à tous ses étudiants un milieu d’apprentissage innovateur, stimulant et exigeant, qui favorise la réussite et le développement intégral de la personne, en vue de son engagement dans la société.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de formations dispensées :</span><br><br>\
							\u27E9 OHRACIO Aéro, reconnaissance des acquis et optimisation des compétences des gestionnaires de l’industrie aéronautique<br>\
							\u27E9 ApproVision, reconnaissance des acquis et optimisation des compétences pour la gestion de l’approvisionnement",
				"lien":  "http://www.bdeb.qc.ca" },
						
		{"id": 4, "titre": "AéroFormation", "graphOpen": "graphAéroFormation"},
						
		{"id": 5, "titre": "Carrefour Perfectionnement\nPolytechnique Montréal\n(CPPM)", "graphOpen": "NAN",
					"mission": "Depuis 1954, la formation continue de Polytechnique Montréal se voue au perfectionnement professionnel des ingénieurs et technologues grâce au Carrefour Perfectionnement Polytechnique Montréal (CPPM), acteur majeur au Québec de la formation en génie des professionnels en exercice.<br><br>",
					"activite": "<span style=\"font-weight: bold;\">Formations :</span><br><br>\
								\u27E9 Formations en entreprise, sur mesure et adaptées selon les besoins et les réalités des entreprises en aérospatiale et en aéronautique\
								<br><br><span style=\"font-weight: bold;\">Perfectionnement :</span><br><br>\
								\u27E9 Certificat de perfectionnement spécialisé en aéronautique<br>\
								\u27E9 Certificat de perfectionnement en ingénierie des diplômés en génie de l’étranger (préparation de l’admission à l’OIQ)",
					"lien":  "http://www.perfectionnement.polymtl.ca" },
		
		{"id": 6, "titre": "Centre québécois de\nformation aéronautique\n(CQFA)", "graphOpen": "NAN",
				"mission": "Le CQFA, par le biais de son programme de formation continue, s’applique à maintenir les compétences des professionnels de l’aviation, tant au niveau de l’aviation civile que chez les exploitants aériens, les aéroports, jusqu’aux pilotes.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de formations offertes :</span><br><br>\
							\u27E9 Pilote vérificateur agréé, gestion des ressources du poste de pilotage, entrainement en vol de l’équipage, formation de formateurs, évitement de CFIT, vol à haute altitude, gestion des menaces et des erreurs, GRPP, procédures MNPS/RVSM, pilotage professionnel de drones, fonctionnaires de l’aviation civile, survie en régions éloignées, extraction d’aéronef submergé, etc.\
							<br><br><span style=\"font-weight: bold;\">Exemples de services offerts aux entreprises :</span><br><br>\
							\u27E9 Formations sur mesure adaptée aux besoins des entreprises<br>\
							\u27E9 Expertise dans le soutien à l’entreprise en ce qui concerne le développement de la formation, l’aide pédagogique et le développement d’outils pédagogiques<br>\
							\u27E9 Sélection du personnel (pilotes, répartiteurs, contrôleurs de la circulation aérienne)",
				"lien":  "http://www.cqfa.ca" },
										
		{"id": 7, "titre": "Centre de formation\nen transport de\nCharlesbourg (CFTC)", "graphOpen": "NAN",
				"mission": "Le Centre de formation en transport de Charlebourg (CFTC) de la Commission scolaire des Premières-Seigneuries s’est donné pour mission de former et de qualifier une main-d’œuvre professionnelle qui répond aux besoins de l’industrie du transport.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Formation aérospatiale donnée :</span><br><br>\
							\u27E9 Régulation de vol (DEP)\
							<br><br><span style=\"font-weight: bold;\">Formation continue :</span><br><br>\
							\u27E9 Formation sur mesure, individualisée, de groupe, en ligne.",
				"lien":  "http://www.cftc.qc.ca" },
				
		{"id": 8, "titre": "Centre de développement des\ncomposites du Québec (CDCQ)\ndu Cégep de Saint-Jérôme", "graphOpen": "NAN",
				"mission": "Le Centre de développement des composites du Québec (CDCQ) aide les entreprises dans la chaîne de valeur des composites avec des services de recherche appliquée, d’aide technique et de diffusion de l’information, leur permettant d'améliorer la qualité et la performance de leurs produits.<br><br>\ Pour la réalisation de projets, le centre bénéficie d'un atelier multifonctionnel avec des équipements couvrant la plupart des procédés industriels. Un laboratoire d’essais de caractérisation des matériaux à la fine pointe de la technologie et détenant l’accréditation ISO 17025, complète l’offre de service.<br><br>\ Le CDCQ est affilié au Cégep de Saint-Jérôme (https://www.cstj.qc.ca). Ensemble avec le service de Formation continue, Service aux entreprises et International (https://fcsei.cstj.qc.ca), ils offrent des services de formation sur mesure à l’industrie en plus d’assurer la formation de techniciens en composites, notamment dans le secteur aéronautique.<br><br>\ Les experts du CDCQ, ingénieurs et techniciens, ont les compétences et l'expertise pour fournir des solutions innovantes aux entrepreneurs afin qu'ils puissent améliorer leurs compétences et prospérer dans un environnement concurrentiel ici, au Québec, au Canada et ailleurs dans le monde. Le centre offre une gamme de services pour exploiter le plein potentiel des nouvelles technologies avec pour objectif ultime de transférer la technologie à l’industrie tout en leur cédant la propriété intellectuelle.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de services offerts :</span><br><br>\
							\u27E9 Recherche sur les matériaux, procédés ou équipements<br>\
							\u27E9 Recherche de solutions en développement durable (recyclage et valorisation des composites)<br>\
							\u27E9 Développement et démarrage de procédés<br>\
							\u27E9 Essais de moulage, mise en forme et prototypage avec imprimante 3D<br>\
							\u27E9 Caractérisation de matériaux ou de produits (ISO 17025)<br>\
							\u27E9 Formation en matériaux composites et aéronautique (sur mesure en entreprises)",
				"lien":  "http://www.cdcq.qc.ca" },
						
		{"id": 9, "titre": "Centre d'excellence sur\nles drones (CED)", "graphOpen": "NAN",
				"mission": "Le Centre d’excellence sur les drones est un organisme à but non lucratif composé de membres et partenaires qui œuvrent à développer, à gérer et à promouvoir une gamme de services, d’expertises et de compétences liées au secteur des drones civils et commerciaux, tant au niveau national qu’international.<br><br>\
								Multiples formations liées au pilotage, à la maintenance ou au développement des systèmes de drones.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de formations en ligne :</span><br><br>\
							\u27E9 Le cadre règlementaire des drones au Canada<br>\
							\u27E9 Gestion des menaces et des erreurs en opération de drones<br>\
							\u27E9 Règlementation aérienne des drones légers",
				"lien":  "http://www.cedalma.com" },
				
		{"id": 10, "titre": "Centres de formation dans\nles entreprises", "graphOpen": "NAN",
				"mission": " ",
				"activite": "<span style=\"font-weight: bold;\">Exemples d’entreprises qui ont un centre de formation à l’interne :</span><br><br>\
							\u27E9 Bombardier<br>\
							\u27E9 CAE<br>\
							\u27E9 Pratt & Whitney Canada<br>\
							\u27E9 Autres",
				"lien":  "" },
						
		{"id": 11, "titre": "Centre du savoir sur mesure\nde l'UQAC (CÉSAM)", "graphOpen": "NAN",
				"mission": "Le Centre du savoir sur mesure (CESAM) de l’Université du Québec à Chicoutimi offre un accompagnement sur mesure. En proposant une approche pédagogique personnalisée et en partageant son savoir et ses experts, le CESAM rend la formation continue universitaire accessible, adaptée et applicable.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Des programmes s’adressant aux professionnels et gestionnaires de toutes les sphères d’activité, notamment :</span><br><br>\
							\u27E9 Gestion du transport aérien<br>\
							\u27E9 Gestion des organisations et des personnes<br>\
							\u27E9 Sécurité civile<br>\
							\u27E9 Développement durable<br>\
							\u27E9 Amélioration continue<br>\
							\u27E9 Innovation<br>\
							\u27E9 Administration<br>\
							\u27E9 Management et gestion de projet<br>\
							\u27E9 Etc.",
				"lien":  "http://cesam.uqac.ca/" },
						
						
		{"id": -1, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6},
		{"source": 0, "target": 7},
		{"source": 0, "target": 8},
		{"source": 0, "target": 9},
		{"source": 0, "target": 10},
		{"source": 0, "target": 11}
	  ]
  }
};

////////////////////Sous-Noeud AéroFormation///////////////////////
graphAéroFormation = function () { return {
  "nodes": [
		{"id": 0, "titre": "AéroFormation", "logo": "NAN","colorText": "Black", "colorBack": "#4678fb", "graphOpen": "NAN",
				"mission": "AéroFormation est un point de ralliement pour la formation continue en aérospatiale. Lancé en décembre 2013, il s’agit d’un partenariat entre l’École des métiers de l’aérospatiale de Montréal (ÉMAM), l’École nationale d’aérotechnique (ÉNA), le Centre aérospatial de perfectionnement (École de technologie supérieure et Université McGill), en collaboration avec Aéro Montréal, Emploi-Québec de l’Île-de-Montréal et le Comité sectoriel de main-d’œuvre en aérospatiale (CAMAQ).<br><br>",
				"activite": "<span style=\"font-weight: bold;\">AéroFormation propose :</span><br><br>\
							\u27E9 Des formations continues publiques et sur mesure, qui répondent aux besoins particuliers des ouvriers spécialisés, des techniciens, des ingénieurs et des professionnels du secteur aérospatial<br>\
							\u27E9 Un portail Web permettant de rapidement identifier le fournisseur de formation qu’il vous faut, que celui-ci soit de niveau professionnel, collégial ou universitaire<br>\
							\u27E9 Le développement de formations novatrices qui tirent profit de toutes les expertises et équipements de pointe rendus accessibles par cette collaboration<br>\
							\u27E9 Des points de service à Montréal et sur la Rive-Sud, à Mirabel et Trois-Rivières<br>\
							\u27E9 Un partage des meilleures pratiques pour que le Québec demeure à l’avant-plan en matière de formation de la main-d’œuvre aérospatiale.\
							<br><br><span style=\"font-weight: bold;\">Exemples de services offerts :</span><br><br>\
							\u27E9 Excellence opérationnelle<br>\
							\u27E9 Facteurs humains<br>\
							\u27E9 Gestion de la chaîne d’approvisionnement<br>\
							\u27E9 Familiarisation à l’aéronautique<br>\
							\u27E9 Meilleures pratiques en gestion aérospatiale<br>\
							\u27E9 Réglementation et certification aéronautique<br>\
							\u27E9 Santé-sécurité<br>\
							\u27E9 Fabrication additive, robotique et matériaux avancés<br>\
							\u27E9 Industrie 4.0 : l’entreprise et l’usine intelligente et numérique<br>\
							\u27E9 Qualité (sensibilisation à la qualité, optimisation département d’inspection, contrôle de la qualité, audit qualité, auditeur interne, inspection, etc.)<br>\
							\u27E9 Métrologie (tolérancement géométrique, instruments de mesure, lecture de plans, programmation CMM, inspection dimensionnelle)<br>\
							\u27E9 Modélisation et dessins CATIA<br>\
							\u27E9 Montage de structure et montage mécanique<br>\
							\u27E9 Usinage conventionnel et sur machines-outils à commande numérique<br>\
							\u27E9 Systèmes (électricité de base, sertissage, brasage tendre), etc.",
				"lien":  "http://www.aeromontreal.ca/aeroformation.html" },
	
				{"id": 1, "titre": "Service aux entreprises\nde l'ÉMAM", "graphOpen": "NAN",
				"mission": "Le Service aux entreprises de l’ÉMAM offre des formations sur mesure à temps plein ou temps partiel en français ou en anglais, le jour, le soir ou la fin de semaine dans l’École des métiers de l’aérospatiale de Montréal ou directement en entreprise.<br><br>\
						Avec des programmes développés en partenariat avec l’industrie, des installations modernes et des équipements à la fine pointe des nouvelles technologies, les formations sur mesure en aérospatiale propulseront votre main d’œuvre à un niveau supérieur d’efficacité et de productivité !<br><br>\ Mission : <br>\
							\u27E9 Participer au développement de la main-d’œuvre<br>\
							\u27E9 Former des travailleurs compétents et maintenir leurs compétences à jour<br>\
							\u27E9 Améliorer la performance des organisations<br>\
							\u27E9 Former pour motiver et conserver les employés<br>\
							\u27E9 Soutenir les changements organisationnels<br>\
							<br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de réalisations pour les entreprises :</span><br><br>\
							\u27E9 Formation sur mesure<br>\
							\u27E9 Développement de test de compétence : embauche, sélection, promotion, etc. <br>\
							\u27E9 Développement de documents de formation<br>\
							\u27E9 Accès à des équipements spécialisés<br>\
							\u27E9 Reconnaissance des acquis et des compétences (RAC) <br>\
							\u27E9 Formation pour les travailleurs en emploi<br><br>\
							Général & ESS<br>\
							\u27E9 Lecture de plan<br>\
							\u27E9 Procédure et documentation<br>\
							\u27E9 Facteurs humains<br>\
							\u27E9 Équipement de protection individuelle<br>\
							\u27E9 Chariots élévateurs, plateforme élévatrice & nacelle<br>\
							\u27E9 Pont roulant<br>\
							\u27E9 Protection des chutes<br>\
							\u27E9 Cadenassage<br>\
							\u27E9 SIMDUT en ligne<br><br>\
							Montage de structure<br>\
							\u27E9 Usinage manuel<br>\
							\u27E9 Installation de rivets solides & aveugles<br>\
							\u27E9 Installation d’attaches structurales (hi-lite)<br>\
							\u27E9 Couple de serrage et système de blocage<br>\
							\u27E9 Installation de roulements et de coussinets<br>\
							\u27E9 Mise à la masse<br>\
							\u27E9 Utilisation de gabarits<br>\
							\u27E9 Assemblage, inspection et réparation de composants<br><br>\
							Montage mécanique<br>\
							\u27E9 Usinage manuel<br>\
							\u27E9 Couple de serrage et système de blocage<br>\
							\u27E9 Installation de roulements et de coussinets<br>\
							\u27E9 Mise à la masse<br>\
							\u27E9 Équilibrage et balancement<br>\
							\u27E9 Systèmes primaire et secondaire (moteur)<br>\
							\u27E9 Boîte d’engrenage<br>\
							\u27E9 Hydraulique et pneumatique<br>\
							\u27E9 Assemblage, inspection et réparation de composants<br><br>\
							Assemblage de systèmes électriques et électroniques<br>\
							\u27E9 Assemblage, inspection et réparation de composants électroniques et/ou électriques (bornes et terminaux, trous traversants, montage en surface et entretien d’appareils) <br>\
							\u27E9 Électricité de base<br>\
							\u27E9 Sertissage, fabrication et installation de faisceaux dans une structure<br>\
							\u27E9 Procédés de brasage tendre de cartes à circuits imprimés<br>\
							\u27E9 Normes d’acceptabilité en assemblage de fils câbles et harnais électriques<br>\
							\u27E9 Mise à la masse, batteries d’accumulateurs acide-plomb et NI/CAD<br>\
							\u27E9 Formations et certifications IPC : IPC J-STD-001, IPC-7711/7721, IPC/WHMA-A-620, IPC-A-610<br><br>\
							Techniques d’usinage<br>\
							\u27E9 Mastercam<br>\
							\u27E9 Dessin de croquis<br>\
							\u27E9 Mathématiques liées à l’usinage (conventionnel commande numérique) <br>\
							\u27E9 Programmation manuelle de machine<br>\
							\u27E9 Inspection CMM<br>\
							\u27E9 Tolérances géométriques<br>\
							\u27E9 Traitement thermique<br>\
							\u27E9 Rectification plane & cylindrique<br>\
							\u27E9 Usinage (4 axes)<br><br>\
							Tôlerie de précision<br>\
							\u27E9 Mathématiques liées à la tôlerie<br>\
							\u27E9 Production de pièces pliées, roulées et embouties<br>\
							\u27E9 Programmation AP100 US (Amada)<br>\
							\u27E9 Poinçonneuse à commande numérique",
				"lien":  "http://ecole-metiers-aerospatiale.csdm.ca/services/service-entreprises/" },
				
		{"id": 2, "titre": "Centre aérospatial de\nperfectionnement (CAPE)", "graphOpen": "NAN",
				"mission": "L’Université McGill et l’École de technologie supérieure (ÉTS) se sont associées pour offrir un programme conjoint de perfectionnement aux ingénieurs et aux professionnels du domaine aérospatial. Le CAPE réunit les meilleurs spécialistes et praticiens provenant de l’industrie et du monde académique pour offrir des cours, ateliers et séminaires traitant des nouvelles technologies et des stratégies de gestion qui influencent l’évolution du secteur aérospatial.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de formations données :</span><br><br>\
 							\u27E9 L’Aérospatiale 4.0 (Industrie 4.0)<br>\
							\u27E9 Matériaux et fabrication avancée en aérospatiale : robotique, composites, matériaux métalliques, DFX, fabrication intelligente, etc.<br>\
 							\u27E9 Meilleures pratiques de gestion pour l’industrie aérospatiale<br>\
 							\u27E9 Certification des aéronefs et systèmes<br>\
 							\u27E9 Gestion de la chaîne d’approvisionnement aérospatiale",
				"lien":  "http://aeroets.etsmtl.ca" },
						
		{"id": 3, "titre": "Service aux entreprises de\nl'ÉNA", "graphOpen": "NAN",
				"mission": "La direction de la formation continue et des services aux entreprises (DFCSAE) de l’ÉNA offre aux entreprises en aéronautique des formations adaptées aux changements organisationnels et technologiques de l’industrie. Elle a développé un éventail de formations et des services-conseils adaptés aux besoins spécifiques du marché du travail. Elle a su au fil des années se bâtir une notoriété en mettant de l’avant son expertise avec un souci constant d’efficacité. Reconnue pour la qualité de ses formations, la  DFCSAE vient soutenir la performance des entreprises.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Services :</span><br>\
 							\u27E9 Analyse des besoins de formation<br>\
							\u27E9 Élaboration et prestation de formations sur mesure<br>\
							\u27E9 Développement de compétences<br>\
							\u27E9 Test de sélection du personnel technique<br><br>\
							<span style=\"font-weight: bold;\">Expertises : </span><br>\
 							\u27E9 Gestion<br>\
 							\u27E9 Inspection et qualité<br>\
 							\u27E9 Peinture et structure<br>\
 							\u27E9 Composite<br>\
 							\u27E9 Métrologie<br>\
 							\u27E9 Moteurs<br>\
 							\u27E9 Systèmes d'aéronefs<br>\
 							\u27E9 CATIA<br>\
 							\u27E9 Agent de méthode<br>\
 							\u27E9 Réglementation - Transports Canada",
				"lien":  "http://www.cegepmontpetit.ca/ena/entreprises" },
				
		{"id": -1, "titre": "Formation continue\net perfectionnement", "logo": "NAN", "graphOpen": "graphFCEP"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3}
	  ]
  }
};

//////////////////////Noeud Formation par la recherche/////////////////////
graphFPLR = function () { return {
  "nodes": [
		{"id": 0, "titre": "Formation par\nla recherche", "logo": "NAN", "graphOpen": "NAN"},
						
		{"id": 1, "titre": "Consortium en aérospatiale\npour la recherche et\nl’innovation au Canada\n(CARIC)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le Consortium en aérospatiale pour la recherche et l’innovation au Canada (CARIC) est un organisme créé grâce au soutien financier du Gouvernement du Canada. Sa mission est de promouvoir la collaboration au sein de la communauté aérospatiale canadienne et de soutenir des initiatives favorisant la recherche et le développement.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de programmes et projets :</span><br><br>\
 							\u27E9 Exploration de la technologie : Dirigés par l’industrie, les projets visent à explorer le potentiel de technologies émergentes dans le but de générer de nouvelles idées d’applications ou de valider des éléments technologiques dans le cadre de projets de recherche appliquée<br>\
 							\u27E9 Maturation de la technologie : Dirigés par l’industrie, les projets visent à valider ou à démontrer le potentiel d’une nouvelle technologie à résoudre une problématique particulière pour le secteur aérospatial<br>\
 							\u27E9 Aero-Connect : Dirigés par l’industrie, les projets visent à développer de nouvelles relations entre l’industrie aérospatiale et le milieu académique par la mise sur pied de nouvelles collaborations de recherche. Aero-Connect bonifie le Programme de Subventions d’engagement partenarial (SEP ou Engage) du Conseil de recherches en sciences naturelles et en génie du Canada (CRSNG)",
				"lien":  "http://www.caric.aero" },
						
		{"id": 2, "titre": "Pôle de recherche et\nd'innovation en matériaux\navancés au Québec\n(PRIMA QUÉBEC)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "PRIMA QUÉBEC agit comme un pôle central amorçant et animant des activités de concertation et de maillage et finançant des initiatives favorisant la formation, le transfert de connaissance et le développement d’applications en lien avec les matériaux avancés.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemple de ressources offertes :</span><br><br>\
 							\u27E9 Diagnostic des besoins en innovation<br>\
 							\u27E9 Soutien au développement de projets d’innovation<br>\
 							\u27E9 Outils de financement, recherche collaborative",
				"lien":  "http://www.prima.ca/fr" },
						
		{"id": 3, "titre": "Centre facilitant la\nrecherche et l'innovation\ndans les organisations\n(CEFRIO)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le CEFRIO est un organisme de recherche et d’innovation qui accompagne les entreprises et les organisations dans la transformation de leurs pratiques par l'adoption du numérique. Il recherche, expérimente, mesure et fait connaître les usages du numérique dans tous les volets de la société. Son action s'appuie sur une équipe expérimentée, un réseau de plus de 90 chercheurs associés et invités ainsi que l'engagement de plus de 200 membres.<br><br>",
				"activite": "",
				"lien":  "http://www.cefrio.qc.ca" },
						
		{"id": 4, "titre": "Fonds de recherche du\nQuébec Nature et\ntechnologies (FRQNT) ", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le FRQNT a pour mission de soutenir financièrement et promouvoir la recherche universitaire et collégiale, la formation de personnel hautement qualifié, la diffusion de connaissances dans les domaines des sciences naturelles, des sciences mathématiques et du génie et ainsi contribuer au développement scientifique, à l’innovation et au développement durable du Québec.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Bourses et stages aux étudiants des établissements de l’enseignement supérieur<br>\
 							\u27E9 Subventions de soutien de carrières en recherche pour les chercheurs universitaires et de collège<br>\
							\u27E9 Subventions de recherche : équipes, projets en partenariat et collaborations internationales<br>\
 							\u27E9 Subventions de regroupements stratégiques",
				"lien":  "http://www.frqnt.gouv.qc.ca" },
						
		{"id": 5, "titre": "Infrastructure en recherche\net développement du\nQuébec (IRDQ)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "L’objectif de l’IRDQ est de promouvoir de manière concertée les équipements de pointe et les expertises du Québec à l’ensemble de la communauté académique et industrielle, afin d’en faciliter leur utilisation pour le développement de nouvelles applications. Tous les équipements proposés sont associés à une expertise qui pourra vous aider dans le développement de vos projets.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Passeport Innovation, aide au financement de projets de recherche<br>\
 							\u27E9 Recueil des besoins<br>\
 							\u27E9 Recherche de partenaires<br>\
 							\u27E9 Montage de dossiers de financement",
				"lien":  "http://www.irdq.ca" },
						
		{"id": 6, "titre": "Centre de recherche\nindustrielle du Québec (CRIQ)", "graphOpen": "NAN",
				"mission": "Le CRIQ a pour mission de contribuer à la compétitivité des secteurs industriels québécois et à la croissance des organismes en soutenant l’innovation, la productivité et les exportations.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
							\u27E9 Services intégrés en fabrication additive (impression 3D; aide à la décision et à la conception; optimisation topologique)<br>\
							\u27E9 Services en transformation numérique des entreprises (Industrie 4.0)<br>\
							\u27E9 Vaste gamme d’essais reliés à la norme DO-160<br>\
							\u27E9 Réseau Québec-3D<br>\
 							\u27E9 Diagnostic de productivité<br>\
 							\u27E9 Conception d’équipement sur mesure<br>\
 							\u27E9 Technologie de contrôle de la qualité",
				"lien":  "http://www.criq.qc.ca/fr" },
						
		{"id": 7, "titre": "Consortium de recherche et\nd'innovation en aérospatiale\nau Québec\n(CRIAQ)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le CRIAQ développe et stimule la collaboration entre les spécialistes industriels et les chercheurs dans le cadre de projets de recherche précompétitive en aérospatiale. Le CRIAQ finance les étudiants via ses projets par des stages en laboratoires.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de projets de recherche :</span><br><br>\
 							\u27E9 Réduction de bruit dans les cabines d’avions et d’hélicoptères<br>\
 							\u27E9 Banc d’essai dynamique pour systèmes de gestion de vol<br>\
 							\u27E9 Ingénierie « lean » en aéronautique<br>\
 							\u27E9 Technologies de fabrication additive pour les composants<br>\
 							\u27E9 Développement d’éléments structuraux à faible coût en composites thermoplastiques pour l’aérospatiale<br>\
 							\u27E9 Modélisation de l’impact sur les structures d’aéronefs en matériaux composites<br>\
 							\u27E9 Optimisation des trajectoires aériennes",
				"lien":  "http://www.criaq.aero" },
						
		{"id": 8, "titre": "Systèmes aéronautiques\nd'avant-garde pour\nl'environnement (SA²GE)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le Regroupement pour le développement de l’avion plus écologique est un organisme à but non lucratif qui a pour but l’administration du projet mobilisateur de l’avion plus écologique renommé SA²GE pour Systèmes Aéronautiques d’Avant-Garde pour l’Environnement. Comme son nom l’indique, SA²GE vise le développement de pièces et systèmes plus respectueux de l’environnement, dans le cadre de la lutte contre les changements climatiques et des nouvelles réglementations environnementales.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de sous-projets de recherche :</span><br><br>\
 							\u27E9 Fuselage avancé respectueux de l’environnements<br>\
 							\u27E9 Solutions de formation synthétique et virtuelle pour réduire les émissions de gaz à effet de serre<br>\
 							\u27E9 Avionique modulaire intégrée pour éconavigation<br>\
 							\u27E9 Modules photoniques compacts pour systèmes de communication et de navigation aéroportés<br>\
 							\u27E9 Contrôleur critique intégré multi-application",
				"lien":  "http://www.sa2ge.org" },
						
		{"id": 9, "titre": "QuébecInnove", "graphOpen": "NAN",
				"mission": "Reconnu par le gouvernement du Québec, QuébecInnove est un OBNL constitué en réseau qui regroupe des organismes actifs dans le domaine de la recherche et de l’innovation, afin de mieux répondre aux besoins des organisations et des entreprises, en particulier des PME.<br><br>QuébecInnove mobilise et fédère les forces vives de l’écosystème québécois d’innovation de façon à mieux répondre aux besoins des entreprises et des organisations à soutenir le développement d’un Québec plus innovant. Cet organisme permet ainsi de mieux répondre aux défis sociétaux en lien avec le développement d’innovations, le transfert de connaissances et la commercialisation des innovations, tant sociales que technologiques.<br><br>",
				"activite": "",
				"lien":  "http://www.quebecinnove.com" },
						
		{"id": 10, "titre": "Conseil national de\nrecherches Canada (CNRC)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le Conseil national de recherches du Canada (CNRC) est la principale organisation de recherche et de technologie (ORT) du gouvernement du Canada. De concert avec ses clients et partenaires, le CNRC facilite l’innovation, effectue des recherches stratégiques et dispense des services scientifiques et techniques.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Programmes de recherche en aérospatiale (systèmes aériens civils sans pilotes, systèmes de défense aérienne, technologies de développement des produits aéronautiques, etc.)<br>\
 							\u27E9 Services techniques et consultatifs (aérodynamique des véhicules aériens, services de conception et de fabrication, solutions pour la mise au point de nanomatériaux, systèmes d’imagerie hyperspectrale, etc.)<br>\
 							\u27E9 Programme d’aide à la recherche industrielle (PARI)",
				"lien":  "http://www.nrc-cnrc.gc.ca" },
						
		{"id": 11, "titre": "Ministère de l'Économie,\nde la Science et de\nl'Innovation (MESI)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le Ministère a pour mission de soutenir la croissance des entreprises, l’entrepreneuriat, la science, l’innovation ainsi que l’exportation et l’investissement. Il coordonne notamment l’élaboration et la mise en œuvre de la Stratégie québécoise de la recherche et de l’innovation, la Stratégie numérique du Québec et de la Stratégie québécoise de l'aérospatiale.<br><br> Il conseille également le gouvernement en vue de favoriser le développement économique de toutes les régions du Québec, et ce, dans une perspective de création d’emplois, de prospérité économique et de développement durable.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">En matière de développement des compétences, de la relève et des talents, les programmes offerts sont :</span><br><br>\
 							\u27E9 Programme NovaScience<br>\
							\u27E9 Premier emploi en recherche<br>\
							\u27E9 Stages d’innovation en entreprise (en collaboration avec Mitacs via les programmes Accélération, Élévation et Globalink)",
				"lien":  "http://www.economie.gouv.qc.ca" },
						
		{"id": 12, "titre": "Conseil de recherches en\nsciences naturelles et en\ngénie du Canada (CRSNG)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le CRSNG vise à faire du Canada un pays de découvreurs et d’innovateurs, au profit de tous les Canadiens. Il appuie les étudiants universitaires dans leurs études supérieures, encourage et appuie la recherche axée sur la découverte et favorise l’innovation en incitant les entreprises canadiennes à investir dans des projets de recherche d’établissements postsecondaires et à y participer.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Bourses d’études universitaires en recherche, premier et deuxième cycle<br>\
 							\u27E9 Subventions de professeurs-chercheurs industriels<br>\
 							\u27E9 Subventions d’établissement de centres d’accès à la technologie",
				"lien":  "http://www.nserc-crsng.gc.ca" },
						
		{"id": 13, "titre": "MITACS", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Mitacs est un organisme national à but non lucratif qui conçoit et met en œuvre depuis 15 ans des programmes de recherche et de formation au Canada. De concert avec 60 universités, des milliers de compagnies ainsi que les gouvernements (fédéral et provinciaux), il construit des partenariats appuyant l’innovation industrielle et sociale au Canada.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de programmes :</span><br><br>\
 							\u27E9 Programmes Mitacs Accélération : encourage les entreprises à collaborer avec les étudiants des cycles supérieurs et les chercheurs pour relever les défis de l’innovation en milieu de pratique.<br>\
 							\u27E9 Programme Élévation : programme de formation de deux ans au sein duquel les participants (chercheurs postdoctoraux) dirigent ou entreprennent un projet de recherche pertinent pour une entreprise ou un OBNL.",
				"lien":  "http://www.mitacs.ca/fr" },
						
		{"id": 14, "titre": "Centre technologique\nen aérospatiale (CTA)", "graphOpen": "NAN",
				"mission": "Le CTA a comme mandat d’exercer ses activités de recherche appliquée, d’aide technique et d’information dans le domaine de l’aérospatiale. Sa mission est de fournir à ses clients et partenaires, principalement les PME québécoises, des services à valeur ajoutée en termes de soutien à l’innovation et au développement en aérospatiale, leur permettant d’accroître leurs connaissances, leur productivité, leur compétitivité ainsi que la qualité de leurs produits et services. À titre de Centre collégial de transfert de technologie (CCTT), le Centre technologique en aérospatiale (CTA) accompagne les entreprises et les organismes dans l’innovation par le soutien technique, le développement technologique, l’information et la formation. Comme les 45 autres CCTT, dont la responsabilité relève des cégeps, le CTA est un organisme reconnu par le ministère de l’Enseignement supérieur, de la Recherche et de la Science (MESRS). Il fait partie du Réseau Trans-tech.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Services et équipements disponibles :</span><br><br>\
 							\u27E9 Avionique<br>\
 							\u27E9 Composites<br>\
 							\u27E9 Contrôle non destructif<br>\
 							\u27E9 Métrologie<br>\
 							\u27E9 Opérations aériennes<br>\
 							\u27E9 Fabrication métallique et robotisation",
				"lien":  "http://www.aerospatiale.org" },
						
		{"id": 15, "titre": "Groupement Aéronautique de\nRecherche et de Développement\nen eNvironnement (GARDN)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Afin d’augmenter la compétitivité aéronautique canadienne, GARDN soutient financièrement des projets collaboratifs qui pourront réduire l’empreinte environnementale des prochaines générations d’avions, de moteurs et de systèmes avioniques développés au Canada. GARDN accompagne ainsi ses membres du milieu académique et industriel dans la concrétisation de leur idée innovante.<br><br>",
				"activite": "",
				"lien":  "http://gardn.org/fr/" },
				
		{"id": -1, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6},
		{"source": 0, "target": 7},
		{"source": 0, "target": 8},
		{"source": 0, "target": 9},
		{"source": 0, "target": 10},
		{"source": 0, "target": 11},
		{"source": 0, "target": 12},
		{"source": 0, "target": 13},
		{"source": 0, "target": 14},
		{"source": 0, "target": 15}
	  ]
  }
};

//////////////////////Noeud Organismes de soutien//////////////////////
graphODS = function () { return {
  "nodes": [
		{"id": 0, "titre": "Organismes de soutien", "logo": "NAN", "graphOpen": "NAN"},		
		
		{"id": 1, "titre": "International", "graphOpen": "graphInternationalODS"},
		{"id": 2, "titre": "National", "graphOpen": "graphNationalODS"},
		{"id": 3, "titre": "Régional", "graphOpen": "graphRégionalODS"},
		{"id": 4, "titre": "Provincial", "graphOpen": "graphProvincialODS"},
		
		{"id": -1, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4}
	  ]
  }
};

//////////////////////Sous-Noeud International//////////////////////
graphInternationalODS = function () { return {
  "nodes": [
  		{"id": 0, "titre": "International", "logo": "NAN", "graphOpen": "NAN"},
				
		{"id": 1, "titre": "Association internationale\ndu transport aérien (IATA)", "graphOpen": "NAN",
				"mission": "IATA seeks to be the force for value creation and innovation driving a safe, secure and profitable air transport industry that sustainably connects and enriches our world. Its mission is to represent, lead, and serve the airline industry. <br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de services et de programmes :</span><br><br>\
 							\u27E9 Cargo (sécurité, opérations, etc.)<br>\
 							\u27E9 Environnement (carburants alternatifs, etc.)<br>\
 							\u27E9 Opérations et infrastructures (gestion du trafic aérien, opérations au sol, maintenance et ingénierie, etc.)<br>\
 							\u27E9 Distribution aérienne<br>\
 							\u27E9 Groupes de travail (lignes aériennes, aéroports, gestion du trafic, etc.)<br>\
 							\u27E9 Sécurité (en cabine, sur les pistes, etc.)<br>\
 							\u27E9 Passager (programme de transport rapide, etc.)",
				"lien":  "http://www.iata.org" },
				
		{"id": 2, "titre": "Organisation de l'aviation\ncivile internationale (OACI)", "graphOpen": "NAN",
				"mission": "L’Organisation de l’aviation civile internationale est le forum mondial des États en matière d’aviation civile internationale. L’OACI élabore des politiques et des normes, réalise des audits de conformité, des études et analyses, fournit une assistance et renforce la capacité de l’aviation grâce à la coopération des États membres et des parties prenantes.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d'initiatives et de programmes :</span><br><br>\
 							\u27E9 Sécurité (des pistes, gestion de crises, gestion de la fatigue, etc.)<br>\
 							\u27E9 Capacité et efficacité de la navigation aérienne (plan mondial de navigation aérienne, navigation basée sur la performance, etc.)<br>\
 							\u27E9 Sureté et facilitation (politique de sûreté, audit universel de sûreté, etc.)<br>\
 							\u27E9 Développement économique du transport aérien (politique et réglementation du transport, analyses et prévisions économiques, programmes d'infrastructures économiques, etc.)<br>\
 							\u27E9 Protection de l'environnement (bruit des aéronefs, qualité de l'air locale, technologie et normes, etc.)",
				"lien":  "http://www.icao.int" },
						
		{"id": -1, "titre": "Organismes de soutien", "graphOpen": "graphODS"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}

  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2}
	  ]
  }
};

//////////////////////Sous-Noeud National//////////////////////
graphNationalODS = function () { return {
  "nodes": [
  		{"id": 0, "titre": "National", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Women in Aerospace\nCanada (WIA-Canada) ", "graphOpen": "NAN",
				"mission": "Women in Aerospace Canada (WIA-Canada) is a not-for-profit organization dedicated to expanding women’s opportunities for leadership and professional development as well as increasing their visibility in the aerospace community by creating a professional network in Canada and across the globe.<br><br>",
				"activite": "",
				"lien":  "http://www.wia-canada.org" },		
		
		{"id": 2, "titre": "Association du transport\naérien du Canada (ATAC)", "graphOpen": "NAN",
				"mission": "La mission de l'ATAC est de soutenir ses membres dans leur engagement envers une industrie canadienne du transport aérien sécuritaire, durable et de classe mondiale.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d'initiatives :</span><br><br>\
 							\u27E9 Programme de reconnaissance des écoles de formation au pilotage<br>\
 							\u27E9 Projet d'entente Canada-Inde sur les écoles de pilotage<br>\
 							\u27E9 Formation au pilotage international<br>\
 							\u27E9 Partenariat et réduction sur les coûts des formations dispensées par le Conseil canadien de l'aviation et de l'aérospatiale (CCAA)",
				"lien":  "http://www.atac.ca" },		
		
		{"id": 3, "titre": "Canadian Business Aviation\nAssociation (CBAA)", "graphOpen": "NAN",
				"mission": "The CBAA represents and promotes the Canadian business aviation community globally, advocating safety, security and efficiency.<br><br>",
				"activite": "",
				"lien":  "http://www.cbaa-acaa.ca" },		
		
		{"id": 4, "titre": "Conseil canadien de\nl'aviation et de\nl'aérospatiale (CCAA)", "graphOpen": "NAN",
				"mission": "Le Conseil canadien de l'aviation et de l'aérospatiale (CCAA) se voue à assurer que l'industrie canadienne de l'aéronautique et de l'aérospatiale dispose de suffisamment de travailleurs ayant les compétences requises pour subvenir aux besoins de l'industrie. Tous les outils et cours du CCAA visant le perfectionnement sont étroitement liés à des normes professionnelles précises relatives à l'accréditation, ou ils répondent à des exigences réglementaires.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Services offerts (en français et en anglais) :</span><br><br>\
 							Ateliers en ligne :<br>\
							\u27E9 Formation en Facteurs Humains<br>\
 							\u27E9 Formation sur les règlements de l’aviation canadien (CARs)<br>\
 							\u27E9 Formation WHMIS (en anglais seulement)<br>\
 							\u27E9 Formation pour gestionnaire en l’aviation et l’aéronautique<br><br>\
							Ateliers :<br>\
 							\u27E9 Auditeurs/Vérificateurs des systèmes qualité<br>\
 							\u27E9 Gestionnaire de l’assurance qualité<br>\
 							\u27E9 Plans de mesures correctives<br>\
							\u27E9 Autres (http://www.avaerocouncil.ca/en/skill-development-training-products-and-courses/skill-development-training-products-and-courses-0)<br><br>\
		 					Certification & normes professionnelles :<br>\
							Le CCAA est le seul organisme d’accréditation national qui représente la main-d’œuvre de l’industrie de l’aviation et de l’aéronautique. En collaboration avec divers experts en matières spécialisées afin de documenter les tâches et sous-tâches effectuées par les gens de métier dans l’exécution de leurs fonctions, le CCAA a élaboré 29 normes professionnelles (http://www.avaerocouncil.ca/fr/certification/normes-professionnelles). Cette analyse énumère les connaissances requises pour exécuter chacun des métiers. 13 de ces normes sont reconnues par Transports Canada (cf. Avis de navigabilité C009) pour le personnel qui travaillent dans un organisme de maintenance agréé (OMA).",			
		  		"lien":  "http://www.avaerocouncil.ca" },
						
		{"id": -1, "titre": "Organismes de soutien", "graphOpen": "graphODS"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4}
	  ]
  }
};

//////////////////////Sous-Noeud Régional//////////////////////
graphRégionalODS = function () { return {
  "nodes": [
		{"id": 0, "titre": "Régional", "logo": "NAN", "graphOpen": "NAN"},
						
		{"id": 1, "titre": "Montréal International", "graphOpen": "NAN",
				"mission": "Montréal International agit comme moteur économique du Grand Montréal pour attirer de la richesse en provenance de l’étranger tout en accélérant la réussite de ses partenaires et de ses clients.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Soutien stratégique, expertise sectorielle et données économiques pour faciliter vos projets d’affaires<br>\
 							\u27E9 Accompagnement dans les processus d'embauche à l'étranger<br>\
 							\u27E9 Soutien et accompagnement face aux opportunités de financement gouvernementales",
				"lien":  "http://www.montrealinternational.com" },
						
		{"id": 2, "titre": "Emploi Nexus", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Emploi Nexus est un programme de la ville de Montréal qui offre aux entreprises des informations, des outils, du soutien et des références pour le recrutement et le maintien en emploi des professionnels formés à l'étranger.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
							- Rencontres informatives individuelles<br>\
							- Séances de codéveloppement<br>\
							- Formations sur l'embauche et l'intégration à l'emploi<br>\
							- Contacts avec des organismes gouvernementaux offrant des subventions<br>\
							- Activités de réseautage",
				"lien":  "http://www.emploinexus.com" },		
		
		{"id": 3, "titre": "Conseil emploi métropole\n(CEM)", "graphOpen": "NAN",
				"mission": "Le CEM est une table d’analyse, de réflexion et d’action qui met de l’avant l’approche métropolitaine dans la recherche de solutions innovantes aux problématiques du marché du travail de la grande région de Montréal. Plus spécifiquement, ces problématiques touchent l’intégration professionnelle des nouveaux arrivants, l’adéquation entre la formation et l’emploi ainsi que les compétences du futur.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d'outils proposés :</span><br><br>\
 							\u27E9 Diagnostics sectoriels d’adéquation formation-emploi<br>\
 							\u27E9 Outil de recrutement par les médias sociaux<br>\
 							\u27E9 Aide à la gestion de la diversité<br>\
 							\u27E9 Bulletin sur le marché du travail<br>\
 							\u27E9 Enquête sur les besoins de main-d’œuvre",
				"lien":  "http://www.emploi-metropole.org" },		
		
		{"id": 4, "titre": "Instituts Aérospatiaux de\nMontréal (IAM)", "graphOpen": "graphIAM", "symb": ["s"]},
		
		{"id": -1, "titre": "Organismes de soutien", "graphOpen": "graphODS"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4}
	  ]
  }
};

//////////////////////Sous Sous-IAM//////////////////////
graphIAM = function () { return {
  "nodes": [
		{"id": 0, "titre": "Instituts Aérospatiaux de\nMontréal (IAM)", "logo": "NAN", "graphOpen": "NAN", "symb": ["s"],
			"mission": "Instituts Aérospatiaux de Montréal (IAM) est une organisation de l’industrie aérospatiale de Montréal et des universités créé pour répondre aux besoins présents et futurs de l’industrie de personnel hautement qualifié (PHQ) en ingénierie. Chaque université est représentée dans l’IAM par un Institut, par le biais duquel les étudiants peuvent participer à des projets offerts par les entreprises participantes.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d’activités proposées :</span><br><br>\
 							\u27E9 Affichage de stages industriels aux meilleurs étudiants en aérospatiale de 6 universités québécoises : ÉTS, Polytechnique Montréal, McGill, Concordia, Sherbrooke et Laval.",
				"lien":  "www.mai-aero.ca/fr" },
				
		{"id": 1, "titre": "Concordia Institute\nof Aerospace Design\n& Innovation (CIADI)", "graphOpen": "NAN", "symb": ["s"],
				"mission": "Les objectifs du « Concordia Institute of Aerospace Design & Innovation » (CIADI) sont de conscientiser et de fournir un savoir-faire de pointe aux étudiants en génie œuvrant dans la conception aéronautique et l’innovation. <br><br>\
								L’approche du CIADI est pluridisciplinaire par nature et ses efforts se concentrent sur les technologies en constante évolution. <br><br>\
								Le CIADI, qui est affilié à la Faculté de génie en informatique, propose des cours de haut niveau aux étudiants désireux d’entreprendre une carrière dans l’industrie aérospatiale.<br><br>",
				"activite": "",
				"lien":  "http://www.concordia.ca/encs/aerospace.html" },
					
		{"id": 2, "titre": "Institut de génie\naérospatial de McGill\n(MIAE)", "graphOpen": "NAN", "symb": ["s"],
				"mission": "MIAE est une initiative de la Chaire Lorne Trottier en génie aérospatial afin de stimuler de l’intéret chez les étudiant de premier cycle et des cycles supérieurs et de sensibilisation de l’environnement multi-disciplinaire et multi-culturel dans lequel ils peuvent travailler comme les futurs ingénieurs qui travaillent dans l’industrie aérospatiale.<br><br>",
				"activite": "",
				"lien":  "http://www.mcgill.ca/miae" },		
		
		{"id": 3, "titre": "SIGMA+/AÉROSPATIALE\nCentre de formation pratique\nen conception et en innovation\nen aérospatiale (CFPCIA)", "graphOpen": "NAN", "symb": ["s"],
				"mission": "La mission première du Centre de formation pratique en conception et en innovation en aérospatiale (CFPCIA), affilié à la Faculté des sciences et de génie de l’Université Laval (FSG_UL), est d’offrir aux étudiants en génie de l’Université Laval au baccalauréat et en maîtrise de cours des stages spécialisés de haut niveau dans le domaine de l'industrie aérospatiale. <br><br>\
								En fournissant un cadre d'apprentissage pratique distinctif et stimulant, le CFPCIA permet aux étudiants de côtoyer des ingénieurs en conception et en innovation en aérospatiale dans un secteur industriel à la fine pointe de la technologie.<br><br>",
				"activite": "",
				"lien":  "" },
						
		{"id": 4, "titre": "Institut de formation et\nde conception en génie\naéronautique de Sherbrooke", "graphOpen": "NAN", "symb": ["s"],
				"mission": "L’Institut de formation et de conception en génie aéronautique de Sherbrooke (Institut de formation et de conception en génie aérospatial de Sherbrooke) a pour mandat d’offrir aux étudiants de la Faculté de génie de l’Université de Sherbrooke, dans le cadre de leurs programmes d’études, des stages de haut niveau offrant un milieu de formation unique et pratique, ainsi que des projets de conception répondant à des problématiques industrielles. <br><br>\
								Chaque stage ou projet est encadré par un superviseur de l’industrie et un suivi pédagogique est assuré par l’Université de Sherbrooke. Les stages et les projets offrent la possibilité d’acquérir une expérience concrète et de développer les compétences et les connaissances pertinentes à la pratique de la profession d’ingénieur aéronautique ou spatial. <br><br>\
								Ces activités permettent aussi à l’industrie d’avoir accès à des étudiants de haut niveau et ainsi d’identifier et de former la relève dans son domaine.<br><br> ",
				"activite": "",
				"lien":  "https://www.usherbrooke.ca/ifcgas/" },		
		
		{"id": 5, "titre": "AÉROÉTS", "graphOpen": "NAN", "symb": ["s"],
				"mission": "Le regroupement AÉROÉTS représente, promeut et intègre les activités d'enseignement et de recherche en aérospatiale de l'ÉTS. Il favorise la mobilisation et l'échange entre les professeurs, chercheurs et étudiants intéressés par ce domaine et contribue au développement de partenariats stratégiques au niveau national et international. AÉROÉTS propose de nombreuses activités pour permettre à ses membres étudiants de découvrir différents aspects du génie aérospatial tout en élargissant leur réseau professionnel. <br><br>\
								L'Institut de conception et d'innovation en aérospatiale (ICIA) offre aux étudiants membres d'AÉROÉTS des projets de haut niveau (avec un contenu potentiel en Recherche et Développement) chez les partenaires industriels membres du regroupement des Instituts aérospatiaux de Montréal. Ces projets procurent aux étudiants une expérience concrète en entreprise et un savoir-faire de pointe, tout en répondant aux besoins grandissant des entreprises pour une relève hautement qualifiée, pluridisciplinaire et détenant une compréhension des enjeux qui influencent l’industrie aérospatiale.",
				"activite": "",
				"lien":  "http://www.aeroets.etsmtl.ca" },
						
		{"id": 6, "titre": "Institut d'innovation et\nde conception en\naérospatiale de Polytechnique\n(IICAP)", "graphOpen": "NAN", "symb": ["s"],
				"mission": "L’IICAP contribue au développement de l’industrie aérospatiale du Québec et à sa compétitivité en fournissant aux entreprises des ingénieurs qualifiés répondant à ses besoins en innovation et conception.<br><br>",
				"activite": "",
				"lien":  "http://www.polymtl.ca/iicap" },		
		
		{"id": -1, "titre": "Régional", "logo": "NAN", "graphOpen": "graphRégionalODS"},
		{"id": -2, "titre": "Organismes de soutien", "graphOpen": "graphODS"},
		{"id": -3, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6}
	  ]
  }
};

//////////////////////Sous-Noeud Provincial//////////////////////
graphProvincialODS = function () { return {
  "nodes": [
		{"id": 0, "titre": "Provincial", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Comité sectoriel de\nmain-d’œuvre en\naérospatiale au\nQuébec (CAMAQ)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le CAMAQ s'est donné comme mission de promouvoir l'excellence de la main-d'oeuvre du secteur de l'aérospatiale et du transport aérien et d'en soutenir le développement pour répondre encore davantage aux besoins des entreprises et des travailleurs du secteur.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources soutenues et offertes :</span><br><br>\
 							\u27E9 Programme Ton 1er emploi en aérospatiale<br>\
 							\u27E9 Outils de gestion des ressources humaines (manuel d’employé, outils GRH, etc.)<br>\
 							\u27E9 Recensements annuels de la main-d’œuvre de l’industrie<br>\
 							\u27E9 Formation pour les employés de la rampe<br>\
 							\u27E9 Formation sur les stratégies de gestion des risques reliés à la fatigue des équipages de conduite d’aéronefs et des employés sur les quarts atypiques de travail<br>\
 							\u27E9 Programme de formation de gestionnaires d’aéroports<br>\
 							\u27E9 Formation sur le management interculturel<br>\
 							\u27E9 Formation en Essais non destructifs (NDT)<br>\
 							\u27E9 OHRACIO Aéro<br>\
 							\u27E9 Développement de produits et intégration des systèmes (DPIS) \u24B9",
				"lien":  "http://www.camaq.org" },		
		
		{"id": 2, "titre": "Aéro Montréal", "colorText": "Black", "colorBack": "Black", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Créé en 2006, Aéro Montréal est un forum stratégique de concertation qui réunit l'ensemble des premiers dirigeants du secteur aérospatial québécois issus de l'industrie, des institutions d'enseignement, des centres de recherche et incluant les associations et les syndicats. Aéro Montréal a pour mission de mobiliser la grappe aérospatiale du Québec en vue de soutenir sa croissance et son rayonnement sur la scène mondiale. Sa vision est de devenir la référence mondiale en aérospatiale.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Chantiers de travail :</span><br><br>\
 							\u27E9 Chantier Chaîne d'approvisionnement<br>\
 							\u27E9 Chantier Image, visibilité et rayonnement<br>\
 							\u27E9 Chantier Innovation<br>\
 							\u27E9 Chantier Relève et main-d'œuvre<br>\
 							\u27E9 Chantier Développement de marchés - PME<br>\
 							\u27E9 Chantier Défense et sécurité nationale\
							<br><br><span style=\"font-weight: bold;\">Exemples d’activités proposées :</span><br><br>\
 							\u27E9 Initiatives MACH et MACH FAB 4.0 <br>\
 							\u27E9 Semaine internationale de l’aérospatiale<br>\
 							\u27E9 AeroPortail.ca<br>\
 							\u27E9 Portail Croissance Sécurité Défense Québec<br>\
							\u27E9 Passion pour l’aviation / Passion naissante<br>\
 							\u27E9 Projet Héritage<br>\
 							\u27E9 Parcours-découverte des métiers de l’aérospatiale<br>\
 							\u27E9 « Speed dating » professionnels<br>\
 							\u27E9 Compétition d’études de cas<br>\
 							\u27E9 Concours Gilles-Demers<br>\
 							\u27E9 Conférences<br>\
 							\u27E9 Séminaires<br>\
 							\u27E9 Webinaires<br>\
 							\u27E9 Missions commerciales<br>\
 							\u27E9 Signature d’ententes internationales<br>\
 							\u27E9 Et plusieurs autres",
				"lien":  "http://www.aeromontreal.ca" },
		
		{"id": 3, "titre": "Association québécoise\ndu transport aérien (AQTA) ", "graphOpen": "NAN",
				"mission": "Le rôle de l'AQTA est de faire les représentations nécessaires et promouvoir les intérêts des membres pour le développement de l'industrie du transport aérien au Québec.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
							\u27E9 Une équipe compétente offrant représentation, information, référence, appui, conseil<br>\
							\u27E9 Des ressources humaines et financières pour faire avancer les dossiers<br>\
							\u27E9 Un Congrès annuel en mars<br>\
							\u27E9 Une Soirée réseautage annuelle à l’automne<br>\
							\u27E9 Une infolettre Air<br>\
							\u27E9 Un Programme d’assurance collective<br>\
							\u27E9 Un Programme de placement en aviation en collaboration avec Aéroemploi<br>\
							\u27E9 Un Code d’éthique environnemental pour les exploitants d’hydravions<br>\
							\u27E9 Une Politique d’embauche<br>\
							\u27E9 Une Entente de formation sous réserve générique (Training Bond)<br>\
							\u27E9 Une Bourse d'études pour une formation en pilotage<br>\
							\u27E9 Une représentation auprès du ministère de la Défense nationale pour le programme de formation des cadets de l’air (pilotage)<br>\
							\u27E9 Un rapport de vol normalisé pour les exploitants d’hélicoptères<br>\
							\u27E9 Un Programme de formation spécifique pour les exploitants d’hélicoptères",
				"lien":  "http://www.aqta.ca" },		
		
		{"id": 4, "titre": "Conseil des aéroports du\nQuébec (CAQ)", "graphOpen": "NAN",
				"mission": "Le CAQ aspire à représenter, regrouper et fournir des services efficaces aux membres à travers le Québec afin de contribuer à la viabilité, au développement et à la sécurité des aéroports.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de projets :</span><br><br>\
 							\u27E9 Analyser, commenter et diffuser la règlementation aérienne (sécurité et sûreté)<br>\
							\u27E9 Organiser des séances de formations pour ces membres afin de les soutenir dans l’atteinte de leurs objectifs réglementaires<br>\
							\u27E9 Offrir le soutien et les conseils techniques<br>\
							\u27E9 Favoriser le maillage entre les différents intervenants aéroportuaires<br>\
							\u27E9 Maintenir et améliorer le financement des projets d’infrastructures<br>\
 							\u27E9 Participer aux comités dans le domaine aéroportuaire",
				"lien":  "http://www.caquebec.ca" },		
		
		{"id": 5, "titre": "Conseil du patronat\ndu Québec (CPQ)", "graphOpen": "NAN",
				"mission": "Le CPQ assure que les employeurs puissent disposer des meilleures conditions possibles pour prospérer au Québec.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Grands dossiers et chantiers du CPQ :</span><br><br>\
 							\u27E9 Développement et disponibilité de la main-d’œuvre<br>\
 							\u27E9 Réglementation<br>\
 							\u27E9 Finances publiques et fiscalité<br>\
 							\u27E9 Économie durable<br>\
 							\u27E9 Législation et santé et sécurité au travail",
				"lien":  "http://www.cpq.qc.ca" },		
		
		{"id": 6, "titre": "Manufacturiers et Exportateurs\ndu Québec (MEQ)", "graphOpen": "NAN",
				"mission": "MEQ est le leader pour vous aider à régler vos défis en matière de main-d’œuvre qualifiée, d’innovation et d’exportation. MEQ discute de ces enjeux avec les autorités compétentes et les gouvernements afin de trouver des solutions. MEQ offre du support personnalisé, un calendrier riche en événements et du réseautage entre dirigeants.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d'activités proposées sur la main-d'oeuvre :</span><br><br>\
							\u27E9 Forum sur l'optimisation des processus en ressources humaines<br>\
							\u27E9 Salon des métiers manufacturiers<br>\
							\u27E9 Passeport carrière (recrutement d'ingénieurs, techniciens et technologues formés à l'étranger)",
				"lien":  "http://qc.cme-mec.ca" },		
		
		{"id": 7, "titre": "Association pour le\ndéveloppement de la\nrecherche et de l'innovation\ndu Québec (ADRIQ)", "graphOpen": "NAN",
				"mission": "L'ADRIQ anime une vaste association d'affaires, unique et influente, pour soutenir l'innovation technologique au Québec et favoriser les partenariats entre les décideurs. <br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples d'activités : </span><br><br>\
 							\u27E9 Réseautage, maillage<br>\
 							\u27E9 Forums de discussion<br>\
 							\u27E9 Hommages, galas, reconnaissances<br>\
 							\u27E9 Parcours Innovation PME Montréal",
				"lien":  "http://www.adriq.com" },		
		
		{"id": -1, "titre": "Organismes de soutien", "graphOpen": "graphODS"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6},
		{"source": 0, "target": 7}
	  ]
  }
};

//////////////////////Noeud Organismes pour le soutien au financement de la formation//////////////////////
graphOPLSAFDLF = function () { return {
  "nodes": [
		{"id": 0, "titre": "Organismes pour le\nsoutien au financement\nde la formation", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Provincial", "graphOpen": "graphProvincial"},
		{"id": 2, "titre": "Fédéral", "graphOpen": "graphFédéral"},
		{"id": 3, "titre": "Régional", "graphOpen": "graphRégional"},
  
		{"id": -1, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3}
	  ]
  }
};

//////////////////////Sous-Noeud Provincial//////////////////////
graphProvincial = function () { return {
  "nodes": [
		{"id": 0, "titre": "Provincial", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Ministère de l'Économie, de\nla Science et de l'Innovation\n(MESI)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le Ministère a pour mission de soutenir la croissance des entreprises, l’entrepreneuriat, la science, l’innovation ainsi que l’exportation et l’investissement. Il coordonne notamment l’élaboration et la mise en œuvre de la Stratégie québécoise de la recherche et de l’innovation, la Stratégie numérique du Québec et de la Stratégie québécoise de l'aérospatiale.<br><br> Il conseille également le gouvernement en vue de favoriser le développement économique de toutes les régions du Québec, et ce, dans une perspective de création d’emplois, de prospérité économique et de développement durable.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">En matière de développement des compétences, de la relève et des talents, les programmes offerts sont :</span><br><br>\
 							\u27E9 Programme NovaScience<br>\
							\u27E9 Premier emploi en recherche<br>\
							\u27E9 Stages d’innovation en entreprise (en collaboration avec Mitacs via les programmes Accélération, Élévation et Globalink)",
				"lien":  "http://www.economie.gouv.qc.ca" },
						
		{"id": 2, "titre": "Investissement Québec (IQ)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Investissement Québec a pour mission de stimuler la croissance et de favoriser la prospérité économique du Québec. Pour mener à bien son mandat, notre organisation compte 17 bureaux dans toutes les régions du Québec et 12 bureaux ailleurs dans le monde. De plus, elle s’est dotée d’une structure polyvalente et d’une éthique rigoureuse.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Financement de projets (prêts)<br>\
 							\u27E9 Investissements directs en capital de risque<br>\
 							\u27E9 Capital de développement (financement par action, par dette)",
				"lien":  "http://www.investquebec.com" },
				
		{"id": 3, "titre": "Ministère de l'Éducation et\nde l'Enseignement supérieur\n(MEES)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le Ministère réalise ses activités dans les domaines de l’éducation préscolaire et de l’enseignement primaire, secondaire, collégial et universitaire, de la recherche, de l’aide financière aux études ainsi que dans les domaines du loisir et du sport.<br><br>",
				"activite": "",
				"lien":  "http://www.education.gouv.qc.ca" },
				
		{"id": 4, "titre": "Revenu Québec", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Revenu Québec a la charge d’assurer la perception des impôts et des taxes afin que chacun paie sa juste part du financement des services publics, d’administrer le Programme de perception des pensions alimentaires, d’administrer les programmes sociofiscaux et tout autre programme de perception et de redistribution de fonds que lui confie le gouvernement, de tenir un registre public des entreprises faisant des affaires au Québec et d’administrer le régime québécois régissant l’existence des personnes morales afin de contribuer à la protection du public et des entreprises, etc.<br><br>",
				"activite": "",
				"lien":  "http://www.revenuquebec.ca" },
						
		{"id": 5, "titre": "Commission des normes, de\nl'équité, de la santé et de\nla sécurité du travail\n(CNESST)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "La CNESST fait la promotion des droits et des obligations en matière de travail et en assure le respect, et ce, tant auprès des travailleurs que des employeurs du Québec. Pour ce faire, elle favorise des relations de travail justes et équilibrées, assure l’implantation et le maintien de l’équité salariale, vise la prise en charge de la santé et de la sécurité par les milieux de travail, indemnise les victimes de lésions professionnelles et veille à leur réadaptation.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Services offerts en lien avec :</span><br><br>\
 							\u27E9 Les normes du travail (application de la Loi sur les normes du travail et de la Loi sur la fête nationale)<br>\
 							\u27E9 L’équité salariale<br>\
 							\u27E9 La santé et sécurité du travail",
				"lien":  "http://www.cnesst.gouv.qc.ca" },
						
		{"id": 6, "titre": "Association sectorielle –\nFabrication d'équipement de\ntransport et de machines\n(ASFETM)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "L’ASFETM est un organisme paritaire en santé et sécurité du travail constitué volontairement, en 1983, par des groupements de travailleurs et d’employeurs des secteurs d’activités économiques « Fabrication d’équipement de transport » et « Fabrication de machines ». L’ASFETM a pour mandat la prévention des accidents du travail et des maladies professionnelles dans ces deux secteurs d’activités.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Services offerts :</span><br><br>\
 							\u27E9 Formation en santé et sécurité du travail - Information<br>\
 							\u27E9 Recherche et documentation<br>\
 							\u27E9 Conseil et assistance technique aux établissements qu’elle dessert en privilégiant l’élimination à la source des dangers pour la santé, la sécurité et l’intégrité physique des travailleurs, ce qui est l’objet même de la Loi sur la santé et la sécurité du travail du Québec.",
				"lien":  "http://www.asfetm.com" },
						
		{"id": 7, "titre": "Commission des partenaires\ndu marché du travail (CPMT)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "La CPMT a pour mission de voir au développement et à l’utilisation optimale du capital humain - compétences, expérience et savoirs des personnes - par une action concertée des acteurs du marché du travail dans une perspective d’accroissement de la prospérité du Québec.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Programme d’agrément des formateurs<br>\
 							\u27E9 Mutuelles de formation<br>\
 							\u27E9 Certificat de qualité des initiatives de formation (permet aux entreprises d’être exemptées, pour une période de trois ans, de : comptabiliser et de déclarer annuellement ses dépenses de formation à Revenu Québec; transmettre le formulaire Déclaration des activités de formation à la CPMT.",
				"lien":  "http://www.cpmt.gouv.qc.ca" },
						
		{"id": 8, "titre": "Emploi-Québec", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Emploi-Québec offre différentes mesures d’aide à l’emploi destinées aux individus et aux entreprises, dont du soutien à la formation, afin de favoriser l’intégration et le maintien en emploi.<br><br>",
				"activite": "<span style=\"font-weight: bold;\"> </span><br><br>\
 							Pour trouver le centre local d’emploi ou le bureau de Services Québec le plus près de chez vous : www.mess.gouv.qc.ca/services-en-ligne/centres-locaux-emploi/localisateur/services.asp",
		 		"lien":  "http://www.emploiquebec.gouv.qc.ca" },
				
		{"id": 9, "titre": "Ministère de l'Immigration,\nde la Diversité et\nde l'Inclusion ", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Promouvoir l’immigration; sélectionner des personnes immigrantes; soutenir la pleine participation des personnes issues de l’immigration au développement du Québec<br><br>",
				"activite": "\u27E9 Promouvoir l’immigration<br>\
							\u27E9 Sélectionner des personnes immigrantes<br>\
							\u27E9 Soutenir la pleine participation des personnes issues de l’immigration au développement du Québec<br><br>\
							<span style=\"font-weight: bold;\">Programmes offerts </span><br><br>\
 							\u27E9 Programme Valorisation jeunesse<br>\
 							\u27E9 Francisation",
				"lien":  "http://www.immigration-quebec.gouv.qc.ca/fr/accueil.html" },
				  
		{"id": -1, "titre": "Organismes pour le\nsoutien au financement\nde la formation", "graphOpen": "graphOPLSAFDLF"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6},
		{"source": 0, "target": 7},
		{"source": 0, "target": 8},
		{"source": 0, "target": 9}
	  ]
  }
};

//////////////////////Sous-Noeud Fédéral//////////////////////
graphFédéral = function () { return {
  "nodes": [
		{"id": 0, "titre": "Fédéral", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Transports Canada", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Transports Canada a pour mission de servir l’intérêt public en favorisant un réseau de transport au Canada qui soit sûr et sécuritaire, efficace et respectueux de l’environnement. <br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes (subventions) :</span><br><br>\
 							\u27E9 Programme d’aide aux immobilisations aéroportuaires<br>\
 							\u27E9 Subvention pour l’Initiative d’adaptation des transports dans le Nord<br>\
 							\u27E9 Programme de subvention à l’exploitation et à l’entretien des aéroports",
				"lien":  "http://www.tc.gc.ca" },
				
		{"id": 2, "titre": "Innovation, Sciences et\nDéveloppement économique\nCanada (anciennement\nIndustrie Canada)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Innovation, Sciences et Développement économique Canada travaille avec les Canadiens de tous les secteurs de l’économie et de toutes les régions du pays à instaurer un climat favorable à l’investissement, à stimuler l’innovation, à accroître la présence canadienne sur les marchés mondiaux et à créer un marché équitable, efficace et concurrentiel.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Innovation Canada<br>\
 							\u27E9 Programme de financement des petites entreprises du Canada",
				"lien":  "https://www.canada.ca/fr/innovation-sciences-developpement-economique.html" },
				
		{"id": 3, "titre": "Banque de développement\ndu Canada (BDC)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "La BDC a pour mission de contribuer à créer et à développer des PME canadiennes solides à l’aide de financement et de services de consultation. en accordant une attention particulière aux besoins des entrepreneurs. La BDC a une équipe sectorielle spécialisée qui couvre le secteur aérospatial.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes (financement) :</span><br><br>\
 							\u27E9 Prêt petites entreprises de BDC<br>\
							\u27E9 Prêts commerciaux (achat d’équipement, fonds de roulement, technologies, projet de croissance, terrains et bâtiments, etc.)<br>\
 							\u27E9 Financement de projets, et de frais non récurrents liés à l’aérospatial",
				"lien":  "http://www.bdc.ca" },
						
		{"id": 4, "titre": "Agence du revenu du\nCanada (ARC)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "L’Agence du revenu du Canada (ARC) applique les lois fiscales pour le gouvernement du Canada et la plupart des provinces et territoires. Elle administre également divers programmes de prestations et d’incitatifs sociaux et économiques offerts au moyen du régime fiscal.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de programmes de prestations et d’incitatifs sociaux et économiques offerts :</span><br><br>\
 							\u27E9 Programme d’encouragements fiscaux<br>\
 							\u27E9 Programme de la recherche scientifique et du développement expérimental (RS&DE)<br>\
 							\u27E9 Crédits d’impôt à l’investissement",
				"lien":  "http://www.cra-arc.gc.ca" },
						
		{"id": 5, "titre": "Emploi et Développement\nsocial Canada (EDSC)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Emploi et Développement social Canada (EDSC) est le ministère du gouvernement du Canada responsable de l’élaboration, de la gestion et de la prestation des programmes et services sociaux.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes (subventions) :</span><br><br>\
 							\u27E9 Objectif Carrière<br>\
 							\u27E9 Programme de financement du travail<br>\
 							\u27E9 Fond d’intégration pour les personnes handicapées<br>\
 							\u27E9 Emploi d’été Canada<br>\
 							\u27E9 Programme de stages pour les jeunes dans les secteurs en demande (PSJ-SED)<br>\
 							\u27E9 Subvention à l’achèvement de la formation d’apprenti",
				"lien":  "http://www.edsc.gc.ca" },
						
		{"id": 6, "titre": "Conseil national de\nrecherches Canada\n(CNRC)", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Le Conseil national de recherches du Canada (CNRC) est la principale organisation de recherche et de technologie (ORT) du gouvernement du Canada. De concert avec ses clients et partenaires, le CNRC facilite l’innovation, effectue des recherches stratégiques et dispense des services scientifiques et techniques.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Programmes de recherche en aérospatiale (systèmes aériens civils sans pilotes, systèmes de défense aérienne, technologies de développement des produits aéronautiques, etc.)<br>\
 							\u27E9 Services techniques et consultatifs (aérodynamique des véhicules aériens, services de conception et de fabrication, solutions pour la mise au point de nanomatériaux, systèmes d’imagerie hyperspectrale, etc.)<br>\
 							\u27E9 Programme d’aide à la recherche industrielle (PARI)",
				"lien":  "http://www.nrc-cnrc.gc.ca" },
				
		{"id": 7, "titre": "Réseau Entreprises Canada", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Notre objectif est de favoriser la croissance et la prospérité de votre entreprise en lui offrant les ressources dont elle a besoin, y compris une vaste gamme de renseignements sur les services, les programmes et les règlements établis par les gouvernements.<br><br>\
								Le Réseau Entreprises Canada met l'entrepreneuriat et l'innovation en valeur, et offre de l'aide aux entrepreneurs par le biais d'un réseau structuré de centres de services répartis dans l'ensemble du Canada, soit un dans chaque province et territoire. De plus, chacun des centres collabore avec des partenaires d'autres collectivités de leur région où de nombreux points d'accès aux services vous sont offerts.<br><br>\
								Le Réseau Entreprises Canada est administré, en collaboration avec les provinces et les territoires, par des ministères directeurs, à savoir au Québec :<br><br>\
								\u27E9 Innovation, Sciences et développement économique Canada<br><br>\
								\u27E9 Développement économique Canada pour les régions du Québec<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de programmes : </span><br><br>\
 							\u27E9 Congé d'impôt sur le revenu pour une nouvelle société dédiée à la commercialisation d'une propriété intellectuelle<br>\
 							\u27E9 Congé fiscal pour chercheurs étrangers<br>\
 							\u27E9 Congé fiscal pour experts étrangers<br>\
 							\u27E9 Crédit d'impôt pour la création d'emplois d'apprentis<br>\
 							\u27E9 Crédit d'impôt pour la recherche précompétitive en partenariat privé<br>\
 							\u27E9 Crédit d'impôt pour le design de produits fabriqués industriellement (volet design industriel)<br>\
 							\u27E9 Crédit d'impôt pour services d'adaptation technologique<br>\
 							\u27E9 Crédit d'impôt pour stage en milieu de travail<br>\
 							\u27E9 Crédit d'impôt relatif à l'intégration des TI dans les PME des secteurs manufacturier et primaire<br>\
 							\u27E9 Crédit d'impôt relatif aux salaires – R-D<br>\
 							\u27E9 Crédits d'impôts — Diversification des marchés des entreprises manufacturières québécoises<br>\
 							\u27E9 Programme Exportateurs de classe mondiale<br>\
 							\u27E9 Recherche scientifique et développement expérimental — Programme d'encouragements fiscaux<br>\
 							\u27E9 Reconnaissance à titre de consortiums de recherche précompétitive<br>\
 							\u27E9 Jeunes volontaires<br>\
 							\u27E9 Et plusieurs autres",
				"lien":  "http://entreprisescanada.ca/fr" },
				
		{"id": 8, "titre": "Développement économique\nCanada", "graphOpen": "NAN", "symb": ["S"],
				"mission": "Au cœur du développement économique des régions du Québec, Développement économique Canada pour les régions du Québec (DEC) aide les entreprises, les collectivités et les organismes qui les appuient, grâce à son réseau de bureaux d’affaires répartis sur l’ensemble du territoire.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Exemples de ressources offertes :</span><br><br>\
 							\u27E9 Programme de développement économique du Québec (PDEQ)<br>\
 							\u27E9 Programme de développement des collectivités",
				"lien":  "http://www.dec-ced.gc.ca/fra/index.html" },
				  
		{"id": -1, "titre": "Organismes pour le\nsoutien au financement\nde la formation", "graphOpen": "graphOPLSAFDLF"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6},
		{"source": 0, "target": 7},
		{"source": 0, "target": 8}
	  ]
  }
};

//////////////////////Sous-Noeud Régional//////////////////////
graphRégional = function () { return {
  "nodes": [
		{"id": 0, "titre": "Régional", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Bureaux régionaux\nd'Emploi-Québec / Centres\nlocaux d’emploi (CLE) ", "graphOpen": "NAN", "symb": ["S", "s"],
				"mission": "Emploi-Québec offre différentes mesures d’aide à l’emploi destinées aux individus et aux entreprises, dont du soutien à la formation, afin de favoriser l’intégration et le maintien en emploi.<br><br>",
				"activite": "<span style=\"font-weight: bold;\"> </span><br><br>",
				"lien":  "https://www.mess.gouv.qc.ca/services-en-ligne/centres-locaux-emploi/localisateur/services.asp" },
						
		{"id": -1, "titre": "Organismes pour le\nsoutien au financement\nde la formation", "graphOpen": "graphOPLSAFDLF"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1}
	  ]
  }
};






//////////////////////Noeud Établissements d'enseignement//////////////////////
graphEDE = function () { return {
  "nodes": [
		{"id": 0, "titre": "Établissements\nd'enseignement", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Universitaire", "graphOpen": "graphUniversitaire"},
		{"id": 2, "titre": "Collégial et technique", "graphOpen": "graphCOLLÉGIALETTECHNIQUE"},
		{"id": 3, "titre": "Secondaire et\nprofessionnel", "graphOpen": "graphSECONDAIREETPROFESSIONNEL"},
  
		{"id": -1, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3}
	  ]
  }
};

//////////////////////Sous-Noeud Universitaire//////////////////////
graphUniversitaire = function () { return {
  "nodes": [
		{"id": 0, "titre": "Universitaire", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Université Concordia", "graphOpen": "NAN", "symb": ["A", "P", "D"],
				"mission": "Concordia University is welcoming, engaged, and committed to innovation and excellence in education, research, creative activity and community partnerships. It dares to be different and draws on its diversity to transform the individual, strengthen society and enrich the world.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Baccalauréat en génie aérospatial (spécialités : aérospatiale et propulsion, structures aérospatiales et matériaux, avionique et systèmes aérospatiaux)<br>\
 							\u27E9 Maîtrise en génie aérospatial (Programme conjoint) \u24C5<br>\
 							\u27E9 Programme AeroCREATE \u24B6",
				"lien":  "http://www.concordia.ca" },
						
		{"id": 2, "titre": "Polytechnique Montréal", "graphOpen": "NAN", "symb": ["A", "P", "D"],
				"mission": "Polytechnique a pour mission :<br>\
 							\u27E9 de donner une formation de qualité en ingénierie à tous les cycles, en mettant l’accent sur les valeurs humaines;<br>\
 							\u27E9 de réaliser des recherches pertinentes et de haut niveau, qui sont à la base d’une formation de qualité au niveau de la maîtrise et du doctorat et qui tiennent compte des besoins du milieu industriel et de la société;<br>\
 							\u27E9 d’avoir un rayonnement intellectuel et social concrétisé par des interactions avec les milieux externes, tant au pays qu’à l’étranger.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Baccalauréat en génie aérospatial (spécialités : contraintes, environnement virtuel, fabrication, systèmes d’aéronefs, technologies spatiales)<br>\
 							\u27E9 Maîtrise professionnelle en génie aérospatial (Programme conjoint) \u24C5<br>\
 							\u27E9 Maîtrise recherche en génie aérospatial<br>\
 							\u27E9 Programme AeroCREATE  \u24B6",
				"lien":  "http://www.polymtl.ca" },
			
		{"id": 3, "titre": "Université McGill", "graphOpen": "NAN", "symb": ["A", "P", "D"],
				"mission": "L’Université McGill a pour mission de faire progresser le savoir par son enseignement, ses travaux de recherche et les services qu’elle rend à la société. Pour s’en acquitter, elle offre la meilleure instruction qui soit à un effectif étudiant de 1er, 2e et 3e cycle exceptionnel; elle effectue des travaux de recherche jugés excellents selon les normes internationales les plus rigoureuses; enfin, elle rend des services à la société dans les domaines où elle est particulièrement experte.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Baccalauréat en génie mécanique, concentration génie aéronautique<br>\
 							\u27E9 Maîtrise en génie aérospatial (Programme conjoint)  \u24C5<br>\
 							\u27E9 Programme AeroCREATE   \u24B6",
				"lien":  "https://www.mcgill.ca" },
				
		{"id": 4, "titre": "École de technologie\nsupérieure (ÉTS)", "graphOpen": "NAN", "symb": ["A", "P", "D"],
				"mission": "L’École de technologie supérieure est une constituante du réseau de l’Université du Québec. Spécialisée dans l’enseignement et la recherche appliqués en génie et le transfert technologique, elle forme des ingénieurs et des chercheurs reconnus pour leur approche pratique et innovatrice. Depuis sa création, elle entretient un partenariat unique avec le milieu des affaires et l’industrie, tant avec les grandes entreprises que les PME.<br><br> Par sa mission particulière axée sur le génie appliqué et ses liens étroits avec les organisations, l’ÉTS se distingue nettement des établissements universitaires québécois. Elle est de plus la seule école d’ingénierie au Québec qui offre des programmes de baccalauréat en génie créés spécifiquement pour les diplômés de niveau collégial technique désirant se doter d’une formation universitaire.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
							Baccalauréats :<br>\
 							\u27E9 Génie mécanique (concentration aérospatiale)<br>\
 							\u27E9 Génie électrique (concentration systèmes embarqués pour l’aérospatiale)<br>\
 							\u27E9 Génie de la production automatisée (concentration production aéronautique)<br>\
							\u27E9 Génie logiciel<br>\
							\u27E9 Génie des technologies de l’information<br><br>\
							Maîtrises :<br>\
 							\u27E9 Génie avec concentration aérospatiale – avec mémoire<br>\
 							\u27E9 Génie aérospatial – avec projet (Programme conjoint) \u24C5<br>\
							\u27E9 Génie, concentration en gestion de l’innovation – avec mémoire ou avec projet<br>\
							\u27E9 Génie des technologies de l’information – avec mémoire ou avec projet<br><br>\
							Autres :<br>\
 							\u27E9 Certificat en gestion et assurance de la qualité<br>\
 							\u27E9 DESS en génie de la production automatisée : systèmes intelligents ou intégration et automatisation des systèmes<br>\
 							\u27E9 Programme AeroCREATE  \u24B6",
				"lien":  "http://www.etsmtl.ca/" },
						
		{"id": 5, "titre": "Université Laval", "graphOpen": "NAN", "symb": ["A", "P", "D"],
				"mission": "Première université francophone d’Amérique, ouverte sur le monde et animée d’une culture de l’exigence, l’Université Laval contribue au développement de la société :<br>\
 							\u27E9 par la formation de personnes compétentes, responsables et promotrices de changement,<br>\
 							\u27E9 par l’avancement et le partage des connaissances dans un environnement dynamique de recherche et de création.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Maîtrise interuniversitaire en génie aérospatial (Programme conjoint) \u24C5<br>\
 							\u27E9 Programme AeroCREATE \u24B6",
				"lien":  "http://www.ulaval.ca" },
						
		{"id": 6, "titre": "Université de Sherbrooke", "graphOpen": "NAN", "symb": ["P", "D"],
				"mission": "Communauté ouverte, engagée et responsable, l’Université de Sherbrooke répond aux besoins de la société et contribue à son développement en se consacrant à l’enseignement, à la recherche et à la création, par l’offre diversifiée d’expériences d’apprentissage, par la production et le transfert des connaissances et par la promotion de la pensée critique.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Baccalauréat en génie mécanique, avec concentration en aéronautique<br>\
 							\u27E9 Maîtrise en génie aérospatial (Programme conjoint)  \u24C5",
				"lien":  "http://www.usherbrooke.ca" },
				
		{"id": 7, "titre": "Université du Québec à\nChicoutimi (UQAC)", "graphOpen": "NAN",
				"mission": "À titre d’institution d’enseignement supérieur, l’UQAC œuvre aux trois cycles d’études et est active en recherche/création. Elle assume une mission de transmission et de diffusion des connaissances en offrant un ensemble de programmes d’études qui s’adressent à des étudiants ayant des profils variés et intéressés par une formation initiale de qualité et une mise à jour continuelle de leur savoir, afin que ceux-ci soient en mesure de jouer un rôle de citoyens responsables dans une société en perpétuel changement.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Baccalauréat en génie mécanique<br>\
							\u27E9 Baccalauréat en génie électrique<br>\
							\u27E9 Baccalauréat en génie informatique<br>\
							\u27E9 Baccalauréat en génie civil<br>\
 							\u27E9 Maîtrise en ingénierie<br>\
 							\u27E9 Doctorat en ingénierie",
				"lien":  "http://www.uqac.ca" },
				
		{"id": 8, "titre": "Université du Québec à\nTrois-Rivières (UQTR)", "graphOpen": "NAN",
				"mission": "Enracinée dans son milieu et résolument branchée sur le monde, l’UQTR se distingue dans la production, le transfert et la diffusion des connaissances, par la formation, la recherche, les services à la collectivité et l’implication sociale des membres de sa communauté.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Baccalauréat en génie électrique<br>\
 							\u27E9 Baccalauréat en génie industriel<br>\
 							\u27E9 Baccalauréat en génie mécanique<br>\
 							\u27E9 Diplôme d’études supérieures spécialisées en génie industriel<br>\
 							\u27E9 Maîtrise en génie électrique (avec mémoire)<br>\
 							\u27E9 Maîtrise en ingénierie - Concentration génie industriel (avec essai)<br>\
 							\u27E9 Maîtrise en ingénierie - Concentration génie industriel (avec mémoire)<br>\
 							\u27E9 Maîtrise en ingénierie - Concentration génie mécanique (avec mémoire)<br>\
 							\u27E9 Doctorat en génie électrique<br>\
 							\u27E9 Doctorat en ingénierie",
				"lien":  "http://www.uqtr.ca" },
						  
		{"id": -1, "titre": "Établissements\nd'enseignement", "graphOpen": "graphEDE"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6},
		{"source": 0, "target": 7},
		{"source": 0, "target": 8}
	  ]
  }
};

//////////////////////Sous-Noeud Collégial et technique//////////////////////
graphCOLLÉGIALETTECHNIQUE = function () { return {
  "nodes": [
  		{"id": 0, "titre": "Collégial et technique", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Cégep de Trois-Rivières", "graphOpen": "NAN",
				"mission": "À titre d’établissement d’enseignement supérieur, la mission principale du Cégep de Trois-Rivières consiste à offrir des services éducatifs de grande qualité en formation préuniversitaire et technique, en formation continue et en services aux entreprises. Ses missions complémentaires consistent à développer la recherche technologique et les transferts, à poursuivre des projets éducatifs et de coopération régionaux, nationaux et internationaux à caractère communautaire, sportif, technologique et entrepreneurial.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Technologie du génie industriel<br>\
 							\u27E9 Techniques de génie mécanique<br>\
 							\u27E9 Technologie de maintenance industrielle<br>\
 							\u27E9 Technologie de l’électronique industrielle<br>\
 							\u27E9 Technologie du génie métallurgique<br>\
 							\u27E9 Procédés de transformation<br>\
 							\u27E9 Technologie du génie métallurgique<br>\
 							\u27E9 Fabrication mécanosoudée<br>\
 							\u27E9 Technologie du génie métallurgique<br>\
 							\u27E9 Contrôle des matériaux<br>\
 							\u27E9 DEC-Bac en logistique ",
				"lien":  "http://www.cegeptr.qc.ca" },
						
		{"id": 2, "titre": "École nationale\nd'aérotechnique (ÉNA)\n(Cégep Édouard-Montpetit)", "graphOpen": "NAN", "symb": ["E"],
				"mission": "L’École nationale d’aérotechnique (ENA), un campus du cégep Édouard-Montpetit, est le chef de file en formation technique spécialisée en aéronautique au Québec. Elle est aussi la plus importante école en aéronautique en Amérique du Nord. Dotée d’équipements d’une valeur de plus de 85 millions de dollars, elle abrite, en plus de 36 aéronefs, de nombreux hangars et des laboratoires à la fine pointe de la technologie.  Ces installations sont consacrées tant à la formation initiale de la future main-d’œuvre spécialisée qu’au perfectionnement des employés des PME du Québec.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">DEC – Diplôme d’études collégiales :</span><br>\
 							\u27E9 Techniques de maintenance d’aéronefs<br>\
 							\u27E9 Aircraft Maintenance technology<br>\
 							\u27E9 Techniques d’avionique<br>\
 							\u27E9 Techniques de génie aérospatial<br><br>\
 							<span style=\"font-weight: bold;\">AEC – Attestation d’études collégiales :</span><br>\
 							\u27E9 Éléments d’avionique (1 800 h)<br>\
 							\u27E9 Maintenance d’aéronefs (1 395 h)<br>\
 							\u27E9 Agent de méthode assemblages structuraux en aéronautique (540 h)<br>\
 							\u27E9 Modélisation et dessins CATIA (375 h)<br><br>\
 							<span style=\"font-weight: bold;\">DEC-BAC (passerelle du collégial à l’université) :</span><br>\
 							\u27E9 Avionique (École Polytechnique)<br>\
 							\u27E9 Génie aérospatial (École Polytechnique)<br>\
 							\u27E9 Génie aérospatial (Université Concordia)",
				"lien":  "http://www.cegepmontpetit.ca/ecole-nationale-d-aerotechnique" },

		{"id": 3, "titre": "Cégep de Saint-Laurent", "graphOpen": "NAN",
				"mission": "Le Collège a pour mission de donner aux jeunes et aux adultes admis une formation à la fois globale, leur permettant de s’adapter à la société et de participer à son évolution, et spécifique, adaptée aux contingences de leur orientation.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Techniques de génie mécanique (DEC)<br>\
 							\u27E9 Passerelle DEP Techniques d’Usinage vers DEC Techniques de génie mécanique",
				"lien":  "http://www.cegepsl.qc.ca" },
						
		{"id": 4, "titre": "Centre québécois de\nformation aéronautique\n(CQFA)\n(Cégep de Chicoutimi)", "graphOpen": "NAN", "symb": ["E"],
				"mission": "LE CQFA est la seule école nationale publique au Québec à offrir un programme de formation en pilotage d'aéronefs.<br><br>\Le rôle du Centre dépasse largement l’enseignement du pilotage aux étudiants réguliers. Il a aussi comme mission de produire du matériel didactique francophone adapté à l’environnement nord-américain, de soutenir la petite et la moyenne entreprise, de rendre disponibles des programmes d’actualisation et de recyclage à une population adulte et de faire de la recherche pédagogique dans les disciplines connexes au pilotage.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Formations dispensées</span><br><br>\
							Diplôme d'études collégiales (DEC) :<br><br>\
 							\u27E9 280.A3  Techniques de pilotage d’aéronefs hydravion et avions monomoteurs sur roues et sur skis<br>\
 							\u27E9 280.A4  Techniques de pilotage d’aéronefs multimoteurs aux instruments<br>\
 							\u27E9 280.A5  Techniques de pilotage d’aéronefs / hélicoptères",
				"lien":  "http://www.cqfa.ca" },
				
		{"id": 5, "titre": "Cégep du Vieux Montréal", "graphOpen": "NAN",
				"mission": "Le cégep du Vieux Montréal est un établissement d'enseignement collégial offrant un éventail de 52 programmes, profils et options de formation préuniversitaires et techniques. Il vise la formation de personnes compétentes, autonomes, cultivées et engagées dans leur milieu, tout en valorisant le soutien et l'aide à la réussite à travers une approche humaniste de la formation. Plus qu'un centre de formation, le Cégep est aussi un milieu de vie dynamique. Chaque étudiant peut parfaire ses acquis et s'impliquer dans son milieu grâce à une vaste gamme d'activités sociales, culturelles, artistiques et scientifiques.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Techniques de génie mécanique - Fabrication mécanique<br>\
							\u27E9 Techniques de génie mécanique - Dessin de conception mécanique<br>\
							\u27E9 Technologie de maintenance industrielle<br>\
 							\u27E9 Technologie du génie électrique : Électronique industrielle",
				"lien":  "http://www.cvm.qc.ca" },
	  
	  	{"id": 6, "titre": "Cégep de Saint-Jérôme", "graphOpen": "NAN",
				"mission": "Le Cégep de Saint-Jérôme est un établissement d’enseignement supérieur qui offre un milieu de vie et des services de qualité à proximité, ainsi qu’un encadrement et un accueil inégalés dans ses trois lieux d’enseignement, situés au cœur des Laurentides.<br><br>\u27E9 On le choisit pour la réputation de ses programmes de formation (https://www.cstj.qc.ca/programmes-et-admission/tous-les-programmes-2/) reconnus par les employeurs et les universités.<br>(https://www.cstj.qc.ca/programmes-et-admission/tous-les-programmes-2/)<br>\u27E9 On le fréquente pour la qualité de son accueil, les valeurs de réussite qui habitent son personnel et l’accompagnement attentionné qu’il dispense.<br>\u27E9 On s’y attache pour l’ambiance stimulante et conviviale qui règne dans ses multiples activités artistiques, culturelles et sportives.<br><br>Résolument engagé dans les Laurentides et centré sur la formation des jeunes et des adultes, le Collège s’affirme comme établissement d’enseignement supérieur. Par ses activités d’enseignement et de recherche, en partenariat avec son milieu, il contribue de façon significative au développement de la société et des personnes qui la composent.<br><br>Reconnu pour la qualité de sa formation et des services rendus à sa communauté, la qualité de son environnement humain et la richesse de ses expertises, le Collège est un partenaire incontournable du développement socioéconomique des Laurentides et de la société.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes d’études offerts :</span><br><br>\
 							\u27E9 Transformation des matériaux composites | 241.CO/241.C0 ATE*<br>(https://www.cstj.qc.ca/programmes-et-admission/programmes-techniques-2/transformation-des-materiaux-composites/)<br><br>\
							\u27E9 Génie mécanique (DEC) | 241.AO/241.A0 ATE*<br>(https://www.cstj.qc.ca/programmes-et-admission/programmes-techniques-2/genie-mecanique/)<br><br>\
							\u27E9 Informatique | 420.AA/420.AA ATE* (https://www.cstj.qc.ca/programmes-et-admission/programmes-techniques-2/informatique/)<br><br>\
							\u27E9 Sciences informatiques et mathématiques (DEC-BAC – programme préuniversitaire en partenariat avec l’Université Laval) | 200.CO<br>(https://www.cstj.qc.ca/programmes-et-admission/programmes-preuniversitaires-2/sciences-informatiques-et-mathematiques/)<br><br>\
							\u27E9 Matériaux composites (AEC) | ELC.29 (https://fcsei.cstj.qc.ca/programmes-detudes/attestations-detudes-collegiales-a-temps-plein/materiaux-composites-secteur-de-laerospatiale-elc-29/le-programme/)<br><br>\
							\u27E9 CAO ET FAO – CATIA (AEC - PERFECTIONNEMENT) | ELC.26 (https://fcsei.cstj.qc.ca/programmes-detudes/attestations-detudes-colleagiales-temps-partiel/perfectionnement-en-cao-et-fao-orientation-genie-mecanique/le-programme/)<br><br>\
							* programme offert en alternance travail-études (ATE)",
				"lien":  "https://www.cstj.qc.ca/" },
					  
		{"id": -1, "titre": "Établissements\nd'enseignement", "graphOpen": "graphEDE"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
	  	{"source": 0, "target": 6}
	  ]
  }
};

//////////////////////Sous SECONDAIRE ET PROFESSIONNEL//////////////////////
graphSECONDAIREETPROFESSIONNEL = function () { return {
  "nodes": [
		{"id": 0, "titre": "Secondaire et\nprofessionnel", "logo": "NAN", "graphOpen": "NAN"},
		
		{"id": 1, "titre": "Centre de formation\nprofessionnelle (CFP)\ndes Moulins", "graphOpen": "NAN",
				"mission": "Le Centre de formation professionnelle (CFP) des Moulins a pour mission d’offrir des services de formation professionnelle de qualité afin de bien répondre aux différents besoins de ses élèves et de ses partenaires du marché du travail. Le CFP des Moulins offre une formation adaptée, rapide et intensive, et s’assure de toujours garder un lien avec les entreprises, et ce, afin de bien répondre à leurs besoins en matière de formation et de concentrer toutes les orientations vers notre priorité, l’élève.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes offerts :</span><br><br>\
 							\u27E9 Comptabilité (DEP)<br>\
							\u27E9 Ébénisterie (DEP)<br>\
							\u27E9 Électricité (DEP)<br>\
							\u27E9 Électromécanique (DEP)<br>\
							\u27E9 Finition de meubles (DEP)<br>\
 							\u27E9 Mécanique industrielle (DEP)<br>\
 							\u27E9 Mise en œuvre des matériaux composites (DEP)<br>\
 							\u27E9 Rembourrage industriel (DEP)<br>\
							\u27E9 Secrétariat (DEP)<br>\
 							\u27E9 Techniques d’usinage (DEP)<br>\
 							\u27E9 Usinage sur machines-outils à commande numérique (ASP)",
				"lien":  "http://www.cfpmoulins.qc.ca" },
						
		{"id": 2, "titre": "École des métiers de\nl'aérospatiale de Montréal\n(ÉMAM)", "graphOpen": "NAN", "symb": ["E"],
				"mission": "L’ÉMAM a pour mission de former des travailleurs compétents qui répondent aux standards de l’industrie de l’aérospatiale au Québec. Grâce à un véritable partenariat, les organismes, associations et entreprises du milieu de l’aérospatiale contribuent à l’atteinte de cet objectif.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Formations dispensées :</span><br><br>\
 							\u27E9 Montage de câbles et de circuits (DEP)<br>\
 							\u27E9 Montage de structures (DEP)<br>\
 							\u27E9 Montage mécanique (DEP)<br>\
 							\u27E9 Techniques d’usinage (DEP)<br>\
 							\u27E9 Tôlerie de précision (DEP)<br>\
 							\u27E9 Traitement de surface (DEP)<br>\
 							\u27E9 Usinage sur machines-outils à commande numérique (ASP)<br>\
 							\u27E9 Outillage (ASP)<br>\
 							\u27E9 Rembourrage d’aéronefs (AFP)",
				"lien":  "http://www.ecole-metiers-aerospatiale.csdm.ca" },
				
		{"id": 3, "titre": "Centre de formation\nprofessionnelle (CFP)\nl'Émergence", "graphOpen": "NAN",
				"mission": "Le mandat du CFP l’Émergence est d’offrir des programmes de formation professionnelle de type DEP, ASP ou AEP.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes offerts : </span><br><br>\
 							\u27E9 Techniques d’usinage (DEP)<br>\
 							\u27E9 Usinage sur machines-outils à commande numérique (ASP)<br>\
		  					\u27E9 Opération d'équipements de production (DEP)",
				"lien":  "http://www.lemergence.qc.ca" },
						
		{"id": 4, "titre": "Centre de formation en\ntransport de Charlesbourg\n(CFTC)", "graphOpen": "NAN",
				"mission": "Le Centre de formation en transport de Charlebourg (CFTC) de la Commission scolaire des Premières-Seigneuries s’est donné pour mission de former et de qualifier une main-d’œuvre professionnelle qui répond aux besoins de l’industrie du transport.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Formation aérospatiale donnée :</span><br><br>\
 							\u27E9 Régulation de vol (DEP)",
				"lien":  "http://www.cftc.qc.ca" },
						
		{"id": 5, "titre": "Centre intégré de mécanique,\nde métallurgie et d’électricité\n(CIMME)", "graphOpen": "NAN",
				"mission": "Le Cimme a pour mission d’offrir un enseignement de qualité permettant aux futurs travailleurs de répondre aux exigences de plus en plus grandes du marché du travail.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes offerts :</span><br><br>\
 							\u27E9 Dessin industriel (DEP)<br>\
 							\u27E9 Électricité (DEP)<br>\
 							\u27E9 Mécanique industrielle de construction et d’entretien (DEP)<br>\
 							\u27E9 Soudage-montage (DEP)<br>\
 							\u27E9 Techniques d’usinage (DEP)<br>\
 							\u27E9 Tôlerie de précision (DEP)<br>\
 							\u27E9 Usinage sur machines-outils à commande numérique (ASP)",
				"lien":  "http://www.cimme.ca" },
						
		{"id": 6, "titre": "Centre de formation\nprofessionnelle (CFP)\nPierre-Dupuy", "graphOpen": "NAN",
				"mission": "Le Centre Pierre-Dupuy a une triple mission : instruire, socialiser et qualifier. Il a également la responsabilité de favoriser chez les élèves le développement d’attitudes d’ouverture sur le monde et le respect de la diversité. Développer chez l’élève des compétences multiples au regard des attitudes, des habiletés techniques et des connaissances qui lui permettront une participation sociale et une insertion professionnelle réussie.<br><br>",
				"activite": "<span style=\"font-weight: bold;\">Programmes offerts :</span><br><br>\
 							\u27E9 Électricité (DEP)<br>\
							\u27E9 Mise en œuvre de matériaux composites (DEP)<br>\
 							\u27E9 Soudage-montage (DEP)<br>\
 							\u27E9 Techniques d’usinage (DEP)<br>\
 							\u27E9 Tôlerie de précision (volet aéronautique ou industriel) (DEP)<br>\
 							\u27E9 Usinage sur machines-outils à commande numérique (ASP)<br>\
		  					\u27E9 Électromécanique de systèmes automatisés (DEP)<br>\
 							\u27E9 Réparation d’appareils électroniques audiovidéos (DEP)",
				"lien":  "http://www.csmv.qc.ca/cfp-pierre-dupuy" },
				
		{"id": -1, "titre": "Établissements\nd'enseignement", "graphOpen": "graphEDE"},
		{"id": -2, "titre": "Accueil", "graphOpen": "graphRoot"}
  ],
  "links": [
		{"source": 0, "target": 1},
		{"source": 0, "target": 2},
		{"source": 0, "target": 3},
		{"source": 0, "target": 4},
		{"source": 0, "target": 5},
		{"source": 0, "target": 6}
	  ]
  }
};

//////////////////////Sous SECONDAIRE ET PROFESSIONNEL//////////////////////


var legendeObj = [
	{"titre": "subvention", "text": ""},
	{"titre": "nationale", "text": ""},
	{"titre": "stage", "text": ""},
	{"titre": "AeroCREATE", "text": "Le programme AeroCREATE est financé par le Conseil de recherches en sciences naturelles et en génie du Canada (CRSNG) et supporté par le Consortium de Recherche et d’innovation en Aérospatial du Québec (CRIAQ), l’université McGill et les autres universités participantes.<br><br>\
												Le programme est dédié aux étudiants aux cycles supérieurs en sciences et ingénierie qui souhaitent travailler dans l'aérospatial. Les étudiants sont choisis pour leur excellence scientifique et leur engagement pour l'industrie. Les étudiants sélectionnés bénéficient de modules de cours supplémentaires destinés à faire d'eux les futurs leaders de l'industrie aéronautique (cours sur les technologies aérospatiales en général et ateliers de développement personnel et professionnel).<br><br>\
												Pour être gradués du programme AeroCREATE, les étudiants doivent avoir complété tous les cours et avoir effectué un stage de 4 à 6 mois en industrie.<br><br>",
									"lien": "http://www.criaq.aero/aerocreate"
	},
	{"titre": "maitrise", "text": "Cette formation pratique orientée vers la conception de produits et l’intégration de systèmes prépare les étudiants à la réalité du secteur aérospatial grâce à des études de cas.<br><br>\
										Ce programme est offert conjointement par l’ÉTS, l’Université Concordia, l’École Polytechnique, l’Université Laval, l’Université McGill et l’Université de Sherbrooke.<br><br>\
										Le Comité sectoriel de main-d’œuvre en aérospatiale au Québec (CAMAQ) coordonne les activités de stage et d’études de cas entre les universités et les industries participantes.<br><br>"						
	},
	{"titre": "dpis", "text": "« Développement de Produits et Intégration de Systèmes (DPIS) » est une option du programme conjoint de Maîtrise en génie aérospatial offert dans 6 universités.<br><br>\
										Cette option est un programme de 12 crédits (qui remplace un stage), divisé en une formation théorique et la réalisation d’un projet d’intégration des systèmes aérospatiaux soumis par l’industrie. Projet supervisé par des professionnels d’entreprises aérospatiales, avec l’implication de partenaires du secteur.<br><br>",
						"lien": "http://www.camaq.org"
	},
	{"titre": "acronyme", "text":
		"\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://adriq.com/\">\u27E9 ADRIQ : Association pour le développement de la recherche et de l’innovation du Québec<\a><br><br>\
\u27E9 AEC/AÉC : Attestation d’études collégiales<br><br>\
\u27E9 AEP : Attestation d’études professionnelles<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://criaq.aero/aerocreate/\">\u27E9 AeroCREATE : Programme Collaborative Research and Training Experience<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://aeroets.etsmtl.ca/\">\u27E9 AÉROÉTS : Regroupement des activités d’enseignement et de recherche de l’École de technologie supérieure (ÉTS)<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://sciencetech.ca/\">\u27E9 AEST : Alliance pour l’enseignement de la science et de la technologie<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.aestq.org/\">\u27E9 AESTQ : Association pour l’enseignement de la science et de la technologie<\a><br><br>\
\u27E9 AFP : Attestation de formation professionnelle<br><br>\
\u27E9 ApproVision : Programme de reconnaissance des acquis et optimisation des compétences pour la gestion de l’approvisionnement (Collège de Bois-de-Boulogne)<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://aqta.ca/\">\u27E9 AQTA : Association québécoise du transport aérien<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cra-arc.gc.ca/\">\u27E9 ARC : Agence du revenu du Canada<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://asfetm.com/\">\u27E9 ASFETM : Association sectorielle – Fabrication d’équipement de transport et de machines<\a><br><br>\
\u27E9 ASP : Attestation de spécialisation professionnelle<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.atac.ca/web/fr/\">\u27E9 ATAC : Association du transport aérien du Canada<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.bdc.ca/\">\u27E9 BDC : Banque de développement du Canada<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://bdeb.qc.ca/\">\u27E9 BdeB : Collège de Bois-de-Boulogne<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://camaq.org/\">\u27E9 CAMAQ : Comité sectoriel de main-d’œuvre en aérospatiale au Québec<\a><br><br>\
\u27E9 CAO : Conception assistée par ordinateur<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://www.mcgill.ca/continuingstudies/fr/programmes-et-cours/aerospatial\">\u27E9 CAPE : Centre aérospatial de perfectionnement/Centre for Aerospace Professional Development<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.caquebec.ca/\">\u27E9 CAQ : Conseil des aéroports du Québec<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://caric.aero/fr/\">\u27E9 CARIC : Consortium en aérospatiale pour la recherche et l’innovation au Canada<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.3ds.com/fr/\">\u27E9 CATIA : Conception assistée tridimensionnelle interactive appliquée<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cbaa-acaa.ca/\">\u27E9 CBAA : Canadian Business Aviation Association<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.avaerocouncil.ca/fr\">\u27E9 CCAA : Conseil canadien de l’aviation et de l’aérospatiale<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://reseautranstech.qc.ca/\">\u27E9 CCTT : Centres collégiaux de transfert de technologie<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cdcq.qc.ca/\">\u27E9 CDCQ : Centre de développement des composites du Québec (Cégep de Saint-Jérôme)<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://cedalma.com/\">\u27E9 CED : Centre d’excellence sur les drones<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://emploi-metropole.org/\">\u27E9 CEM : Conseil emploi métropole<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cefrio.qc.ca/\">\u27E9 CEFRIO : Centre facilitant la recherche et l’innovation dans les organisations<\a><br><br>\
\u27E9 CFIT : Impact sans perte de contrôle/controlled flight into terrain<br><br>\
\u27E9 CFP : Centre de formation professionnelle<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://mai-aero.ca/fr/quatre-instituts/\">\u27E9 CFPCIA : Centre de formation pratique en conception et en innovation en aérospatiale (SIGMA+/AÉROSPATIALE) (Université Laval)<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://cftc.qc.ca/\">\u27E9 CFTC : Centre de formation en transport de Charlesbourg<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.concordia.ca/encs/aerospace.html\">\u27E9 CIADI : Concordia Institute of Aerospace Design & Innovation<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://cimme.centrecsmb.com/\">\u27E9 CIMME : Centre intégré de mécanique, de métallurgie et d’électricité<\a><br><br>\
\u27E9 CMM : Machine à mesurer les coordonnées tridimensionnelles<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cmqtr.qc.ca/\">\u27E9 CMQ : Centre de métallurgie du Québec (Cégep de Trois-Rivières)<\a><br><br>\
\u27E9 CNC : Commande numérique par calculateur/computer numerical control<br><br>\
\u27E9 CND : Contrôle non destructif<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cnesst.gouv.qc.ca/\">\u27E9 CNESST : Commission des normes, de l’équité, de la santé et de la sécurité du travail<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.nrc-cnrc.gc.ca/index.html\">\u27E9 CNRC : Conseil national de recherches Canada<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cpmt.gouv.qc.ca/\">\u27E9 CPMT : Commission des partenaires du marché du travail<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://perfectionnement.polymtl.ca/\">\u27E9 CPPM : Carrefour Perfectionnement Polytechnique Montréal<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://www.cpq.qc.ca/\">\u27E9 CPQ : Conseil du patronat du Québec<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cqfa.ca/public/accueil.html\">\u27E9 CQFA : Centre québécois de formation aéronautique (Cégep de Chicoutimi)<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.criaq.aero/\">\u27E9 CRIAQ : Consortium de recherche et d’innovation en aérospatiale au Québec<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://www.criq.qc.ca/fr/\">\u27E9 CRIQ : Centre de recherche industrielle du Québec<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.nserc-crsng.gc.ca/\">\u27E9 CRSNG : Conseil de recherches en sciences naturelles et en génie du Canada<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cegepmontpetit.ca/cta\">\u27E9 CTA : Centre technologique en aérospatiale (cégep Édouard-Montpetit)<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.nrc-cnrc.gc.ca/fra/solutions/installations/ctfa_index.html\">\u27E9 CTFA : Centre des technologies de fabrication en aérospatiale du Conseil national de recherches Canada (CNRC)<\a><br><br>\
\u27E9 DEC : Diplôme d’études collégiales<br><br>\
\u27E9 DEP : Diplôme d’études professionnelles<br><br>\
\u27E9 DES : Diplôme d’études secondaires<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.edsc.gc.ca/\">\u27E9 EDSC : Emploi et Développement social Canada<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://ecole-metiers-aerospatiale.csdm.ca/\">\u27E9 ÉMAM : École des métiers de l’aérospatiale de Montréal<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cegepmontpetit.ca/ecole-nationale-d-aerotechnique\">\u27E9 ÉNA : École nationale d’aérotechnique (Cégep Édouard-Montpetit)<\a><br><br>\
\u27E9 END : Essais non destructifs<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://etsmtl.ca/\">\u27E9 ÉTS : École de technologie supérieure<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.frqnt.gouv.qc.ca/accueil\">\u27E9 FRQNT : Fonds de recherche du Québec – Nature et technologies<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.fsg.ulaval.ca/accueil/\">\u27E9 FSG_UL : Faculté des sciences et de génie de l’Université Laval<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://gardn.org/\">\u27E9 GARDN : Groupement Aéronautique de Recherche et Développement en eNvironnement<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://mai-aero.ca/\">\u27E9 IAM/MAI : Instituts Aérospatiaux de Montréal/Montréal Aerospace Institutes<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.casi.ca/\">\u27E9 IASC/CASI : Institut aéronautique et spatial du Canada/Canadian Aeronautics and Space Institute<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.iata.org/\">\u27E9 IATA : Association internationale du transport aérien/International Air Transport Association<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://aeroets.etsmtl.ca/pages/fr/icia/presentation.php\">\u27E9 ICIA : Institut de conception et d’innovation en aérospatiale (École de technologie supérieure)<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://mai-aero.ca/fr/quatre-instituts/\">\u27E9 IFC-GAS : Institut de formation et de conception en génie aérospatial de Sherbrooke<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.polymtl.ca/iicap/mission/index.php\">\u27E9 IICAP : Institut d’innovation et de conception en aérospatiale de l’École Polytechnique<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.irdq.ca/\">\u27E9 IRDQ : Infrastructure en recherche et développement du Québec<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://www.canada.ca/fr/innovation-sciences-developpement-economique.html\">\u27E9 ISDE : Innovation, Sciences et Développement économique Canada<\a><br><br>\
\u27E9 LESIAQ : Laboratoire d’enseignement des systèmes intégrés en aérospatiale au Québec<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.education.gouv.qc.ca/\">\u27E9 MEES : Ministère de l’Éducation et de l’Enseignement supérieur<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://qc.cme-mec.ca/\">\u27E9 MEQ : Manufacturiers et Exportateurs du Québec<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.economie.gouv.qc.ca/\">\u27E9 MESI : Ministère de l’Économie, de la Science et de l’Innovation<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.mcgill.ca/miae/mcgill-institute-aerospace-engineering\">\u27E9 MIAE : Institut de génie aérospatial de l’Université McGill<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.mitacs.ca/\">\u27E9 MITACS : Mathematics of Information Technology and Complex Systems (organisation nationale de recherche)<\a><br><br>\
\u27E9 MNPS : Spécifications de performances minimales de navigation/minimum navigation performance specification<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.mess.gouv.qc.ca/\">\u27E9 MTESS : Ministère du Travail, de l’Emploi et de la Solidarité sociale<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.icao.int/Pages/FR/default_FR.aspx\">\u27E9 OACI : Organisation de l’aviation civile internationale<\a><br><br>\
\u27E9 OHRACIO Aéro : Offre Hybride de Reconnaissance des Acquis et des Compétences Intégrée aux Organisations : Programme de reconnaissance des acquis et optimisation des compétences des gestionnaires de l’industrie aéronautique (Collège de Bois-de-Boulogne)<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.oiq.qc.ca/\">\u27E9 OIQ : Ordre des ingénieurs du Québec<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.nrc-cnrc.gc.ca/fra/index.html\">\u27E9 ORT : Organisation de recherche et de technologie<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"https://www.tc.gc.ca/fra/programmes/aeroports-paia-menu-327.htm\">\u27E9 PAIA : Programme d’aide aux immobilisations aéroportuaires (Transports Canada)<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.nrc-cnrc.gc.ca/fra/pari/index.html\">\u27E9 PARI : Programme d’aide à la recherche industrielle (Conseil national de recherches Canada [CNRC])<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.dec-ced.gc.ca/fra/programmes/pdeq/index.html\">\u27E9 PDEQ : Programme de développement économique du Québec<\a><br><br>\
\u27E9 PHQ : Personnel hautement qualifié<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.criaq.aero/Pages/Detail/7378450216/10579844776/_programme_dinitiation_a_la_recherche_en_aerospatiale_pira_pour_les_etudiants1_de_1er_cycle.html\">\u27E9 PIRA : Programme d’initiation à la recherche en aérospatiale (Consortium de recherche et d’innovation en aérospatiale au Québec [CRIAQ])<\a><br><br>\
\u27E9 PME : Petites et moyennes entreprises<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.polymtl.ca/\">\u27E9 Poly : École Polytechnique de Montréal<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.prima.ca/\">\u27E9 PRIMA QUÉBEC : Pôle de recherche et d’innovation en matériaux avancés au Québec<\a><br><br>\
\u27E9 R&D : Recherche et développement<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.cra-arc.gc.ca/txcrdt/sred-rsde/menu-fra.html\">\u27E9 RS&DE : Programme de la recherche scientifique et développement expérimental (Agence du revenu du Canada [ARC])<\a><br><br>\
\u27E9 RVSM : Minimum de séparation verticale réduit/Reduced Vertical Separation Minima<br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://sa2ge.org/\">\u27E9 SA²GE : Regroupement pour le développement de l’avion plus écologique/Systèmes aéronautiques d’avant-garde pour l’environnement<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.nserc-crsng.gc.ca/Professors-Professeurs/RPP-PP/Engage-Engagement_fra.asp\">\u27E9 SEP : Subvention d’engagement partenarial (Conseil de recherches en sciences naturelles et en génie du Canada [CRSNG])<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://www.tc.gc.ca/fra/aviationcivile/normes/sgs-menu-618.htm\">\u27E9 SGS : Système de gestion de la sécurité<\a><br><br>\
<a class=\"linkVisited\" target=\"_blank\" href=\"http://wia-canada.org/\">\u27E9 WIA-Canada : Women in Aerospace Canada<\a>\
		"},
];



var graphExtend = 
"<div class='mindmap'>\
	\
	<ol class='children children_leftbranch'>\
		\
		<li class='children__item'>\
			<div class='nodeExt'>Établissements d'enseignement</div>	\
			<ol class='children'>\
				<li class='children__item'><div class='nodeExt'>Universitaire</div>\
					<ol class='children'>\
						<li class='children__item'><div class='nodeExt'>École de technologie supérieure (ÉTS)</div></li>\
						<li class='children__item'><div class='nodeExt'>Polytechnique Montréal</div></li>\
						<li class='children__item'><div class='nodeExt'>Université Concordia</div></li>\
						<li class='children__item'><div class='nodeExt'>Université de Sherbrooke</div></li>\
						<li class='children__item'><div class='nodeExt'>Université du Québec à Chicoutimi (UQAC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Université du Québec à Trois-Rivières (UQTR)</div></li>\
						<li class='children__item'><div class='nodeExt'>Université Laval</div></li>\
						<li class='children__item'><div class='nodeExt'>Université McGill</div></li>\
					</ol>\
				</li>\
				\
				<li class='children__item'><div class='nodeExt'>Collégial et technique</div>\
					<ol class='children'>\
						<li class='children__item'><div class='nodeExt'>Cégep de Saint-Laurent</div></li>\
						<li class='children__item'><div class='nodeExt'>Cégep de Saint-Jérôme</div></li>\
						<li class='children__item'><div class='nodeExt'>Cégep de Trois-Rivières</div></li>\
						<li class='children__item'><div class='nodeExt'>Cégep du Vieux Montréal</div></li>\
						<li class='children__item'><div class='nodeExt'>Centre québécois de formation aéronautique (CQFA) (Cégep de Chicoutimi)</div></li>\
						<li class='children__item'><div class='nodeExt'>École nationale d'aérotechnique (ÉNA) (Cégep Édouard-Montpetit)</div></li>\
					</ol>\
				</li>\
				\
				<li class='children__item'><div class='nodeExt'>Secondaire et professionnel</div>\
					<ol class='children'>\
						<li class='children__item'><div class='nodeExt'>Centre de formation en transport de Charlesbourg (CFTC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Centre de formation professionnelle (CFP) des Moulins</div></li>\
						<li class='children__item'><div class='nodeExt'>Centre de formation professionnelle (CFP) l'Émergence</div></li>\
						<li class='children__item'><div class='nodeExt'>Centre de formation professionnelle (CFP) Pierre-Dupuy</div></li>\
						<li class='children__item'><div class='nodeExt'>Centre intégré de mécanique, de métallurgie et d’électricité (CIMME)</div></li>\
						<li class='children__item'><div class='nodeExt'>École des métiers de l'aérospatiale de Montréal (ÉMAM)</div></li>\
					</ol>\
				</li>\
			</ol>\
		</li>\
		\
		<li class='children__item'>\
			<div class='nodeExt'>Organismes pour le soutien au financement de la formation</div>\
				<ol class='children'>\
				<li class='children__item'><div class='nodeExt'>Fédéral</div>\
					<ol class='children'>\
						<li class='children__item'><div class='nodeExt'>Agence du revenu du Canada (ARC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Banque de développement du Canada (BDC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Conseil national de recherches Canada (CNRC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Développement économique Canada</div></li>\
						<li class='children__item'><div class='nodeExt'>Emploi et Développement social Canada (EDSC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Innovation, Sciences et Développement économique Canada (anciennement Industrie Canada)</div></li>\
						<li class='children__item'><div class='nodeExt'>Réseau Entreprises Canada</div></li>\
						<li class='children__item'><div class='nodeExt'>Transports Canada</div></li>\
					</ol>\
				</li>\
				\
				<li class='children__item'><div class='nodeExt'>Provincial</div>\
					<ol class='children'>\
						<li class='children__item'><div class='nodeExt'>Association sectorielle – Fabrication d'équipement de transport et de machines (ASFETM)</div></li>\
						<li class='children__item'><div class='nodeExt'>Commission des normes, de l'équité, de la santé et de la sécurité du travail (CNESST)</div></li>\
						<li class='children__item'><div class='nodeExt'>Commission des partenaires du marché du travail (CPMT)</div></li>\
						<li class='children__item'><div class='nodeExt'>Emploi-Québec</div></li>\
						<li class='children__item'><div class='nodeExt'>Investissement Québec (IQ)</div></li>\
						<li class='children__item'><div class='nodeExt'>Ministère de l'Économie, de la Science et de l'Innovation (MESI)</div></li>\
						<li class='children__item'><div class='nodeExt'>Ministère de l'Éducation et de l'Enseignement supérieur (MEES)</div></li>\
						<li class='children__item'><div class='nodeExt'>Ministère de l'Immigration, de la Diversité et de l'Inclusion</div></li>\
						<li class='children__item'><div class='nodeExt'>Revenu Québec</div></li>\
					</ol>\
				</li>\
				\
				<li class='children__item'><div class='nodeExt'>Régional</div>\
					<ol class='children'>\
						<li class='children__item'><div class='nodeExt'>Bureaux régionaux d'Emploi-Québec / Centres locaux d’emploi (CLE) </div></li>\
					</ol>\
				</li>\
			</ol>\
		</li>\
		\
		<li class='children__item'>\
			<div class='nodeExt'>Formation par la recherche</div>\
			<ol class='children'>\
						<li class='children__item'><div class='nodeExt'>Centre de recherche industrielle du Québec (CRIQ)</div></li>\
						<li class='children__item'><div class='nodeExt'>Centre facilitant la recherche et l'innovation dans les organisations (CEFRIO)</div></li>\
						<li class='children__item'><div class='nodeExt'>Centre technologique en aérospatiale (CTA)</div></li>\
						<li class='children__item'><div class='nodeExt'>Conseil de recherches en sciences naturelles et en génie du Canada (CRSNG)</div></li>\
						<li class='children__item'><div class='nodeExt'>Conseil national de recherches Canada (CNRC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Consortium de recherche et d'innovation en aérospatiale au Québec (CRIAQ)</div></li>\
						<li class='children__item'><div class='nodeExt'>Consortium en aérospatiale pour la recherche et l’innovation au Canada (CARIC)</div></li>\
						<li class='children__item'><div class='nodeExt'>Fonds de recherche du Québec Nature et technologies (FRQNT) </div></li>\
						<li class='children__item'><div class='nodeExt'>Groupement Aéronautique de Recherche et de Développement en eNvironnement (GARDN)</div></li>\
						<li class='children__item'><div class='nodeExt'>Infrastructure en recherche et développement du Québec (IRDQ)</div></li>\
						<li class='children__item'><div class='nodeExt'>Ministère de l'Économie, de la Science et de l'Innovation (MESI)</div></li>\
						<li class='children__item'><div class='nodeExt'>MITACS</div></li>\
						<li class='children__item'><div class='nodeExt'>Pôle de recherche et d'innovation en matériaux avancés au Québec (PRIMA QUÉBEC)</div></li>\
						<li class='children__item'><div class='nodeExt'>QuébecInnove</div></li>\
						<li class='children__item'><div class='nodeExt'>Systèmes aéronautiques d'avant-garde pour l'environnement (SA²GE)</div></li>\
			</ol>\
		</li>\
		\
	</ol>\
	\
	\
	<div style='border: 0px;' class='nodeExt_root nodeExt'><img style='margin-top: -40%; width: 200px;' src='img/accueil.png'/></div>\
\
\
	<ol class='children children_rightbranch'>\
		<li class='children__item'>\
				<div class='nodeExt'>Formation continue et perfectionnement</div>	\
				<ol class='children'>\
					<li class='children__item'><div class='nodeExt'>AéroFormation</div>\
						<ol class='children'>\
							<li class='children__item'><div class='nodeExt'>Centre aérospatial de perfectionnement (CAPE)</div></li>\
							<li class='children__item'><div class='nodeExt'>Service aux entreprises de l'ÉMAM</div></li>\
							<li class='children__item'><div class='nodeExt'>Service aux entreprises de l'ÉNA</div></li>\
						</ol>\
					</li>\
					<li class='children__item'><div class='nodeExt'>Carrefour Perfectionnement Polytechnique Montréal (CPPM)</div></li>\
							<li class='children__item'><div class='nodeExt'>Cégep André-Laurendeau</div></li>\
							<li class='children__item'><div class='nodeExt'>Centre d'excellence sur les drones (CED)</div></li>\
							<li class='children__item'><div class='nodeExt'>Centre de développement des composites du Québec (CDCQ) du Cégep de Saint-Jérôme</div></li>\
							<li class='children__item'><div class='nodeExt'>Centres de formation dans les entreprises</div></li>\
							<li class='children__item'><div class='nodeExt'>Centre de formation en transport de Charlesbourg (CFTC)</div></li>\
							<li class='children__item'><div class='nodeExt'>Centre de métallurgie du Québec (CMQ) du Cégep de Trois-Rivières</div></li>\
							<li class='children__item'><div class='nodeExt'>Centre du savoir sur mesure de l'UQAC (CÉSAM)</div></li>\
							<li class='children__item'><div class='nodeExt'>Centre québécois de formation aéronautique (CQFA)</div></li>\
							<li class='children__item'><div class='nodeExt'>Collège de Bois-de-Boulogne</div></li>\
				</ol>\
			</li>\
			\
			<li class='children__item'>\
				<div class='nodeExt'>Relève de main-d'oeuvre</div>\
				<ol class='children'>\
							<li class='children__item'><div class='nodeExt'>Cadets de l'Air</div></li>\
							<li class='children__item'><div class='nodeExt'>Centre des sciences de Montréal</div></li>\
							<li class='children__item'><div class='nodeExt'>Cosmodôme</div></li>\
							<li class='children__item'><div class='nodeExt'>Expo-sciences</div></li>\
							<li class='children__item'><div class='nodeExt'>Folie Technique (campus Polytechnique Montréal)</div></li>\
							<li class='children__item'><div class='nodeExt'>Fusion Jeunesse</div></li>\
							<li class='children__item'><div class='nodeExt'>Programme Aéro2</div></li>\
							<li class='children__item'><div class='nodeExt'>Réseau Technoscience</div></li>\
							<li class='children__item'><div class='nodeExt'>Robotique FIRST Québec</div></li>\
				</ol>\
			</li>\
			\
			<li class='children__item'>\
				<div class='nodeExt'>Organismes de soutien</div>\
				<ol class='children'>\
					<li class='children__item'><div class='nodeExt'>International</div>\
						<ol class='children'>\
							<li class='children__item'><div class='nodeExt'>Association internationale du transport aérien (IATA)</div></li>\
							<li class='children__item'><div class='nodeExt'>Organisation de l'aviation civile internationale (OACI)</div></li>\
						</ol>\
					</li>\
					\
					<li class='children__item'><div class='nodeExt'>National</div>\
						<ol class='children'>\
							<li class='children__item'><div class='nodeExt'>Association du transport aérien du Canada (ATAC)</div></li>\
							<li class='children__item'><div class='nodeExt'>Canadian Business Aviation Association (CBAA)</div></li>\
							<li class='children__item'><div class='nodeExt'>Conseil canadien de l'aviation et de l'aérospatiale (CCAA)</div></li>\
							<li class='children__item'><div class='nodeExt'>Women in Aerospace Canada (WIA-Canada) </div></li>\
						</ol>\
					</li>\
					\
					<li class='children__item'><div class='nodeExt'>Provincial</div>\
						<ol class='children'>\
							<li class='children__item'><div class='nodeExt'>Aéro Montréal</div></li>\
							<li class='children__item'><div class='nodeExt'>Association pour le développement de la recherche et de l'innovation du Québec (ADRIQ)</div></li>\
							<li class='children__item'><div class='nodeExt'>Association québécoise du transport aérien (AQTA) </div></li>\
							<li class='children__item'><div class='nodeExt'>Comité sectoriel de main-d’œuvre en aérospatiale au Québec (CAMAQ)</div></li>\
							<li class='children__item'><div class='nodeExt'>Conseil des aéroports du Québec (CAQ)</div></li>\
							<li class='children__item'><div class='nodeExt'>Conseil du patronat du Québec (CPQ)</div></li>\
							<li class='children__item'><div class='nodeExt'>Manufacturiers et Exportateurs du Québec (MEQ)</div></li>\
						</ol>\
					</li>\
					\
					<li class='children__item'><div class='nodeExt'>Régional</div>\
						<ol class='children'>\
							<li class='children__item'><div class='nodeExt'>Conseil emploi métropole (CEM)</div></li>\
							<li class='children__item'><div class='nodeExt'>Emploi Nexus</div></li>\
							<li class='children__item'><div class='nodeExt'>Montréal International</div></li>\
							<li class='children__item'><div class='nodeExt'>Instituts Aérospatiaux de Montréal (IAM)</div>\
								<ol class='children'>\
									<li class='children__item'><div class='nodeExt'>AÉROÉTS</div></li>\
									<li class='children__item'><div class='nodeExt'>Concordia Institute of Aerospace Design & Innovation (CIADI)</div></li>\
									<li class='children__item'><div class='nodeExt'>Institut d'innovation et de conception en aérospatiale de Polytechnique (IICAP)</div></li>\
									<li class='children__item'><div class='nodeExt'>Institut de génie aérospatial de McGill (MIAE)</div></li>\
									<li class='children__item'><div class='nodeExt'>Institut de formation et de conception en génie aéronautique de Sherbrooke</div></li>\
									<li class='children__item'><div class='nodeExt'>SIGMA+/AÉROSPATIALE Centre de formation pratique en conception et en innovation en aérospatiale (CFPCIA)</div></li>\
								</ol>\
							</li>\
						</ol>\
					</li>\
				</ol>\
			</li>\
	</ol>\
</div>";
