import {
  sign,
  verify,
  generateSeed,
  deriveKeypair,
  deriveAddress,
} from "ripple-keypairs";
import { encodeForSigning } from "ripple-binary-codec";
import { Wallet } from "xrpl";
var xrpl = require("xrpl");

const privatekey =
  "00F0219A89AA7476FD0D008719334B5B82B6AD573BD54C5374C4A68C07DB0218E7";
const publickey =
  "0267D7DA96AC45391B013AE1B864D53560E10D766252C0F5572BE3E3F149A1AD9D";

// ******************** SIGN PAYLOAD OFFLINE WITH PRIVATE KEY********
async function sign1() {
  const payload1: Transaction = {
    Account: "rNjHxjoCFtcJ6WoF6bpu1121C3WKy7xUdF",
    TransactionType: "Payment",
    Amount: "1000000",
    Destination: "rwBR7sNqesjGHeCh1Yw4KgXSzezFSSahTJ",
    Sequence: 428270,
    Fee: "13",
  };

  payload1.SigningPubKey = publickey;

  const preparedTransactionHex = encodeForSigning(payload1);
  const signature = sign(preparedTransactionHex, privatekey);
  console.log("Signature: " + signature);
  const verification = verify(preparedTransactionHex, signature, publickey);
  console.log("The signature is valid: " + verification);
  //payload1.TxnSignature = signature;
}
sign1();
// End of sign1()

/*
// ******************** SUBMIT PAYLOAD ONLINE********
async function submit1() {
  const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
  await client.connect();
  const payload1: Transaction = {
    Account: "rNjHxjoCFtcJ6WoF6bpu1121C3WKy7xUdF",
    TransactionType: "Payment",
    Amount: "1000000",
    Destination: "rwBR7sNqesjGHeCh1Yw4KgXSzezFSSahTJ",
    Sequence: 428270,
    Fee: "13",
    SigningPubKey: publickey,
    TxnSignature:
      "304502210097132036C3941B430A726A8D9A3F82DC2E1DABEC319434A497215F2738E05F3F02203C25F8F004FFC15D3CA76CF543120A04C3197DCB573F85B2D880A2B1E93C50AE",
  };

  const resultTx = await client.submit(payload1);
  //console.log(resultTx);
  console.log( "Results:" +
  "\nAccepted: " +
  resultTx.result.accepted +
  "\nEngine_result: " +
  resultTx.result.engine_result +
  "\nEngine_result_message: " +
  resultTx.result.engine_result_message +
  `\nValidated_ledger_index: ` +
  resultTx.result.validated_ledger_index +
  "\nHash: " +
  resultTx.result.tx_json.hash;)

  client.disconnect();
}
submit1();
*/

// ********************GENERATE KEYS********
/*
async function secpPair() {
  const seed1 = generateSeed("secp256k1");
  console.log(seed1);
  const keypair1 = deriveKeypair(seed1);
  console.log(keypair1);
}
secpPair();
*/

/*
async function edPair() {
  const seed2 = generateSeed("ed25519");
  console.log(seed2);
  const keypair2 = deriveKeypair(seed2);
  console.log(keypair2);
}
edPair();
*/

/*
async function deriveFromSeed() {
  const keypair = deriveKeypair("sEdVG4MFLsYs2CT9GhFw3tuHE5ftZ6J");
  console.log(keypair);
}
deriveFromSeed();
*/

/*
async function walletFromKeyPair() {
  const wallet1 = new Wallet(
    "0083B34D1BBA0019E1327B214435EFDA5790828CB7EC9D590165349EC892BF28E6",
    "0264E448ACED8CFB91130FE831DF9BE367A58668817D26A249B313879168A152D4"
  );
  console.log(wallet1);
}
walletFromKeyPair();
*/

/*
async function deriveAddressFromPublicKey() {
  const address1 = deriveAddress(
    "0267D7DA96AC45391B013AE1B864D53560E10D766252C0F5572BE3E3F149A1AD9D"
  );
  console.log(address1);
}
deriveAddressFromPublicKey();
*/
