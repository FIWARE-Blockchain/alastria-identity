module.exports = {
  port: 7555,
  testCommand: 'sleep 5 && ../node_modules/.bin/truffle test --network coverage',
  accounts: 25,
  copyPackages: ['uport-identity'],
  skipFiles: ['misc/Migrations.sol']
};
