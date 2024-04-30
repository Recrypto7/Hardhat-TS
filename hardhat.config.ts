import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    evmSidechain: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: ["29fee737f77f3f5faee3e18202f14c2be33349528e9023c805656c8528b244d4"]
    }
  }
};

export default config;