import { ethers } from "hardhat";

const main = async () => {
    const VoteFactory = await ethers.getContractFactory("Voting")
    const Vote = await VoteFactory.deploy("0x58754F1ca3FF81c37eECe96e9019140Fa0f95f03")
    // const deployed = await Vote.deployed()
    // console.log(deployed)
    console.log(await Vote.getAddress());

}

main();