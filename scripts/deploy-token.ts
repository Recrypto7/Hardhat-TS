import { ethers } from "hardhat";

const main = async () => {
    const TokenFactory = await ethers.getContractFactory("Token")
    const token = await TokenFactory.deploy("TestOne", "T1")
    // const deployed = await token.deployed()
    // console.log(deployed)
    console.log(await token.getAddress());

}

main();