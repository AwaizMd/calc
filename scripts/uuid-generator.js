const uuid = require('uuid');
const crypto = require('crypto');


// function generateUUID() {
//   return crypto.randomBytes(16).toString('hex');
// }

// function generateUUID() {
//   return uuid.v4();
// }

function generateUUID() {
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

function generateBulkUUID(total) {
  return Array(total).fill().map(() => generateUUID());
  
}

//bulk create

/* This function uses the current time and a high-precision timer (if available) to generate a random number, which is then converted to a string using the replace() method. The resulting string is a UUID in the standard format.

Another way to generate UUIDs is to use a library such as the uuid library. This library provides a simple interface for generating UUIDs in various formats. To use the uuid library, you will need to install it first:

Copy code
npm install uuid
Then, you can generate a UUID like this:

Copy code
const { v4: uuidv4 } = require('uuid');

console.log(uuidv4()); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
This will generate a UUID in the standard format using version 4 of the UUID specification. The uuid library also provides functions for generating UUIDs in other formats and versions.



 */
