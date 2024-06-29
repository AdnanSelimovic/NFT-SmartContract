require('dotenv').config();
const MyNFT = artifacts.require("MyNFT");

module.exports = async function(callback) {
    try {
        const accounts = await web3.eth.getAccounts();
        const myNFT = await MyNFT.deployed();
        const metadataURL = process.env.METADATA_URL;
        const result = await myNFT.createNFT(metadataURL, { from: accounts[0] });
        console.log("NFT minted: ", result);
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
    callback();
};
