var LogiToken = artifacts.require("./LogiToken.sol");

module.exports = function(deployer) {
  deployer.deploy(LogiToken);
};
