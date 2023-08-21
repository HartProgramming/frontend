import { getAddyInfo } from "../Wallet/WalletFuncs";
import { useNavigate } from "react-router";

function sort(add) {
    const claypez = {
        claypez: "bd30c07bed903332937dcf328e2bd6da5aec1e686c13e8c5f2c99e48",
        claypemations: "efca5b92cd89148f7920f4cab089fce8af4d19b0ec53ff5b7c1ae445",
        gophers: "075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81",
      };
  for (let addy of add) {
    getAddyInfo(addy).then((policy) => {
      console.log(policy);
      for (let nft of policy) {
        if (
          nft.unit.includes(
            claypez.gophers || claypez.claypemations || claypez.claypez
          )
        ) {
          console.log("true");
          break;
        } else {
          console.log("false");
        }
      }
    });
  }
}
export {sort}
