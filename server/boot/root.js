module.exports = async server => {
  let router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};
