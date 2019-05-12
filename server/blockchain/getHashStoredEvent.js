const getContract = require('./getContract');

module.exports = async from => {
	const Sabt = await getContract();

	return new Promise((resolve, reject) => {
		Sabt.getPastEvents(
			'HashStored',
			{ filter: {}, fromBlock: from, toBlock: 'latest' },
			async (error, events) => {
				if (error) {
					reject(error);
				}

				events = events.map(ev => ({
					transactionHash: ev.transactionHash,
					blockNumber: ev.blockNumber,
					fileHash: ev.returnValues.fileHash
				}));

				resolve(events);
			}
		);
	});
};
