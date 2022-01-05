require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

//require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "85H3M7SNEJYBSVRV7SVQM8ZXVUGW4Y7AVP",
  }
};