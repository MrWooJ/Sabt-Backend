let fs = require('fs-extra');
let path = require('path');

module.exports = async server => {

  let directory = path.resolve(__dirname + '/../../fileStorage/global');

  if (!fs.existsSync(directory)) {
    let container = server.models.container;
    let options = {
      name: 'global'
    };
    
    await container.createContainer(options);  
  }

};