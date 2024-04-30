import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    evmSidechain: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: ["29fee737f77f3f5faee3e18202f14c2be33349528e9023c805656c8528b244d4"]
    },
    networks: {
      zkEVM: {
      url: `https://rpc.public.zkevm-test.net`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    },
    sepolia: {
      url: "YOUR_SEPOLIA_RPC_URL", // Replace this with your Sepolia RPC URL
      chainId: YOUR_CHAIN_ID, // Replace this with the chain ID of the Sepolia network
      accounts: ["YOUR_PRIVATE_KEY"], // Specify the private key of your account for deploying contracts
    },
  }
};

export default config;