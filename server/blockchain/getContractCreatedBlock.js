const getContract = require('./getContract');
const winston = require('winston');

module.exports = async () => {
	const Sabt = await getContract();

	return new Promise((resolve, reject) => {
		Sabt.getPastEvents(
			'ContractCreated',
			{ filter: {}, fromBlock: 0, toBlock: 'latest' },
			async (error, events) => {
				if (error) {
					winston.debug(`Event Error: ${error.message}`);
					return reject(error);
				}
				resolve(events[0].blockNumber);
			}
		);
	});
};
