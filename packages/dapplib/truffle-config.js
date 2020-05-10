require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind mixture gesture oppose obscure solid'; 
let testAccounts = [
"0xa73e4000f3418cbead03b8b7716acedb0eb18aae7da219f545ce3f859e5080fc",
"0x2c446fc3518c55cffdf987dec53f619bc4863aba5576d163cb6c03293138da89",
"0x0884653bcc9edca9dd826b09fcc9592da2816d837d98791a0ba2ce42b2e55db7",
"0x6d7985e93ba3b501fa0e720e8e0299c900ea658f271209935c2a9648a33f4339",
"0x25bbd9821d9f440f09d7bb1773a53fbb81d88e4c4527241d7672b9afec79d97d",
"0xf87636eb582c1773d041a9003db6ec24c0e9a8b0a1efd3ec43354a8e81d0d831",
"0x2110a8f27a8fe2bea62c36f5f726238a0553af71fa43cc1a306bafe83fbc0f74",
"0x77b9b9ffd27f69128703a5d803ddce39c6e9f3e43618c3f7f96f7463e0182af8",
"0xc997dd3255f0c76072761d85b50d830f4d5fffdd077b5fdcf5a5c6f0fbd2ed55",
"0x9f9c0f0b4be47e940dbbf9ebb99f2efe3f9897b2b765802f196d82674fed2f98"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
