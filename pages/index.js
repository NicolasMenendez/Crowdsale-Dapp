import React, {Component} from "react";
import Layout from '../components/Layout';
import TutorialToken from '../ethereum/TutorialToken';
import Crowdsale from '../ethereum/Crowdsale';
import web3 from '../ethereum/web3';
import { Header, Button } from 'semantic-ui-react';
import ProgressBar from '../components/progressBar';
import {Link} from '../routes.js';



class CrowdSaleApp extends Component {
    static async getInitialProps () {
      const accounts = await web3.eth.getAccounts();
      const tokenName = await TutorialToken.methods.name().call();
      const totalSupply = await TutorialToken.methods.totalSupply().call();
      const remainingTokens = await TutorialToken.methods.balanceOf(Crowdsale.options.address).call();

      return { accounts, tokenName, totalSupply, remainingTokens };
    }


    render() {
        return (
          <Layout>
            <div>
              <h3 className="ui header" />
              <h1 className="ui center aligned blue header">Token Crowdsale</h1>
              <h2 className="ui center aligned blue header">ICO Live Now!</h2>
              <div> <ProgressBar percentage={this.props.remainingTokens/this.props.totalSupply} /> </div>
              <div>
              <h4 className="ui right aligned header"> Remaining tokens:
              {web3.utils.fromWei(this.props.remainingTokens,'ether')}/
              {web3.utils.fromWei(this.props.totalSupply,'ether')} </h4>
              </div>
              <h2 className="ui center aligned header">
                <Link route="/buytokens">
                  <button className="ui center aligned huge blue button" role="button">Buy Tokens</button>
                </Link>
              </h2>

            </div>
          </Layout>
        );
      }
}

export default CrowdSaleApp;

//<div> {this.props.accounts[0]} </div>
//<div> {this.props.TokenName} </div>
