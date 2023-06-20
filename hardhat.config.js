const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 137,
    },
    matic: {
      url: 'https://polygon-rpc.com',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
