const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(isDirectMachine) {
    if (isDirectMachine === false) {
      this.isDirectMachine = false;
    } else {
      this.isDirectMachine = true;
    }
  }

  errorCatch(string, key) {
    if (typeof(string) !== 'string' || typeof(key) !== 'string') {
      throw new Error();
    }
  }

  encrypt(string, key) {
    this.errorCatch(string, key);
    let keyUpperCase = key.toUpperCase();
    let keyLength = keyUpperCase.length - 1;
    let stringUpperCase = string.toUpperCase();
    let stringArray = stringUpperCase.split('');
    let keyArray = keyUpperCase.split('');
    let keyArrayModified = [];
    let j = 0;
    for (let i in stringArray) {
      if (this.alphabet.indexOf(stringArray[i]) > -1) {
        if (j <= keyLength) {
          keyArrayModified.push(keyArray[j]);
          j++;
        } else {
          j += - (keyLength + 1);
          keyArrayModified.push(keyArray[j]);
          j++;
        }
      } else {
        keyArrayModified.push(stringArray[i]);
      }
    }
    let stringEncrypted = [];
    for (let i in stringArray) {
      if (this.alphabet.indexOf(stringArray[i]) > -1) {
        let index = this.alphabet.indexOf(stringArray[i]) + this.alphabet.indexOf(keyArrayModified[i]);
        if (index > 25) {
          index += -26;
        }
        stringEncrypted.push(this.alphabet[index]);
      } else {
        stringEncrypted.push(stringArray[i]);
      }
    }
    if (this.isDirectMachine) {
      return stringEncrypted.join('');
    } else {
      return stringEncrypted.reverse().join('');
    }
  }    
  decrypt(string, key) {
    this.errorCatch(string, key);
    let keyUpperCase = key.toUpperCase();
    let keyLength = keyUpperCase.length - 1;
    let stringUpperCase = string.toUpperCase();
    let stringArray = stringUpperCase.split('');
    let keyArray = keyUpperCase.split('');
    let keyArrayModified = [];
    let j = 0;
    for (let i in stringArray) {
      if (this.alphabet.indexOf(stringArray[i]) > -1) {
        if (j <= keyLength) {
          keyArrayModified.push(keyArray[j]);
          j++;
        } else {
          j += - (keyLength + 1);
          keyArrayModified.push(keyArray[j]);
          j++;
        }
      } else {
        keyArrayModified.push(stringArray[i]);
      }
    }
    let stringEncrypted = [];
    for (let i in stringArray) {
      if (this.alphabet.indexOf(stringArray[i]) > -1) {
        let index = this.alphabet.indexOf(stringArray[i]) + 26 - this.alphabet.indexOf(keyArrayModified[i]);
        if (index > 25) {
          index += -26;
        }
        stringEncrypted.push(this.alphabet[index]);
      } else {
        stringEncrypted.push(stringArray[i]);
      }
    }
    if (this.isDirectMachine) {
      return stringEncrypted.join('');
    } else {
      return stringEncrypted.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
