import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";

const deployFunction: DeployFunction = async ({
    getNamedAccounts, deployments }) => {
    const { log } = deployments
    const { deployer } = await getNamedAccounts()
    const myTokenFactory = await ethers.getContractFactory("IRLToken")
    let initialSupply = "1000000000";

    log(`Deploying token with account ${deployer}`)
    const myToken = await myTokenFactory.deploy("IRLToken", "IRL", initialSupply)
    await myToken.deployed()
    log(`Token deployed to: ${myToken.address}`)
    log("--------------")
}

export default deployFunction
deployFunction.tags = [`all`, `token`]