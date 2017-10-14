var LogiToken = artifacts.require("./LogiToken.sol");
var Adoption = artifacts.require("./Adoption.sol")

module.exports = function(deployer) {
  deployer.deploy(LogiToken);
  deployer.deploy(Adoption);
};
