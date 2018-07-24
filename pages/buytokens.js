import React,{Component} from 'react';
import Layout from '../components/Layout';
import {Form , Button, Input, Message} from 'semantic-ui-react';
import TutorialToken from '../ethereum/TutorialToken';
import Crowdsale from '../ethereum/Crowdsale';
import web3 from '../ethereum/web3';


class buytokens extends Component {
  constructor(props) {
    super(props);

    this.state = {amountToInvest: '',
    checkingAddress:'',
    balance:'',
    errorMessage:'',
    successfulMessage:'',
    estimationTokens:'',
    loading: false};
  }

  onCheckBalance = async (event) => {
      event.preventDefault();
      this.setState({errorMessage: ''});

      try {
      const accounts = await web3.eth.getAccounts();
      const chekingBalance = await TutorialToken.methods.balanceOf(this.state.checkingAddress).call();

      this.setState({balance: web3.utils.fromWei(chekingBalance,'ether')});

      } catch (err) {
      this.setState({errorMessage:err.message})
    }
  };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({loading:true, errorMessage: ''});

        try {
        const accounts = await web3.eth.getAccounts();
        await Crowdsale.methods.buyTokens(accounts[0])
        .send({
          from:accounts[0],
          value: web3.utils.toWei(this.state.amountToInvest,'ether')
        });
        } catch (err) {
        this.setState({errorMessage:err.message})
        }
      this.setState({loading:false});
      this.setState({successfulMessage:'Your purchase has been successful!'});
      this.setState({amountToInvest:'',estimationTokens:''});
    };

     onInputChange = async (amount) => {
      this.setState({amountToInvest: amount})
      try {
        const rate = await Crowdsale.methods.rate().call();
              console.log(rate);
        const tokenAmount = amount * rate;
              console.log(tokenAmount);
        this.setState({estimationTokens:tokenAmount})
      } catch (err) {
        this.setState({errorMessage:err.message})
      }
    };

   onAddressInput = (address) => {
      this.setState({checkingAddress: address})
   };



    render() {

      return(
        <Layout>
            <h3> Invest In Token ICO</h3>

          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.successfulMessage}>
              <Form.Field>
                  <label> Amount to Invest</label>
                  <Input
                  placeholder="Amount"
                  label="ether"
                  labelPosition="right"
                  value={this.state.amountToInvest}
                  onChange={event => this.onInputChange(event.target.value)}
                  />
              </Form.Field>
              <Form.Field>
                  <Input placeholder="Token Estimation (Read Only)" readOnly label="tokens"
                  labelPosition="right"
                  value={this.state.estimationTokens}
                  />
              </Form.Field>
              <Message error header="Oops!" content={this.state.errorMessage} />
              <Message success header={this.state.successfulMessage} />
              <Button loading={this.state.loading} primary>Invest</Button>
            </Form>

            <div className="ui divider"> </div>
            <h3> Check Balance of Address</h3>
            <Form onSubmit={this.onCheckBalance}>
            <Form.Group >
                <Form.Input
                  width={7}
                  fluid
                  id='form-subcomponent-shorthand-address'
                  label='Address'
                  placeholder='Input Address'
                  value={this.state.checkingAddress}
                  onChange={event => this.onAddressInput(event.target.value)}
                />
                <Form.Input
                  width={4}
                  readOnly
                  fluid
                  id='form-subcomponent-shorthand-Balance'
                  label='Balance'
                  placeholder='Balance'
                  value={this.state.balance}
                />
              </Form.Group>
              <Button  primary>Check Balance</Button>
              </Form>

         </Layout>
      );
    }
}

export default buytokens;
