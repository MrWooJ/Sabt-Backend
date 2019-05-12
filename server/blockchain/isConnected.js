module.exports = async web3 => {
	const result = await web3.eth.net.isListening();
	return result;
};
