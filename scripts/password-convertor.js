const password = 'mysecretpassword';
const secretKey = 'mysecretkey';
var checkbox = document.getElementById("checkbox");
var hidden_element = document.getElementById("secret-key");

// Generate a key from the secret key
const key = await window.crypto.subtle.importKey(
  'raw',
  new TextEncoder().encode(secretKey),
  {
    name: 'AES-GCM',
  },
  false,
  ['encrypt', 'decrypt']
);

// Encrypt the password
const Sencrypted = await window.crypto.subtle.encrypt(
  {
    name: 'AES-GCM',
    iv: window.crypto.getRandomValues(new Uint8Array(12)),
  },
  key,
  new TextEncoder().encode(password)
);

// Decrypt the password
const Sdecrypted = await window.crypto.subtle.decrypt(
  {
    name: 'AES-GCM',
    iv: window.crypto.getRandomValues(new Uint8Array(12)),
  },
  key,
  encrypted
);

console.log(new TextDecoder().decode(decrypted));

// checkbox.addEventListener("change", function(){
//     if (checkbox.checked == true) {
//         hidden_element.style.display = "block";
//     } else {
//         hidden_element.style.display = "none";
//     }
// });