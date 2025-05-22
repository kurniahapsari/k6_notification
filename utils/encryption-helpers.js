import forge from 'node-forge';
import { pubKeyDev, pubKeyCanary, pubKeyProd, fileContent } from './constant.js';

export function encryptRSA(env) {
  const pubKeyMap = {
    dev: pubKeyDev,
    canary: pubKeyCanary,
    prod: pubKeyProd
  };

  const pubKey = pubKeyMap[env];
  
  const publicKey = forge.pki.publicKeyFromPem(pubKey);

  const encryptedBytes = publicKey.encrypt(JSON.stringify(fileContent(env)), 'RSA-OAEP', {
    md: forge.md.sha512.create()  // OAEP512 = SHA-512 hash function
  });

  return forge.util.bytesToHex(encryptedBytes); 
}
