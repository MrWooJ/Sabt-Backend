const getWeb3 = require('./getWeb3');
const getContract = require('./getContract');

let app = rootRequire('server/server');

module.exports = async hash => {

	const vars = app.vars;

	const web3 = getWeb3();
	const Sabt = await getContract();

	return new Promise((resolve, reject) => {
		Sabt.methods
			.storeHash(hash)
			.send({
				from: web3.eth.defaultAccount,
				gas: 300000,
				gasPrice: web3.utils.toWei(vars.config.const.gasPrice, 'gwei')
			})
			.on('transactionHash', hash => {
				resolve(hash);
			})
			.on('error', error => reject(error));
	});
};
