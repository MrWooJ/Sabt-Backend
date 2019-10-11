let fs = require('fs-extra');
let path = require('path');

module.exports = {

  writeInFile: async (directoryName, input) => {
    let directory = 
      path.resolve(__dirname + '/../fileStorage/' + directoryName + '.txt');
    let fileDirectory = await fs.open(directory, 'w');
    await fs.writeFile(fileDirectory, input);
    await fs.close(fileDirectory);  
    return true;
  },
  
  readFromFile: async directoryName => {
    let directory = 
      path.resolve(__dirname + '/../fileStorage/' + directoryName + '.txt');
    let fileDirectory = await fs.open(directory, 'r');
    let output = await fs.readFile(fileDirectory);
    await fs.close(fileDirectory);  
    return output;
  }

};