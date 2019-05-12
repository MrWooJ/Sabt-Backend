const winston = require('winston');
const subscribeHashStored = require('../blockchain/getHashStoredEvent');

let cron = require('cron');

module.exports = async () => {

  let latestBlock = 0;

  let blockchainEventListener = cron.job('*/10 * * * * *', async () => {

    const events = await subscribeHashStored(latestBlock + 1);
		winston.debug(JSON.stringify(events));

		const blockNumbers = events.map(ev => ev.blockNumber);
    latestBlock = Math.max.apply(null, [latestBlock, ...blockNumbers]);

  });
  
  blockchainEventListener.start();
  
};