require('dotenv').config();
const PrimaryFixedPriceNFTMarketPlace = artifacts.require('PrimaryFixedPriceNFTMarketPlace');
const PrimaryAuctionNFTMarketPlace = artifacts.require('PrimaryAuctionNFTMarketPlace');
const SecondaryNFTMarketPlace = artifacts.require('SecondaryNFTMarketPlace');

const { ROOT_ADMIN, PLATFORM_FEE_RECEIVER, PLATFORM_FEE_PERCENTAGE } = process.env;

module.exports = async (deployer) => {
  await deployer.deploy(PrimaryFixedPriceNFTMarketPlace, [PLATFORM_FEE_RECEIVER, PLATFORM_FEE_PERCENTAGE], ROOT_ADMIN);
  console.log('Deployed PrimaryFixedPriceNFTMarketPlace address : ', PrimaryFixedPriceNFTMarketPlace.address);

  await deployer.deploy(PrimaryAuctionNFTMarketPlace, [PLATFORM_FEE_RECEIVER, PLATFORM_FEE_PERCENTAGE], ROOT_ADMIN);
  console.log('Deployed PrimaryAuctionNFTMarketPlace address : ', PrimaryAuctionNFTMarketPlace.address);

  await deployer.deploy(SecondaryNFTMarketPlace, [PLATFORM_FEE_RECEIVER, PLATFORM_FEE_PERCENTAGE], ROOT_ADMIN);
  console.log('Deployed SecondaryNFTMarketPlace address : ', SecondaryNFTMarketPlace.address);
};
