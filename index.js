"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ripple_keypairs_1 = require("ripple-keypairs");
var ripple_binary_codec_1 = require("ripple-binary-codec");
var xrpl = require("xrpl");
var privatekey = "00F0219A89AA7476FD0D008719334B5B82B6AD573BD54C5374C4A68C07DB0218E7";
var publickey = "0267D7DA96AC45391B013AE1B864D53560E10D766252C0F5572BE3E3F149A1AD9D";
// ******************** SIGN PAYLOAD OFFLINE WITH PRIVATE KEY********
function sign1() {
    return __awaiter(this, void 0, void 0, function () {
        var payload1, preparedTransactionHex, signature, verification;
        return __generator(this, function (_a) {
            payload1 = {
                Account: "rNjHxjoCFtcJ6WoF6bpu1121C3WKy7xUdF",
                TransactionType: "Payment",
                Amount: "1000000",
                Destination: "rwBR7sNqesjGHeCh1Yw4KgXSzezFSSahTJ",
                Sequence: 428270,
                Fee: "13",
            };
            payload1.SigningPubKey = publickey;
            preparedTransactionHex = (0, ripple_binary_codec_1.encodeForSigning)(payload1);
            signature = (0, ripple_keypairs_1.sign)(preparedTransactionHex, privatekey);
            console.log("Signature: " + signature);
            verification = (0, ripple_keypairs_1.verify)(preparedTransactionHex, signature, publickey);
            console.log("The signature is valid: " + verification);
            return [2 /*return*/];
        });
    });
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
//# sourceMappingURL=index.js.map