
const sha256 = require('js-sha256'); 
const document = 'Give 50 BTC from my wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa to Bob';
const hash = sha256(document);
console.log(`Alice hashes her document and records the following hash value to the blockchain: ${hash}`);


if(sha256(document) === hash) {
    console.log("Document is legit");
} else {
    console.log("Whoa! That's a fake document");
}