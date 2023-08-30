require('dotenv').config();
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const NFTMarketplaceERC721 = artifacts.require('NFTMarketplaceERC721');
const PrimaryFixedPriceNFTMarketPlace = artifacts.require('PrimaryFixedPriceNFTMarketPlace');
const PrimaryAuctionNFTMarketPlace = artifacts.require('PrimaryAuctionNFTMarketPlace');

const { DEPLOYER, ROOT_ADMIN, NAME, SYMBOL, BASE_TOKEN_URI } = process.env;

module.exports = async function (deployer) {
  await deployProxy(NFTMarketplaceERC721, [NAME, SYMBOL, BASE_TOKEN_URI, DEPLOYER], {
    deployer,
  });

  const NFTMarketplaceERC721Instance = await NFTMarketplaceERC721.deployed();
  const MINT_ROLE = await NFTMarketplaceERC721Instance.MINTER_ROLE();
  await NFTMarketplaceERC721Instance.grantRole(MINT_ROLE, PrimaryFixedPriceNFTMarketPlace.address);
  await NFTMarketplaceERC721Instance.grantRole(MINT_ROLE, PrimaryAuctionNFTMarketPlace.address);
  await NFTMarketplaceERC721Instance.transferOwnership(ROOT_ADMIN);
  console.log('Deployed NFT address : ', NFTMarketplaceERC721Instance.address);
};
