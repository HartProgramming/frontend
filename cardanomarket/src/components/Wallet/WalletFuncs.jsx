import axios from "axios";
/* The last thing that was done was to gather all transactions related to an asset and put them into an array
and reverse that array so the latest transactions are at the front.
The next step is to loop through that reversed array of transactions and find utxos
that contain a smart contract address related to jpg.store, flip.io
and such. Then I need to parse through the utxos of that transaction and figure out how to gather the purchase price of the nft */
const stakeAddyInfo = (stakeAddress) => {
  async function getStakeAddy() {
    const config = {
      headers: {
        project_id: "mainnetBM7DSHkmy0Ehjn0O1aec8ZGtvaEnof2k",
      },
    };

    await axios
      .get(
        `https://cardano-mainnet.blockfrost.io/api/v0/accounts/${stakeAddress}/`,
        config
      )
      .then((rew) => console.log(rew.data))
      .catch((err) => console.log(err));
  }
  return getStakeAddy();
};

async function getAddy(stakeAddress) {
  let send;
  const config = {
    headers: {
      project_id: "mainnetBM7DSHkmy0Ehjn0O1aec8ZGtvaEnof2k",
    },
  }; 
  await axios
    .get(
      `https://cardano-mainnet.blockfrost.io/api/v0/accounts/${stakeAddress}/addresses`,
      config
    )
    .then((add) => {
      send = add.data[0].address;
      console.log(send);
      return send;
    })
    .catch((err) => console.log(err));
  return send;
}

async function getAddyDetails(add) {
  let equal;
  const config = {
    headers: {
      project_id: "mainnetBM7DSHkmy0Ehjn0O1aec8ZGtvaEnof2k",
    },
  };
  await axios
    .get(
      `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${add}`,
      config
    )
    .then((add) => {
      console.log(add);
    })
    .catch((err) => console.log(err));
}

async function getAddyInfo(add) {
  let equal;
  const config = {
    headers: {
      project_id: "mainnetBM7DSHkmy0Ehjn0O1aec8ZGtvaEnof2k",
    },
  };
  await axios
    .get(
      `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${add}/extended`,
      config
    )
    .then((add) => {
      equal = add.data.amount;
      console.log(equal);
      return equal;
    })
    .catch((err) => console.log(err));
  return equal;
}

async function getAssetInfo(ass) {
  let hashArr = [];

  const config = {
    headers: {
      project_id: "mainnetBM7DSHkmy0Ehjn0O1aec8ZGtvaEnof2k",
    },
  };
  await axios
    .get(
      `https://cardano-mainnet.blockfrost.io/api/v0/assets/${ass}/transactions`,
      config
    )
    .then((res) => {
      console.log(res);
      function reverseData(res) {
        for (let i of res) {
          hashArr.push(i.tx_hash);
        }
        return hashArr.reverse();
      }
      reverseData(res.data);
    })
    .catch((err) => console.log(err));
  return hashArr;
}

async function getTxInfo(tx) {
  let hashArr = [];
  const config = {
    headers: {
      project_id: "mainnetBM7DSHkmy0Ehjn0O1aec8ZGtvaEnof2k",
    },
  };
  await axios
    .get(`https://cardano-mainnet.blockfrost.io/api/v0/txs/${tx}/utxos`, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  return;
}

async function getAssetSale(ass) {
  let hashArr = [];
  const config = {
    headers: {
      "X-Api-Key": "ocnft_6424e51786fb3b598a0d2ced",
    },
  };

  await axios
    .get(`https://api.opencnft.io/2/nft/${ass}/tx`, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  return;
}
 
export {
  stakeAddyInfo,
  getAddy,
  getAddyInfo,
  getAddyDetails,
  getTxInfo,
  getAssetInfo,
  getAssetSale,
};
