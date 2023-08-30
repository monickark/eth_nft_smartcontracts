# NFT2.0 MarketPlace Contracts

## Introduction

This Repository is a truffle project which contains all the marketplace contracts and ERC721 NFT contract.

## Contracts

### Primary Fixed Price Contract

Primary Fixed Price Contract manages all primary NFT sale with fixed price. It support payment in ETH, ERC20 and Fiat.

### Primary Auction Contract

Primary Auction Contract manages all primary NFT sale with auction. It support payment in ETH, ERC20 and Fiat. Users can either bid for NFT or can buy the NFT directly by paying specific sale price. Either Admin or Auctioneer can settle the auction on bidding.

### Secondary Contract

Secondary Contract manages NFT resale. It support both fixed price resale and auction.Payment can be done in ETH, ERC20 or Fiat.

### ERC721 Contract

Standard ERC721 smart contract with custom functionalities.

## Tools and Framework

### Git

Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

### Truffle

Truffle is a world-class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier. We use truffle in this project to compile and deploy the contracts in specified network

## Prerequisite

### Install Git

Run below commands

```bash
    sudo apt install git-all
```

### Install NodeJS

Run below commands

```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x |sudo -E bash -
    sudo apt-get install -y nodejs
```

### Install truffle

Run below commands

```bash
    sudo npm install truffle -g
```

## Versions used

- Ubuntu - 22.04.1 LTS
- Git - 2.34.1
- NodeJs - 16.14.2
- Node Package Manager(NPM) - 8.5.0
- Truffle - 5.5.5
- Solidity - 0.8.15

## Initial Setup

1. Clone Repo from https://gitlab.com/accubits7/nft2.0/nft_smart_contracts.git
2. Open Terminal in the Contract project folder and run `npm install` to install the dependencies.

## Configurations

### Contract configurations

The contract configuration can be done in the contract itself. Some of the parameters are to be passed on deployment.

### Environment variables

In order to compile and deploy the contract, there are certain values to be set in environment variable.

Before starting this section we will understand about .openzeppelin folder. This folder contain set of json files with network names as file name with contents being the contract addresses deployed under that network. This file is one of the key file to track contract deployment and perform change/upgrade.

### Method 1: using command line

1. Set mnemonic

   Run below command to set mnemonic environment variable.

   ```bash
   export MNEMONIC=<Mnemonic>
   ```

2. Set Infura Key

   Run below command to set Infura Project Key environment variable.

   ```bash
   export INFURA_KEY=<YourInfuraProjectKey>
   ```

3. Set Etherscan API Key

   Run below command to set Etherscan API Key environment variable.

   ```bash
   export ETHERSCAN_KEY=<YourEtherscanApiKey>
   ```

   3. Set Deployer Address

   Run below command to set Deployer Address.

   ```bash
   export DEPLOYER=<DeployerAddress>
   ```

4. Set Root Admin

   Run below command to set Root Admin.

   ```bash
   export ROOT_ADMIN=<RootAdminAddress>
   ```

5. Set Platform Fee

   Run below command to set Platform Fee.

   ```bash
   export PLATFORM_FEE_PERCENTAGE=<PlatformFee>
   ```

6. Set Platform Fee Receiver

   Run below command to set Platform Fee Receiver.

   ```bash
   export PLATFORM_FEE_RECEIVER=<PlatformFeeReceiverAddress>
   ```

7. Set Token Name

   Run below command to set ERC20 Token Name.

   ```bash
   export NAME=<MyToken>
   ```

8. Set Token Symbol

   Run below command to set ERC20 Token Symbol.

   ```bash
   export SYMBOL=<TokenSymbol>
   ```

9. Set Token Base URI

   Run below command to set Token Base URI.

   ```bash
   export BASE_TOKEN_URI=<BaseURI>
   ```

### Method 2: using .env file

1. Make a copy of `.env.sample` and rename it as `.env`
2. Assign the appropriate values to each variable. You can refer Method 1 to understand what each variable means.

## Deployment

### Ropsten

1. Make sure contract configurations are correct
2. Set the environment variables as required
3. Deploy contract with below command
   ```bash
   truffle migrate --network ropsten
   ```
4. Deployed contract address will be logged in console

### Ethereum Mainnet

1. Make sure contract contract configurations are correct
2. Set the environment variables as required
3. Deploy contract with below command
   ```bash
   truffle migrate --network mainnet
   ```
4. Deployed contract address will be logged in console
