import { ethers } from 'hardhat';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const _metadataUri = 'https://gateway.pinata.cloud/ipfs/QmX2ubhtBPtYw75Wrpv6HLb1fhbJqxrnbhDo1RViW3oVoi';

async function deploy(name: string, ...params: string[]) {
  const contractFactory = await ethers.getContractFactory(name); // Use hre.ethers
  const contract = await contractFactory.deploy(...params);
  await contract.deployed();
  return contract;
}

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

  console.log(`Deploying smart contract from: ${wallet.address}`);

  const AVAXGods = await deploy('AVAXGods', _metadataUri);
  
  console.log(`✅ Contract deployed at: ${AVAXGods.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(`❌ Deployment failed:`, error);
    process.exit(1);
  });
