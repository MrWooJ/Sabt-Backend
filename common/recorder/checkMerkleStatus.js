const cryptography = rootRequire('helper/cryptography');
const fileStorage = rootRequire('helper/fileStorage');
const storeHash = rootRequire('server/blockchain/storeHash');

const MerkleTools = require('merkle-tools');
let cron = require('cron');

let app = rootRequire('server/server');

module.exports = async Record => {

  const vars = app.vars;

  let checkMerkleStatus = cron.job('*/60 * * * * *', async () => {
    console.log('START MERKLE');
    let merkleList = await Record.find({
      where: {
        and: [
          { status: vars.config.transactionStatus.pending },
          { isMerkle: true }
        ]
      }
    });
    if (merkleList.length === 0) {
      return;
    }
    let merkleIDs = [];
    for (let i = 0; i < merkleList.length; i++) {
      let model = merkleList[i];
      await model.updateAttributes({
        status: vars.config.transactionStatus.progress
      });
      merkleIDs.push(model.dataHash);
    }
    let merkleTools = new MerkleTools();
    merkleTools.addLeaves(merkleIDs, true);
    merkleTools.makeTree();
    let rootHash = merkleTools.getMerkleRoot().toString('hex');
    let licenseData = {
      status: vars.config.licenseStatus.pending,
      isMerkle: true,
      rootHash,
      merkleIDs
    };
    let License = Record.app.models.license;
    await License.create(licenseData);
    let transactionHash = await storeHash(rootHash);
    let encryptedData = cryptography.encryptData(JSON.stringify(licenseData));
    await fileStorage.writeInFile('global/' + transactionHash, encryptedData);
    for (let i = 0; i < merkleList.length; i++) {
      let model = merkleList[i];
      await model.updateAttributes({
        transactionHash
      });
      merkleIDs.push(model.id);
    }
  });
  
  checkMerkleStatus.start();
  
};