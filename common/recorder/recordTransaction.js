const utility = rootRequire('helper/utility');
const cryptography = rootRequire('helper/cryptography');
const fileStorage = rootRequire('helper/fileStorage');
const storeHash = rootRequire('server/blockchain/storeHash');

let createError = require('http-errors');

let app = rootRequire('server/server');

module.exports = async Record => {

  const vars = app.vars;

  Record.recordTransaction = async (dataHash, clientId, useMerkle) => {
    let User = app.models.User;
    let userModel = await User.findById(clientId.toString());
    if (!userModel) {
      throw createError(404);
    }
    let time = utility.getUnixTimeStamp();
    let data = {
      dataHash,
      createDate: time,
      updateDate: time,
      clientId,
      blockNumber: vars.config.informationType.notAssigned,
      transactionHash: vars.config.informationType.notAssigned
    };
    if (!useMerkle) {
      data.isMerkle = false;
      data.groupId = clientId;
      data.status = vars.config.transactionStatus.progress;
      let transationHash = await storeHash(dataHash);
      data.transactionHash = transationHash;
      let licenseData = {
        status: vars.config.licenseStatus.pending,
        isMerkle: false,
        rootHash: dataHash
      };
      let License = Record.app.models.license;
      await License.create(licenseData);
      let encryptedData = cryptography.encryptData(JSON.stringify(licenseData));
      await fileStorage.writeInFile(clientId.toString() + '/' + 
        transationHash.toString(), encryptedData);
    } else {
      data.isMerkle = true;
      data.groupId = vars.config.clientType.general;
      data.status = vars.config.transactionStatus.pending;
    }
    let recordModel = await Record.create(data);
    return recordModel;
  };

  Record.recordTransaction = utility.wrapper(Record.recordTransaction);

  Record.remoteMethod('recordTransaction', {
    description: 'It will record a transaction\
                  in the blockchain or not.',
    accepts: [{
      arg: 'dataHash',
      type: 'string',
      required: true,
      http: {
        source: 'path'
      }
    }, {
      arg: 'clientId',
      type: 'string',
      required: true,
      http: {
        source: 'path'
      }
    }, {
      arg: 'useMerkle',
      type: 'boolean',
      default: false,
      required: false,
      http: {
        source: 'query'
      }
    }],
    http: {
      path: '/:dataHash/recordTransaction/:clientId',
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