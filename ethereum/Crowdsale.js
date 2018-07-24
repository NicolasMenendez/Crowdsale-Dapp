import web3 from './web3';
import Crowdsale from '../build/contracts/Crowdsale.json'

//console.log(TutorialToken.abi);
const instance = new web3.eth.Contract(
    Crowdsale.abi,
    '0x955ded1810b2808dfcf85e11f68e8dfb01f18162'
);


export default instance;
