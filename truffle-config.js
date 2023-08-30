const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const { INFURA_KEY, ETHERSCAN_KEY, MNEMONIC } = process.env;

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      // host: '127.0.0.1', // Localhost (default: none)
      // port: 7545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
      provider: () => new HDWalletProvider(MNEMONIC, `http://localhost:7545`),
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(MNEMONIC, `wss://ropsten.infura.io/ws/v3/${INFURA_KEY}`),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      // confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

    rinkeby: {
      provider: () => new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${INFURA_KEY}`),
      network_id: 4, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 1, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

    live: {
      provider: function () {
        return new HDWalletProvider({
          MNEMONIC,
          providerOrUrl: `https://mainnet.infura.io/v3/` + infuraKey,
          chainId: 1,
        });
      },
      gas: 4000000,
      confirmations: 1,
      gasPrice: 38e9,
      network_id: 1,
      skipDryRun: true,
    },

    polygonMainnet: {
      provider: function () {
        return new HDWalletProvider({
          MNEMONIC,
          providerOrUrl: `https://rpc-mainnet.matic.network`,
          chainId: 137,
        });
      },
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137,
    },

    polygonMumbai: {
      provider: function () {
        return new HDWalletProvider({
          MNEMONIC: {
            phrase: MNEMONIC,
          },
          providerOrUrl: `https://matic-mumbai.chainstacklabs.com`,
          chainId: 80001,
        });
      },
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80001,
    },

    bsc_testnet: {
      provider: function () {
        return new HDWalletProvider({
          MNEMONIC: {
            phrase: MNEMONIC,
          },
          providerOrUrl: `https://data-seed-prebsc-1-s1.binance.org:8545`,
          chainId: 97,
        });
      },
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 97,
    },
    bsc: {
      provider: function () {
        return new HDWalletProvider({
          MNEMONIC: {
            phrase: MNEMONIC,
          },
          providerOrUrl: `https://bsc-dataseed1.binance.org`,
          chainId: 56,
        });
      },
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 56,
    },

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(MNEMONIC, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.13', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  // plugins: ['truffle-plugin-verify'],
  // api_keys: {
  //   etherscan: etherscan_key,
  // },
};
