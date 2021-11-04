const TestArray = artifacts.require("TestArray");

module.exports = function (deployer) {
  TestArray.link('Array', '0x60e76efd77f2C413fd15fAF495c9EB828C859F12')
  deployer.deploy(TestArray);
};

