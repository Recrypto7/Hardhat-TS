// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

// Uncomment this line to use console.log
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract Token is ERC20 {
    constructor(string memory symbol, string memory code) ERC20(symbol, code){

    }
    
    function buy() public payable {
        require(msg.value > 0, "Not enough XRP balance");
        _mint(_msgSender(), msg.value);
    }
}
