module.exports = {
	privateKey: process.env.SABT_PRIVATEKEY,
	development: {
		baseURL: process.env.SABT_DEVELOPMENT_BASEURL,
		apiKey: process.env.SABT_DEVELOPMENT_APIKEY
	},
	production: {
		baseURL: process.env.SABT_PRODUCTION_BASEURL,
		apiKey: process.env.SABT_PRODUCTION_APIKEY
	}
};