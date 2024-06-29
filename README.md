# NFT-SmartContract

A project to create and mint NFTs using Truffle, OpenZeppelin, and MetaMask.

## Getting Started

### Prerequisites

- Node.js
- MetaMask
- Truffle

### Installation and Usage

1. Clone the Repository:
    ```bash
    git clone https://github.com/AdnanSelimovic/NFT-SmartContract.git
    cd NFT-SmartContract
    ```

2. Install Dependencies:
    Run the following command in the terminal to install the project dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```plaintext
    MNEMONIC=your-mnemonic
    ACCOUNT_ADDRESS=your-account-address
    METADATA_URL=https://gateway.pinata.cloud/ipfs/your-metadata-url
    ```

4. In one terminal window, run:
    ```bash
    truffle dashboard
    ```

5. Connect MetaMask to the Truffle Dashboard.

6. Deploy the Contract:
    In another terminal window, navigate to the project directory and run:
    ```bash
    truffle migrate --network dashboard
    ```

7. Mint an NFT:
    To mint an NFT, run the minting script:
    ```bash
    truffle exec scripts/mint.js --network dashboard
    ```

8. Approve the transaction in MetaMask.

### Note:
- To change the network from Sepolia, alter the `truffle-config.js` file (line 8).
- To change the name and symbol of the NFT, modify the `MyNFT.sol` file (line 11).
