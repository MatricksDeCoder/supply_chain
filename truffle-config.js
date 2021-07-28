require('babel-register')
require('babel-polyfill')
require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    ganache_gui: { // for ganache GUI Graphical User Interface
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ganache_cli: { // for ganache CLI Command Line Interface
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      networkCheckTimeout: 10000, 
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://kovan.infura.io/v3/${process.env.INFURA_ID}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 42,
      skipDryRun: true
    },
    rinkeby: {
      networkCheckTimeout: 10000, 
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 4,
      skipDryRun: true
    },
    ropsten: {
      networkCheckTimeout: 10000, 
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 3,
      skipDryRun: true
    },
    main: {
      networkCheckTimeout: 10000, 
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://main.infura.io/v3/${process.env.INFURA_ID}`// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 5000000000, // 5 gwei
      network_id: 1
    },
    
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/artifacts/',
  compilers: {
    solc: {
      version: "^0.8.4",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
