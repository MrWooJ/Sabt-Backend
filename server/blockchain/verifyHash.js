const getContract = require('./getContract');

module.exports = async hash => {
	const Sabt = await getContract();
	const result = await Sabt.methods.verifyHash(hash).call();
	return result;
};
