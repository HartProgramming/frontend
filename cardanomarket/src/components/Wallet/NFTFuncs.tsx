import axios from "axios";

async function axiosGet(url: string, apiKey: string) {
  const config = {
    headers: {
      "x-Api-Key": apiKey,
    },
  };
  return await axios.get(url, config).then((res) => res);
}

interface NFTCollectionDataProps {
  floor: number;
  supply: number;
  owners: number;
  volume: number;
  marketCap: number;
  fearGreed: number;
  image: string;
}
