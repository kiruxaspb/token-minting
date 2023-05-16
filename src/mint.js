const { ethers } = require("ethers");

const network = ""; // sepolia

const abi = `[]`; // token contract abi

const apiKey = ""; // infura api key

const provider = new ethers.InfuraProvider(network=network, apiKey); // init provider

const privateKey = ""; // private key 

const tokenAddress = "" // token address

const signer = new ethers.Wallet(privateKey, provider); // admin, owner

const tokenContract = new ethers.Contract(tokenAddress, abi, signer); // init contract

const targetAddress = ""; // to mint

const tokenCogs = 1000000; // cogs

async function main() {

  console.log("Mint token to...", targetAddress);
  const tx = await tokenContract.mint(targetAddress, 1000*tokenCogs); // 1000
  await tx.wait(5); // 1

  console.log("Minting transaction hash: ", tx.hash);
}

main();