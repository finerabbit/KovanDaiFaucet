const DaiFaucet = artifacts.require("KovanDaiFaucet");

module.exports = function (deployer) {
  deployer.deploy(DaiFaucet);
};
