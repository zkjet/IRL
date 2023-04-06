import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy();
  console.log("Contract deployed to address:", hello_world.address);

  const IRLToken = await ethers.getContractFactory("IRLToken");

  const irl_token = await IRLToken.deploy("IRLToken");
  console.log("Token deployed to:", irl_token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });