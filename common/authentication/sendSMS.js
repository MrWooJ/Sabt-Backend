const utility = rootRequire('helper/utility');

module.exports = async Authentication => {

  Authentication.sendSMS = async (mobileNumber, randomNumber) => {

  };

  Authentication.sendSMS = utility.wrapper(Authentication.sendSMS);

};