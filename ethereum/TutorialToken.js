import web3 from './web3';
import TutorialToken from '../build/contracts/TutorialToken.json'

//console.log(TutorialToken.abi);
const instance = new web3.eth.Contract(
    TutorialToken.abi,
    '0xb958441b39891712cd272a6be0c1b068c22c07dc'
);


export default instance;
