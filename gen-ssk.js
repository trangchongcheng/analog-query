import Keyring from "@polkadot/keyring";
import { keygen } from "@analog-labs/timegraph-js";
require("dotenv").config();
import { waitReady } from "@polkadot/wasm-crypto";
waitReady().then(async () => {
  const keyring = new Keyring({ type: "sr25519" });
  const keypair = keyring.addFromMnemonic("");
  const _keygen = new keygen({
    signer: keypair.sign,
    address: keypair.address,
  });
  console.log("address", keypair.address);
  const sessionKey = await _keygen.createSessionkey(30000000000);
  console.log(sessionKey);
});
