const fs = require('fs');
const path = require('path');
const getWeb3 = require('./getWeb3');
const getNetworkId = require('./getNetworkId');

module.exports = async function() {
	let contractFile = fs.readFileSync(
		path.join(__dirname, '../../build/contracts/HashStore.json')
	);
	contractFile = JSON.parse(contractFile);
	
	const web3 = getWeb3();
	const networkId = await getNetworkId(web3);
	const abi = contractFile.abi;
	const address = contractFile.networks[networkId].address;

	return new web3.eth.Contract(abi, address);
};
