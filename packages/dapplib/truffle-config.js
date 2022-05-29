require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name return sad million idea process army genius'; 
let testAccounts = [
"0x4a888659228ffa7b827d5f03c03b04c5b3d2805f7bd5df033396497f2c9de66d",
"0x75cec3b931a20b80ca3133bdedc688c4ef265dc5892db6c586916764eef4267a",
"0x328e74fb8892a95f79c2c85326d4187dfd2be948b3537db0826b720a7e4505d1",
"0x3e58435da858c030ed7d66490b9a6702c89350614407245d592b06944e208849",
"0x4c96e2429610adf655a13902eccc66e47839d33f23a97dc2abf1a882839ad55c",
"0x00b8ce3d99bfe7efb82330d39c4d4617abbc13a3178862d2363edae96c656e62",
"0x834a645cec06c816855aac0969d6772b9571a67664c4c6e5095989ffbb608be2",
"0x03ed99aa3b233a13d7f1f9934c4541158f6a09c6e7bacf7daddf163116714210",
"0xed7e053c3cd69b6d6704f7449d3f7d865f2d11d7b5ea63bca280611d70ee3417",
"0x07580f515ef5d48d8a0d242e7a3878781e5e35e588f90b79127df0cfed232278"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


