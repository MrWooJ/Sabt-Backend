module.exports = async Record => {
  
  require('../recorder/checkMerkleStatus')(Record);
  require('../recorder/claimTransaction')(Record);
  require('../recorder/recordTransaction')(Record);

};
