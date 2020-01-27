/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8081,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "es",
	timeFormat: 12,
	units: "metric",

	modules: [
/*
		{
			module: 'iFrame',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: "http://www.granma.cu/",
					width: "100%", // Optional. Default: 100%
					height: "100px", //Optional. Default: 100px
			}
		},
*/
/*
		{
			module: 'MMM-iFrame-Ping',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				url: "http://www.juventudrebelde.cu", //url to display
				height:"100%",
				width:"100%",
				autoRefresh: true, //set to false for video
				updateInterval: 1, //in min. Only if autoRefresh: true
				displayLastUpdate: true,
				width: "100%", // Optional. Default: 100%
				height: "400px", //Optional. Default: 100px
				scrolling: "no"
			}
		},
*/
/*
		{
			module: 'MMM-SmartWebDisplay',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
				height:"100%", //hauteur du cadre en pixel ou %
				width:"100%", //largeur
               			updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
                		NextURLInterval: 0.5, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
                		// displayLastUpdate: true, //to display the last update of the URL
				// displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
                		url: ["http://www.juventudrebelde.cu","http://www.granma.cu"], //source of the URL to be displayed
				// url: ["http://magicmirror.builders/", "https://www.youtube.com/embed/Qwc2Eq6YXTQ?autoplay=1"],
                		scrolling: "no" // allow scrolling or not. html 4 only
			}
		},
*/
		{
			module: "MMM-EmbedYoutube", //
			position: "middle_center",	// This can be any of the regions.
			config: {
				// See 'Configuration options' in README.md for more information.
				// video_id: "erJn6euu3V0",
                        	autoplay:true,
                        	controls: false,
                        	showinfo: true,
                        	// video_list:["H8huKJEYsRc"],
                        	// loop:true,
				playlist: "PLjp5Tu76sQAWtysTr7yALUYk6LXAvsDAW"
			}
		},
/*
		{
		        module: 'MMM-iFrame',
		        position: 'middle_center',	// This can be any of the regions.
		        config: {
			// See 'Configuration options' for more information.
				url: ["http://www.juventudrebelde.cu","http://www.granma.cu","http://www.beisbolcubano.cu/serie_actual/"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
				width:"100%", // Optional. Default: 100%
				height: "300px", //Optional. Default: 100px
                                updateInterval: 0.5 * 60 * 1000
			}
		},
*/
/*
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar",
			clockBold: true
		},
*/
		{
			module: "clock",
			position: "top_left"
		},
/*
		{
  			module: "MMM-MyScoreboard",
  			position: "middle_center",
  			// classes: "default everyone",
  			header: "My Scoreboard",
  			config: {
    				showLeagueSeparators: true,
    				colored: true,
    				viewStyle: "smallLogos",
    				sports: [
      					{
        					league: "NBA"
      					},
      					{
        					league: "MLB"
      					},
					{
						league: "ESP_LALIGA"
					},
					{
						league: "FRA_LIGUE_1"
					},
					{
						league: "GER_BUNDESLIGA"
					},
					{
						league: "ITA_SERIE_A"
					},
					{
						league: "UEFA_CHAMPIONS"
					},
					{
						league: "ENG_PREMIERE_LEAGUE"
					},
    				]
  			}
		},
*/
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "El Tiempo",
						url: "http://www.insmet.cu/asp/genesis.asp?TB0=RSSFEED",
					},
					{
						title: "Cubadebate",
						url: "http://www.cubadebate.cu/feed/"
					},
					{
						title: "Granma",
						url: "http://www.granma.cu/feed"
					},
					{
						title: "Prensa Latina - Deportes",
						url: "https://www.prensa-latina.cu/index.php?o=vc&id=deportes&SEO=canalrss-deportes"
					},
					{
						title: "Microcontroller Space",
						url: "https://microcontrollerspace.000webhostapp.com/feed"
					}
					
				],
				showSourceTitle: true,
				// wrapTitle: true,
				showPublishDate: true,
				// broadcastNewsFeeds: true,
				// broadcastNewsUpdates: true,
				showDescription: true,
				// wrapDescription: true,
				// updateInterval: 1000
				updateInterval: 20 * 1000,
			}
		},
		{
			module: "MMM-MyStandings",
			position: "bottom_bar",
			config: {
				updateInterval: 60 * 60 * 1000, // every 60 minutes
				rotateInterval: 5 * 1000, // every 1 minute
				sports: [
/*
					{
						league: "ESP_LALIGA",
					},
					{
						league: "GER_BUNDESLIGA",
					},
					{
						league: "ITA_SERIE_A",
					},
					{
						league: "ENG_PREMIERE_LEAGUE",
					},
					{
						league: "UEFA_EUROPEAN_CHAMPIONSHIP",
					},
*/
					{ 
						league: "NBA", groups: ["Atlantic", "Central", "Southeast", "Northwest", "Pacific", "Southwest"] 
					},
				],
				nameStyle: "short",
				showLogos: true,
				useLocalLogos: true,
				showByDivision: true,
				fadeSpeed: 2000,
			}
  		},

