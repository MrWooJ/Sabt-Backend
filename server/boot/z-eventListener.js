const subscribeHashStored = require('../blockchain/getHashStoredEvent');
const utility = rootRequire('helper/utility');

let cron = require('cron');

module.exports = async server => {

  let Event = server.models.event;
  let Record = server.models.record;
  let License = server.models.license;

  const vars = server.vars;

  let latestBlockNumber = 0;
  // let blockList = await Event.find({
  //   order: 'blockNumber DESC',
  //   limit: 3
  // });
  // if (blockList.length !== 0) {
  //   latestBlockNumber = blockList[0].blockNumber;
  // }

  let blockchainEventListener = cron.job('*/10 * * * * *', async () => {
    const events = await subscribeHashStored(latestBlockNumber + 1);
    for (let event of events) {
      await Event.create({
        transactionHash: event.transactionHash.toString(),
        blockNumber: Number(event.blockNumber),
        fileHash: event.fileHash.toString()
      });
      let recordList = await Record.find({
        where: {
          transactionHash: event.transactionHash.toString()
        }
      });
      for (let i = 0; i < recordList.length; i++) {
        let recordModel = recordList[i];
        await recordModel.updateAttributes({
          blockNumber: Number(event.blockNumber),
          updateDate: utility.getUnixTimeStamp(),
          status: vars.config.transactionStatus.recorded
        });
      }
      let licenseList = await License.find({
        where: {
          rootHash: event.fileHash.toString()
        }
      });
      for (let i = 0; i < licenseList.length; i++) {
        let licenseModel = licenseList[i];
        await licenseModel.updateAttributes({
          status: vars.config.licenseStatus.approved
        });
      }
    }
    
		const blockNumbers = events.map(ev => ev.blockNumber);
    latestBlockNumber = 
      Math.max.apply(null, [latestBlockNumber, ...blockNumbers]);

  });
  
  blockchainEventListener.start();
  
};