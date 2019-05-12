const utility = rootRequire('helper/utility');

let server = require('../../server/server');

module.exports = async PaymentGatewayImplementationServiceBinding => {

  let soapDataSource = server.datasources.ZPSoapDS;

  soapDataSource.once('connected', async () => {
    // Create the model
    PaymentGatewayImplementationServiceBinding = soapDataSource.createModel(
      'PaymentGatewayImplementationServiceBinding', {});
  });

  /**
   * PaymentRequest
   * @param {PaymentRequest} PaymentRequest PaymentRequest
   * @throw if any error raises inside the process
   * @returns {any} Result is the response/soap body in JSON form.
   */
  PaymentGatewayImplementationServiceBinding.PaymentRequest = 
    async PaymentRequest => {
      let response = await PaymentGatewayImplementationServiceBinding
        .PaymentRequest(PaymentRequest);
      return response;
  };
  
  PaymentGatewayImplementationServiceBinding.PaymentRequest = 
    utility.wrapper(PaymentGatewayImplementationServiceBinding
      .PaymentRequest);
  
  /**
   * PaymentRequestWithExtra
   * @param {PaymentRequestWithExtra} PaymentRequestWithExtra PaymentRequestWithExtra
   * @throw if any error raises inside the process
   * @returns {any} Result is the response/soap body in JSON form.
   */
  PaymentGatewayImplementationServiceBinding.PaymentRequestWithExtra = 
    async PaymentRequestWithExtra => {
      let response = await PaymentGatewayImplementationServiceBinding
        .PaymentRequestWithExtra(PaymentRequestWithExtra);
      return response;
  };

  PaymentGatewayImplementationServiceBinding.PaymentRequestWithExtra = 
    utility.wrapper(PaymentGatewayImplementationServiceBinding
      .PaymentRequestWithExtra);

  /**
   * PaymentVerification
   * @param {PaymentVerification} PaymentVerification PaymentVerification
   * @throw if any error raises inside the process
   * @returns {any} Result is the response/soap body in JSON form.
   */
  PaymentGatewayImplementationServiceBinding.PaymentVerification = 
    async PaymentVerification => {
      let response = await PaymentGatewayImplementationServiceBinding
        .PaymentVerification(PaymentVerification);
      return response;
  };

  PaymentGatewayImplementationServiceBinding.PaymentVerification = 
    utility.wrapper(PaymentGatewayImplementationServiceBinding
      .PaymentVerification);

  /**
   * PaymentVerificationWithExtra
   * @param {PaymentVerificationWithExtra} PaymentVerificationWithExtra PaymentVerificationWithExtra
   * @throw if any error raises inside the process
   * @returns {any} Result is the response/soap body in JSON form.
   */
  PaymentGatewayImplementationServiceBinding.PaymentVerificationWithExtra = 
    async PaymentVerificationWithExtra => {
      let response = await PaymentGatewayImplementationServiceBinding
        .PaymentVerificationWithExtra(PaymentVerificationWithExtra);
      return response;
  };
  
  PaymentGatewayImplementationServiceBinding.PaymentVerificationWithExtra = 
    utility.wrapper(PaymentGatewayImplementationServiceBinding
      .PaymentVerificationWithExtra);

  /**
   * GetUnverifiedTransactions
   * @param {GetUnverifiedTransactions} GetUnverifiedTransactions GetUnverifiedTransactions
   * @throw if any error raises inside the process
   * @returns {any} Result is the response/soap body in JSON form.
   */
  PaymentGatewayImplementationServiceBinding.GetUnverifiedTransactions = 
    async GetUnverifiedTransactions => {
      let response = await PaymentGatewayImplementationServiceBinding
        .GetUnverifiedTransactions(GetUnverifiedTransactions);
      return response;
  };

  PaymentGatewayImplementationServiceBinding.GetUnverifiedTransactions = 
    utility.wrapper(PaymentGatewayImplementationServiceBinding
      .GetUnverifiedTransactions);
  
  /**
   * RefreshAuthority
   * @param {RefreshAuthority} RefreshAuthority RefreshAuthority
   * @throw if any error raises inside the process
   * @returns {any} Result is the response/soap body in JSON form.
   */
  PaymentGatewayImplementationServiceBinding.RefreshAuthority = 
    async RefreshAuthority => {
      let response = await PaymentGatewayImplementationServiceBinding
        .RefreshAuthority(RefreshAuthority);
      return response;
  };

  PaymentGatewayImplementationServiceBinding.RefreshAuthority = 
    utility.wrapper(PaymentGatewayImplementationServiceBinding
      .RefreshAuthority);

  // Map to REST/HTTP

  PaymentGatewayImplementationServiceBinding.remoteMethod(
    'PaymentRequest',
    { isStatic: true,
    produces:
    [ { produces: 'application/json' },
      { produces: 'application/xml' } ],
    accepts:
    [ { arg: 'PaymentRequest',
        type: 'PaymentRequest',
        description: 'PaymentRequest',
        required: true,
        http: { source: 'body' } } ],
    returns:
    [ { arg: 'data',
        type: 'PaymentRequestResponse',
        description: 'PaymentRequestResponse',
        root: true } ],
    http: { verb: 'post', path: '/PaymentRequest' },
    description: 'PaymentRequest' }
  );
  
  PaymentGatewayImplementationServiceBinding.remoteMethod(
    'PaymentRequestWithExtra',
    { isStatic: true,
    produces:
    [ { produces: 'application/json' },
      { produces: 'application/xml' } ],
    accepts:
    [ { arg: 'PaymentRequestWithExtra',
        type: 'PaymentRequestWithExtra',
        description: 'PaymentRequestWithExtra',
        required: true,
        http: { source: 'body' } } ],
    returns:
    [ { arg: 'data',
        type: 'PaymentRequestWithExtraResponse',
        description: 'PaymentRequestWithExtraResponse',
        root: true } ],
    http: { verb: 'post', path: '/PaymentRequestWithExtra' },
    description: 'PaymentRequestWithExtra' }
  );
  
  PaymentGatewayImplementationServiceBinding.remoteMethod(
    'PaymentVerification',
    { isStatic: true,
    produces:
    [ { produces: 'application/json' },
      { produces: 'application/xml' } ],
    accepts:
    [ { arg: 'PaymentVerification',
        type: 'PaymentVerification',
        description: 'PaymentVerification',
        required: true,
        http: { source: 'body' } } ],
    returns:
    [ { arg: 'data',
        type: 'PaymentVerificationResponse',
        description: 'PaymentVerificationResponse',
        root: true } ],
    http: { verb: 'post', path: '/PaymentVerification' },
    description: 'PaymentVerification' }
  );
  
  PaymentGatewayImplementationServiceBinding.remoteMethod(
    'PaymentVerificationWithExtra',
    { isStatic: true,
    produces:
    [ { produces: 'application/json' },
      { produces: 'application/xml' } ],
    accepts:
    [ { arg: 'PaymentVerificationWithExtra',
        type: 'PaymentVerificationWithExtra',
        description: 'PaymentVerificationWithExtra',
        required: true,
        http: { source: 'body' } } ],
    returns:
    [ { arg: 'data',
        type: 'PaymentVerificationWithExtraResponse',
        description: 'PaymentVerificationWithExtraResponse',
        root: true } ],
    http: { verb: 'post', path: '/PaymentVerificationWithExtra' },
    description: 'PaymentVerificationWithExtra' }
  );
  
  PaymentGatewayImplementationServiceBinding.remoteMethod(
    'GetUnverifiedTransactions',
    { isStatic: true,
    produces:
    [ { produces: 'application/json' },
      { produces: 'application/xml' } ],
    accepts:
    [ { arg: 'GetUnverifiedTransactions',
        type: 'GetUnverifiedTransactions',
        description: 'GetUnverifiedTransactions',
        required: true,
        http: { source: 'body' } } ],
    returns:
    [ { arg: 'data',
        type: 'GetUnverifiedTransactionsResponse',
        description: 'GetUnverifiedTransactionsResponse',
        root: true } ],
    http: { verb: 'post', path: '/GetUnverifiedTransactions' },
    description: 'GetUnverifiedTransactions' }
  );
  
  PaymentGatewayImplementationServiceBinding.remoteMethod(
    'RefreshAuthority',
    { isStatic: true,
    produces:
    [ { produces: 'application/json' },
      { produces: 'application/xml' } ],
    accepts:
    [ { arg: 'RefreshAuthority',
        type: 'RefreshAuthority',
        description: 'RefreshAuthority',
        required: true,
        http: { source: 'body' } } ],
    returns:
    [ { arg: 'data',
        type: 'RefreshAuthorityResponse',
        description: 'RefreshAuthorityResponse',
        root: true } ],
    http: { verb: 'post', path: '/RefreshAuthority' },
    description: 'RefreshAuthority' }
  );
  
};
