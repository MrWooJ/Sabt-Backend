const crypto = require('crypto');

const privateKey = process.env.SABT_PRIVATEKEY;

const key = Buffer.from(privateKey).slice(0, 32);
const iv = Buffer.from(privateKey).slice(0, 16);

module.exports = {

  encryptData: data => {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
  },

  decryptData: data => {
    let encryptedText = Buffer.from(data.toString(), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }

};
