  // 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Polygon } from "@thirdweb-dev/chains";


export const activeChain = Polygon;

export const nftDropContractAddress =
  "0xB8B8aB38C0554F6Baea076b7F16f6908A0B7edA8";
export const tokenContractAddress =
  "0xF73540cAd49aE1e42bE5cf7f04032Be49c67a066";
export const stakingContractAddress =
  "0x2B83c44bcB8158b189Ff430d90AF09EBF64ba97E";

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x483394f7cC1D46EC7Ca23E1544EeFB1D603B35Af";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xB8B8aB38C0554F6Baea076b7F16f6908A0B7edA8";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://polygonscan.com";