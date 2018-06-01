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
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "de",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		/*{
			module: "calendar",
			header: "Kalender",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					},
				]
			}
		},*/
		{
			module: "compliments",
			position: "middle_center"
		},
		/*{
			module: 'MMM-forecast-io',
			position: 'top_right',  // This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				apiKey: '1f5a6e41ffe209c6947e83a40d3088d6', // Dark Sky API key.
				// Only required if geolocation doesn't work:
				latitude: 48.682075,
				longitude: 9.015431,
				//alwaysShowPrecipitationGraph: true
			}
		},*/
		{
			module: "currentweather",
			header: "Wetter in Böblingen",
			position: "top_right",
			config: {
				location: "Böblingen, DE",
				locationID: "2947444",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "8ae8fc50e4d19604379e30356a3439f8",
				//units: "metric",
				//onlyTemp: true,
				//showFeelsLike: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			//header: "Wettervorhersage",
			config: {
				location: "Böblingen, DE",
				locationID: "2947444",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "8ae8fc50e4d19604379e30356a3439f8",
				units: "metric",
				colored: "true",
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					/*{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},*/
					{
						title: "ntv",
						url: "https://www.n-tv.de/rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true,
				updateInterval: 15000
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
