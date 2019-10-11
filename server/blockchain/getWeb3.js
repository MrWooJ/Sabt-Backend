const Web3 = require('web3');

let app = rootRequire('server/server');

module.exports = function() {

	const vars = app.vars;

	let env = process.env.NODE_ENV || vars.config.environmentType.development;
	let providerUrl = 
		vars.config.blockchainData.production.baseURL + 
		vars.config.blockchainData.production.apiKey;
	if (env === vars.config.environmentType.development) {
		providerUrl = 
		vars.config.blockchainData.development.baseURL + 
		vars.config.blockchainData.development.apiKey;
	}

  const provider = new Web3.providers.HttpProvider(providerUrl);
  const web3 = new Web3('http://');
  web3.setProvider(provider);
	const privateKey = vars.config.blockchainData.privateKey;
	const account = web3.eth.accounts.privateKeyToAccount(privateKey);
	web3.eth.accounts.wallet.add(account);
	web3.eth.defaultAccount = account.address;

	return web3;
};
