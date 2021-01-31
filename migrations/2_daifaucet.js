const KovanDaiFaucet = artifacts.require("./KovanDaiFaucet.sol");

module.exports = function (deployer) {
  deployer.deploy(KovanDaiFaucet);
};
