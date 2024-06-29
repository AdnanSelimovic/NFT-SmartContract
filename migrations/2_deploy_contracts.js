const MyNFT = artifacts.require("MyNFT");

module.exports = async function (deployer, network, accounts) {
  console.log('Accounts:', accounts); // Log available accounts

  const fromAccount = accounts[0];
  console.log('Deploying from account:', fromAccount); // Log the deploying account

  await deployer.deploy(MyNFT, { from: fromAccount });
};
