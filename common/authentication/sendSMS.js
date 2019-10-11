const utility = rootRequire('helper/utility');

const request = require('request');

let app = rootRequire('server/server');

module.exports = async Authentication => {

	const vars = app.vars;

  let apiURL = vars.const.smsAPIBaseURL.replace('@', vars.const.smsAPIToken);

  function getRequest(url) {
		return new Promise((resolve, reject) => {
      request.get(url).on('response', data =>
        resolve(data)
      ).on('error', err =>
        reject(err)
      );
		});
  }

  Authentication.sendSMS = async (mobileNumber, randNumber) => {
		let data = {
			receptor: mobileNumber.toString(),
			token: randNumber.toString(),
			template: vars.const.authenticationTemplate
    };
    if (process.env.NODE_ENV !== vars.config.environmentType.production) {
      return data;
    }
    let url = apiURL + '?' + utility.generateQueryString(data);
    let result = await getRequest(url);
    return result;
  };

  Authentication.sendSMS = 
    utility.wrapper(Authentication.sendSMS);

  Authentication.remoteMethod('sendSMS', {
    description: 'Send the random number token to\
                  to the provided mobileNumber',
    accepts: [{
      arg: 'mobileNumber',
      type: 'string',
      required: true,
      http: {
        source: 'path'
      }
    }, {
      arg: 'randNumber',
      type: 'string',
      required: true,
      http: {
        source: 'path'
      }
    }],
    http: {
      path: '/:mobileNumber/sendSMS/:randNumber',
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