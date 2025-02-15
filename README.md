## Supply Chain Dapp

## 🔧 Project Diagram: - How it works
![Project Diagram/Workflow](https://i.gyazo.com/45e7658e882387f740d3a7d61fe34c3a.png)

When you create an asset you can track it at page e.g http://localhost:3000/?address=0xCb7f003890B4aeDaEDC2d1478731F7812Fd84c6A
You can share asset, or send asset to another party who is the new custodian and can receive the asset.

### Technology Stack and Tools

* [Node Version Manager](https://heynode.com/tutorial/install-nodejs-locally-nvm) - node version manager
* [Metamask Wallet](https://metamask.io/) - Metamask Wallet
* [Yarn](https://yarnpkg.com/) - Alternative package manager to NPM 
* [Truffle](https://www.trufflesuite.com/) - development framework
* [React](https://reactjs.org/) - front end framework
* [Solidity](https://docs.soliditylang.org/en/v0.7.4/) - ethereum smart contract language
* [Ganache](https://www.trufflesuite.com/ganache) - local blockchain development
* [Web3](https://web3js.readthedocs.io/en/v1.3.0/) - library interact with ethereum nodes 
* [JavaScript](https://www.javascript.com/) - logic front end and testing smart contracts
* [Infura](https://infura.io/) - connection to ethereum networks 

##### Folder / Directory Structure (key folders and files)
* supply_chain
  * node_modules
  * public 
    * index.html
  * scripts
  * src
    * artifacts
    * components
    * contracts
    * index.js
  * test
    * Asset.test.js
  * .babelrc
  * .env.example
  * truffle-config.js
  * package.json
  * .gitignore
  * README.md
  * yarn.lock

### Machine set up (Optional if you have not setup before or having challenges on your system)

1. Mac & Linux 

- Have python 2.7 installed
Check if installed using command below
```sh
python -V
```
If not installed download from python [Python Download](https://www.python.org/downloads/) version 2.7 related to your system

- Download Ganache Graphical User Interface (GUI ) from [Truffle Framework Site](https://www.trufflesuite.com/ganache) choose related to your system 

- Have node-gyp installed
Check if installed using command below
```sh

```
If not installed, install using command below
```sh
npm i -g node-gyp
```

2. Windows machine 

Ignore Step 7 in the document below (document for bootcamp setup but applies to setup ubuntu environment)

- You may need to [Follow the Windows setup steps in this document](https://www.evernote.com/shard/s584/client/snv?noteGuid=960efc37-4e96-f95a-8c19-cc3b39b54836&noteKey=fd3fd7c99f629eb72a29552f16e4c9e8&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs584%2Fsh%2F960efc37-4e96-f95a-8c19-cc3b39b54836%2Ffd3fd7c99f629eb72a29552f16e4c9e8&title=B00tc%2540mp%2Bwin10%2Benv.)

### Preconfiguration, Installation and Running project locally 

1. You will need nvm  if not laready installed; so you can use specific version node version 14 and above 
```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
$ source ~/.nvm/nvm.sh
```
Restart your terminal

2. Install node v14.16.0 or versions above
```sh
$ nvm install 14.16.0 
$ nvm alias default 14.16.0 
$ nvm use default
```

3. Install truffle globally if not installed. 
Check if installed using 
```sh
truffle version
```
If not installed install with below 
```sh
$ npm install -g truffle
```

4. Ignore if either installed already! If opting to use ganache-cli vs [Ganache GUI](https://www.trufflesuite.com/ganache), install ganache-cli globally. Note that ganache-cli rus on port 8545 and ganache-gui runs on port 7545 as placced in truffle-config.js. 
Check if ganache-cli installed first with
```sh
ganache-cli --version
```
If not installed install with below
```sh
$ npm install -g ganache-cli
$ ganache-cli
```
Run ganache-cli in different terminal and keep running when compiling,testing, migrating, running app etc

6. Install yarn if not installed. Check if installed using 
```sh
yarn --version
```
If not installed install with below
```sh
$ npm install --global yarn
```

7. Enter project directory and install dependancies
```sh
$ cd nft_collectibles_masterclass
$ yarn install  
```

### Migrating contracts and Testing Locally to ensure all is working well

1. To compile contracts e.g you make changes to contracts
```sh
$ truffle compile 
```

2. To test contracts on ganache_cli
```sh
$ truffle console --network ganache_cli
$ test
```
To exit console use .exit

3. To test contracts on ganache_gui
```sh
$ truffle console --network ganache_gui
$ test
```

Make sure your truffle.js or truffle-config.js file is properly configured for development environment.
4. Migrate contracts to local running instance ganache 
If using ganache-cli use 
```sh
$ truffle migrate --reset --network ganache_cli
```
If using ganache gui use 
```sh
$ truffle migrate --reset --network ganache_gui
```

Copy private_keys of a few accounts in ganache and import into Metamask to interact with account with funds. 
6. Run app on localhost front-end
```sh
$ yarn start
```
Enter dApp in browser at localhost:3000

### Deploying to Ethereum testnets and mainnet

Ensure truffle-config.js is properly confiured for the network you need to deploy to e.g kovan, rinkeby, ropsten etc
Duplicate the .env.example file and rename it .env. Add the PRIVATE_KEYS as the private key of the Metamask 
account you will use to deploy. This is the same account you will add testnet ether to. On Metamask click Account Details-> Export Private Key to copy private key. Go to [infura.io](https://infura.io/) and create a project and copy the ID into .env as INFURA_ID

- Note that you can use --reset when migrating to replace add new deployments 
e.g truffle migrate --reset --network kovan

1. Migrate contracts to Ethereum Kovan testnet. You will need Kovan ETH to pay for transactions. 
Get Kovan ETH into a Metamask account from this [Kovan faucet click here](https://linkfaucet.protofire.io/kovan). Copy your Metamask address into site and click "Send Me 0.1 Test ETH"
```sh
$ truffle migrate  --network kovan
```
You can verify deployment, check transactions etc on [https://kovan.etherscan.io/](https://kovan.etherscan.io/)

2. Migrate contracts to Ethereum Rinkeby testnet. You will need Rinkeby ETH to pay for transactions. 
Get Rinkeby ETH into a Metamask account from this [Rinkeby faucet click here](http://rinkeby-faucet.com/). Copy your Metamask address into site and click "Submit" or this [Rinkey Faucet here](https://faucet.rinkeby.io/) which is prone to not working at times. Alternatively reach out to us on Slack for some Rinkeby ETH. 
```sh
$ truffle migrate --network rinkeby
```
You can verify deployment, check transactions etc on [https://rinkeby.etherscan.io/](https://rinkeby.etherscan.io/)

3. Migrate contracts to Ethereum Ropsten testnet. You will need Ropsten ETH to pay for transactions. 

You may get Ropsten ETH through below faucets:
[https://faucet.metamask.io/](https://faucet.metamask.io/)
[https://faucet.ropsten.be/](https://faucet.ropsten.be/)
[https://faucet.dimensions.network/](https://faucet.dimensions.network/)

```sh
$ truffle migrate --network ropsten
```
You can verify deployment, check transactions etc on [https://ropsten.etherscan.io/](https://ropsten.etherscan.io/)

4. Migrate contracts to Ethereum Mainnet. You will need real value ETH in the account. You can buy from exchanges or on Metamask Buy services. 
```sh
$ truffle migrate --network main
```
You can verify deployment, check transactions etc on [https://etherscan.io/](https://etherscan.io/)

### Optional publish front end to Surge
1. Run build and enter build directory
```sh
$ yarn run build
$ cd build
```
2. Install surge globally: 
```sh
$ npm i -g surge
```
"You may need to Login to surge and create account with email address and a password first time.  
If you forgot password you can ask for reset on terminal and get password reset link in your email." 
Select a unique domain name for your project e.g <uniquename>.surge.sh e.g asdfjkl.surge.sh where
my name of choice is asdfjkl

3. Deploy to surge. 
```sh
$ surge --domain asdfjkl.surge.sh
```
...and follow the instructions


