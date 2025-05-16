import forge from 'node-forge';
import { pubKey, fileContent } from './constant.js';

export function encryptRSA() {
  const publicKey = forge.pki.publicKeyFromPem(pubKey);

  const encryptedBytes = publicKey.encrypt(JSON.stringify(fileContent), 'RSA-OAEP', {
    md: forge.md.sha256.create()  // OAEP512 = SHA-512 hash function
  });

  return forge.util.bytesToHex(encryptedBytes);
}
