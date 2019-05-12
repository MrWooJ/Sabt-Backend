const verificationStatus = require('../config/verifiaction.status.js');
const transactionStatus = require('../config/transaction.status.js');
const licenseStatus = require('../config/license.status.js');
const informationType = require('../config/information.type.js');
const clientType = require('../config/client.type.js');
const blockchainData = require('../config/blockchain.data.js');
const environmentType = require('../config/environment.type.js');

const gasPrice = '20';
const verifiedAdditionTime = 3 * 24 * 60 * 60 * 1000;

module.exports = server => {
  server.vars = {
    config: {
      verificationStatus,
      transactionStatus,
      licenseStatus,
      informationType,
      clientType,
      blockchainData,
      environmentType
    },
    const: {
      gasPrice,
      verifiedAdditionTime
    }
  };
};
