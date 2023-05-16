const { ethers } = require("ethers");

abi = `[]`;

const rpc = "";

const provider = new ethers.InfuraProvider(network="sepolia", "");

const signer = new ethers.Wallet("", provider);

const address = ""

const tokenContract = new ethers.Contract("contract", abi, signer);

const targetAddress = "";

const tokenCogs = 1000000; // 

async function main() {
  console.log("Transfer to", address)

  const transferTx = await tokenContract.transfer("addreess", 1000*tokenCogs);
  await transferTx.wait(5);

  console.log("Trasnfer transaction hash: ", transferTx.hash);
}

main();
