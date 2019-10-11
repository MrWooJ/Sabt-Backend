const utility = rootRequire('helper/utility');
const cryptography = rootRequire('helper/cryptography');
const verifyHash = rootRequire('server/blockchain/verifyHash');

let createError = require('http-errors');

module.exports = async Record => {

  Record.claimTransaction = async (dataHash, license) => {
    let decryptedLicense = JSON.parse(cryptography.decryptData(license));
    console.log(decryptedLicense);
    if (decryptedLicense.isMerkle) {
      for (let i = 0; i < decryptedLicense.merkleIDs.length; i++) {
        if (decryptedLicense.merkleIDs[i] === dataHash) {
          const result = await verifyHash(decryptedLicense.rootHash);
          const response = result.map(a => a.toString());
          if (response.length === 0) {
            throw createError(404);
          }
          return response;
        }
      }  
    } else {
      if (decryptedLicense.rootHash === dataHash) {
        const result = await verifyHash(dataHash);
        const response = result.map(a => a.toString());
        if (response.length === 0) {
          throw createError(404);
        }
      return response;
      }
    }
    throw createError(400);
  };

  Record.claimTransaction = 
    utility.wrapper(Record.claimTransaction);

  Record.remoteMethod('claimTransaction', {
    description: 'It will check whether this hash exists\
                  in the blockchain or not.',
    accepts: [{
      arg: 'dataHash',
      type: 'string',
      required: true,
      http: {
        source: 'path'
      }
    }, {
      arg: 'license',
      type: 'string',
      required: true,
      http: {
        source: 'query'
      }
    }],
    http: {
      path: '/:dataHash/claimTransaction',
      verb: 'POST',
      status: 200,
      errorStatus: 400
    },
    returns: {
      type: 'object',
      root: true
    }
  });

};