const verificationStatus = require('../config/verifiaction.status.js');
const transactionStatus = require('../config/transaction.status.js');
const licenseStatus = require('../config/license.status.js');
const informationType = require('../config/information.type.js');
const clientType = require('../config/client.type.js');
const blockchainData = require('../config/blockchain.data.js');
const environmentType = require('../config/environment.type.js');

const gasPrice = '20';
const sabtDomain = '@Sabt.com';
const verifiedAdditionTime = 3 * 24 * 60 * 60 * 1000;
const authenticationLowerBracketPin = 1250;
const authenticationUpperBracketPin = 9999;
const authenticationTryCount = 5;
const smsAPIBaseURL = 'https://api.kavenegar.com/v1/@/verify/lookup.json';
const smsAPIToken = 
  '33434D58303256744D72316F674A54755734616176413D3D';
const authenticationTemplate = 'VerificationNo1';


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
      sabtDomain,
      verifiedAdditionTime,
      authenticationLowerBracketPin,
      authenticationUpperBracketPin,
      authenticationTryCount,
      smsAPIBaseURL,
      smsAPIToken,
      authenticationTemplate
    }
  };
};
