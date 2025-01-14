/* eslint-disable no-undef */
const DexToken = artifacts.require('DexToken');
const AutomatedMarketMaker = artifacts.require('AutomatedMarketMaker');
const LiquidityPool = artifacts.require('LiquidityPool');

// eslint-disable-next-line func-names
module.exports = function (deployer) {
  deployer.deploy(DexToken);
  deployer.deploy(AutomatedMarketMaker);
  deployer.deploy(LiquidityPool);
};
