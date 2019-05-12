module.exports = async web3 => {
	const networkId = await web3.eth.net.getId();
	return networkId;
};
