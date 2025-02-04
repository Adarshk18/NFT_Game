import dotenv from 'dotenv';
// import '@nomiclabs/hardhat-ethers';
import "@nomicfoundation/hardhat-ethers";


dotenv.config();

export default {
  solidity: {
    version: '0.8.20',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      gasPrice: 'auto',
      chainId: 11155111,
      accounts: [process.env.PRIVATE_KEY],
    },
    // subnet: {
    //   url: process.env.NODE_URL,
    //   chainId: Number(process.env.CHAIN_ID),
    //   gasPrice: 'auto',
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
}