/*
		{
			module: "MMM-APOD",
			position: "middle_center",
			config: {
				appid: "DEMO_KEY", // NASA API key (api.nasa.gov)
				maxMediaWidth: 500,
				maxMediaHeight: 300,
			}
		},
*/
/*
		{
            		module: 'MMM-Carousel',
            		config: {
                		transitionInterval: 30000,
                		ignoreModules: ['clock', 'currentweather'],
                		mode: 'slides',
                		slides: [
					// ['MMM-MyScoreboard'],
					['MMM-ImageSlideshow'],
					['MMM-soccer'],
					['MMM-yrWeather'],
                    			['newsfeed', 'MMM-News-QR'],
					['MMM-MyStandings'],
					['MMM-APOD']
                		]
            		}
        	},
*/
		{
            		module: 'MMM-Carousel',
            		config: {
                		transitionInterval: 30 * 1000,
                		ignoreModules: ['clock', 'currentweather'],
                		mode: 'positional',
				middle_center: {
					enabled: true, 
					ignoreModules: [], 
					overrideTransitionInterval: 30 * 1000,

				},
				bottom_bar: {
					enabled: true, 
					ignoreModules: [], 
					overrideTransitionInterval: 60 * 1000,
				}
            		}
        	},
		{
			module: 'MMM-yrWeather',
			position: 'bottom_bar', // you may choose any location
			config: {
				location: 'Cuba/Pinar_del_Río/Pinar_del_Rio', // required
				updateInterval: 1800000 // optional (1000 * 60 * 30 = 1800000 = 30 minutes)
			}
		},
/*
		{
			module: 'MMM-YrThen',
			position: 'top_right',
			config: {
				location: '2-3544091',
				numDays: 1,
				title: "El Tiempo"
			}
		},
*/
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Pinar del Río",
				locationID: "3544091",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "3b5acb953f21716689601376e3ad59b0",
                                units:"metric",
                                animationSpeed:2500,
                                showFeelsLike:false,
                                lang:"es",
                                showWindDirection:true,
                                showHumidity:true,
                                degreeLabel:true,
                                useKMPHWind:false,
                                useBeaufort:false,
                                onlyTemp:false
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Próximos días",
			config: {
				location: "Pinar del Río",
				locationID: "3544091",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "3b5acb953f21716689601376e3ad59b0",
                                units:"metric"
			}
		},

		{
			module: 'MMM-ImageSlideshow',
			position: 'fullscreen_below',
			config: {
				imagePaths: ['modules/MMM-ImageSlideshow/exampleImages'],
				fixedImageWidth: 1920,
				fixedImageHeight:1080,
				//originalWidthPx:1920,
				//originalHeightPx:1080,
			}
		},

		{
    			module: 'MMM-soccer',
    			position: 'bottom_bar',
    			config: {
				api_key: '036a7567bfae4473aea8af011c8363d4',
				show: ['SPAIN', 'GERMANY'],
    			}
		},
		
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
