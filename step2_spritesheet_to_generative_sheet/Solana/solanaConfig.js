"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
/**
 * If you are exporting your project for Solana:
 * 1. Read the Readme section for more info
 * 2. Enter your metadata information in this file, more on the Slana Metadata
 *    standards here, https://docs.metaplex.com/nft-standard
 * 3. Run the generate for Solana script, yarn generate:solana (or npm run generate:solana)
 * 4. If you forgot to do step 3, do step 3 OR run the solana util
 *    `node utils/metaplex.js`
 *
 * Credits:
 * Metaplex.js util by https://github.com/DawidAbram
 */
const NFTName = "NameOfNFT" //This is the name there will be showen on your NFTs !!! Name can at max be 32 characters !!!
const collectionName = "PROJECT_NAME"; //This is used if mutiple collection is needed
const collectionFamily = "PROJECT_FAMILY"; // Many projects can belong to one family
const symbol = "EX"; // !!! Symbol can at max be 10 characters !!!
const NFTPrefix = "#" //Prefix = "#" results in "NameOfNFT #10", prefix = ":" results in "NameOfNFT :10"
const namePrefixGap = " " //if you want the space between the nft name and prefix, leave the space. If you don't, delete the space. With space: "NameOfNFT #10", without space: "NameOfNFT#10"

const baseUriPrefix = ""; // OPTIONAL, if you need to prefix your image#.png with a baseURI
const description = "Example Description";
const external_url = ""; // add optional external URL here, e.g, https://0n10nDivision.com

const royaltyFee = 500; // This is 2% royalty fee

/**
 * Array of Creators.
 * If there is more than one creator, add additional objects with address and share properties.
 */
const creators = [
    {
        address: "Royalty Wallet Address", // Wallet address for royalties
        share: 100, // Amount of shares for this wallet, can be more than one, all have to add up to 100 together !!! And a maximum of 4 creators !!!
    },
    // uncomment and edit for additional creator.
    // {
    //   address: "second wallet address here",
    //   share: 100,
    // },
];

const { outputType } = require(path.join(
    basePath,
    "../global_config.json"
));


module.exports = {
    symbol,
    NFTName,
    collectionName,
    collectionFamily,
    NFTPrefix,
    namePrefixGap,
    description,
    royaltyFee,
    creators,
    external_url,
    baseUriPrefix,
    outputType,
};
