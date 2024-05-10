import { TimegraphClient } from "@analog-labs/timegraph-js";
require("dotenv").config();

(async () => {
  const timeGraphClient = new TimegraphClient({
    url: "https://timegraph.testnet.analog.one/graphql",
    sessionKey: process.env.SESSION_KEY ?? "",
  });

  const aliasResponse = await timeGraphClient.alias.add({
    name: "trumpname",
    hashId: "QmPVAGpc5MxM6edacRz39FrD7QcUwpdLt3yPJzSSTS3j61",
  });
  console.log("aliasResponse: ", aliasResponse);

  const response = await timeGraphClient.view.data({
    hashId: "QmPVAGpc5MxM6edacRz39FrD7QcUwpdLt3yPJzSSTS3j61",
    fields: ["token0"],
    limit: 10,
  });
  console.log("listPublishedArtifacts: ", response);
})();
