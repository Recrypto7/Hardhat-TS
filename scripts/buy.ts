import {ethers} from "hardhat";
import { Token } from "../typechain-types";
// import {EasyAToken} from "../typechain-types";

const main = async () => {
    const TokenFactory = await ethers.getContractFactory("Token");
    const Token = TokenFactory.attach("0x58754F1ca3FF81c37eECe96e9019140Fa0f95f03") as Token;

    const transaction = await Token.buy({
        value: ethers.parseEther("1"),
    });
    await transaction.wait();
}

main();