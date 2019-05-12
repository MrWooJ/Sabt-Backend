module.exports = async Authentication => {

  require('../authentication/checkPendingStatus')(Authentication);
  require('../authentication/checkSuspendStatus')(Authentication);
  require('../authentication/checkVerifiedStatus')(Authentication);
  require('../authentication/enterPassword')(Authentication);
  require('../authentication/requestForPassword')(Authentication);
  require('../authentication/sendSMS')(Authentication);
  
};
