
import { HardhatUserConfig } from "hardhat/config";
import { ethers } from "ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import '@typechain/hardhat';
import "hardhat-deploy"
import * as dotenv from 'dotenv';
dotenv.config();

// WALLET
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// INFRASTRUCTURE
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const INFURA_API_SECRET = process.env.INFURA_API_SECRET;
const INFURA_API_KEY = process.env.INFURA_API_KEY;

// BLOCKEXPLORERS
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  paths: { tests: "tests" },
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + INFURA_API_KEY,
      accounts: [PRIVATE_KEY],
      etherscan: {
        apiKey: ETHERSCAN_API_KEY,
      },
      namedAccounts: {
        deployer: {
          default: 0,
        },
        player: {
          default: 1,
        },
      },
    },
  },
};

export default config;
