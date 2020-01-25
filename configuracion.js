Lol
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
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar",
			clockBold: true
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "newsfeed",
			position: "middle_center",
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
				broadcastNewsFeeds: true,
				// broadcastNewsUpdates: true,
				showDescription: true,
				// wrapDescription: true,
				// updateInterval: 1000
			}
		},
/*		
		{
			module: "MMM-EmbedYoutube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
			position: "top_left",	// This can be any of the regions.
			config: {
				// See 'Configuration options' in README.md for more information.
				playlist: "PLK6ffq7bkNBwAnC97HfFYUvhCmeCrb3",
				loop: true,
				autoplay: true
			}
		},
*/
		{
			module: "MMM-MyStandings",
			position: "bottom_bar",
			config: {
				updateInterval: 60 * 60 * 1000, // every 60 minutes
				rotateInterval: 5 * 1000, // every 1 minute
				sports: [
					{ league: "NBA", groups: ["Atlantic", "Central", "Southeast", "Northwest", "Pacific", "Southwest"] },
				],
				nameStyle: "short",
				showLogos: true,
				useLocalLogos: true,
				showByDivision: true,
				fadeSpeed: 2000,
			}
  		},
		{
            		module: 'MMM-Carousel',
            		config: {
                		transitionInterval: 30000,
                		ignoreModules: ['clock'],
                		mode: 'slides',
                		slides: [
					// ['MMM-EmbedYoutube'],
                    			['newsfeed', 'MMM-News-QR'],
					['MMM-MyStandings'],
					['MMM-APOD']
                		]
            		}
        	},
		{
    			module: 'MMM-News-QR',
    			config: {
        			// possible values (polling, push)
        			// push only works with MagicMirror 2.8+ and broadcastNewsFeeds activated
        			updateType : 'push',
        			// Interval to check the news
        			// only needed if updateType is polling
        			interval: 2000,
        			// Animation between change
        			animationSpeed: 2500,
        			// Color of the Code
        			colorDark: '#fff',
        			// Background Color
        			colorLight: '#000',
        			// Size of the Code
        			imageSize: 150
    			}
		},
		{
			module: "MMM-APOD",
			position: "fullscreen_below",
			config: {
				appid: "DEMO_KEY" // NASA API key (api.nasa.gov)
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
