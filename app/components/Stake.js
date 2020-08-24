import EmbarkJS from 'Embark/EmbarkJS';

import React from 'react';
import {Form, FormGroup, Input, HelpBlock, Button, FormText} from 'reactstrap';
import List from 'react-list-select';

import OraclePrice from '../../embarkArtifacts/contracts/OraclePrice';

import ERC20 from '../../embarkArtifacts/contracts/ERC20Detailed';
/**
 * 1. get list of tokens from oraclePrice
 * 2. show list and customer choosing token to stake 
 * 3. get rates from oraclePrice and caclulate amounts
 * 4. approve transfer amount of token by customer
 * 5. Transfer amount of token from, transfer amoun of ANG to customer
 */

class Stake extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueSet: 10,
      getValue: "",
      logs: [],
      addToken: "",
      decimals: 18,
      tokenPrice: 0,
      symbol: "",
      tokenList: [],
      isDeposited: 0,
      fullDeposited: 0,
      sumToPurshase:0,
      curToken: "",
      OraclePrice:"",
      curOptstate:"" ,
      ERC20: "" ,
      sumToWithdrawSel: 0
    };
  }

  handleChange(e) {
    let keyVal = {}
    keyVal[e.target.name] = e.target.value;
    this.setState( keyVal );
                 
  }

  checkEnter(e, func) {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    func.apply(this, [e]);
  }


  _addToLog(txt) {
    this.state.logs.push(txt);
    this.setState({ logs: this.state.logs });
  }

//  * 1. get list of tokens from oraclePrice``
  async getallTokens(e) {
    e.preventDefault();
    await EmbarkJS.enableEthereum();
    let  account;
    await web3.eth.getAccounts().then(e => { account = e[0];  
      });
    OraclePrice.methods.getallTokens(account).call().then(_value => this.setState({ tokenList: _value }));
    
  }
  // * 2. show list and customer choosing token to stake 
  handleChangeList(e) {
    let keyVal = {}
    keyVal["getValue"] = this.state.tokenList[e];
    this.setState( keyVal );
                 
  }
  async getValue(e) {
    e.preventDefault();
    await EmbarkJS.enableEthereum();
    let  account;
    await web3.eth.getAccounts().then(e => { account = e[0];  
      });
    //MakeOptions.methods.getLast(account).call().then(_value => this.setState({ getValue: _value }));
    
    this.state.curToken =  EmbarkJS.Blockchain.Contract({
        abi: Options.options.jsonInterface,
        address: this.state.addToken});
    
          
    await this.state.curToken.methods.name().call().then(_value =>
          {
            this.setState({name: _value});
          });
        
    await this.state.curToken.methods.symbol().call().then(_value =>
            {
              this.setState({symbol: _value});
            });
    await this.state.curToken.methods.decimals().call().then(_value =>
              {
                this.setState({decimals: _value});
              });
    this._addToLog("token address: ", this.state.addToken );

  //  * 3. get rates from oraclePrice and caclulate amounts
  await this.state.OraclePrice.methods.getLastPrice(this.state.addToken).call().then(_value =>
    {
      this.setState({tokenPrice: _value});
    });
  }

  //   * 4. approve transfer amount of token by customer


async approve(e) {
    
    await EmbarkJS.enableEthereum();
    try {

      const curToken =  EmbarkJS.Blockchain.Contract({
      abi: ERC20.options.jsonInterface,
      address: this.state.curToken
      });
      
      const decimals = await curToken.methods.decimals().call();
      const amount = web3.utils.toBN( this.state.sumToPurshase * 10 ** decimals );
  
      curToken.methods.approve(this.state.getValue, amount.toString()).send();
   }
   catch (err) {
     console.log (err);
   }
  }

  async makeStake(e) {    
    await EmbarkJS.enableEthereum();
    try {
      const curToken =  EmbarkJS.Blockchain.Contract({
        abi: Options.options.jsonInterface,
        address: this.state.getValue
      });
;
      
    const amount = web3.utils.toBN( this.state.sumToPurshase * 10 ** decimals );
    curToken.methods.stake(amount).send();
   }
   catch (err) {
     console.log (err);
   }
  }
 render() {
    return (<React.Fragment>
        
        
        <h3> 1. Choose token:</h3>
        <Form>
          <FormGroup>
            <Button color="primary" onClick={(e) => this.getIOUList(e)}>Get my IOUs list</Button>
            <br />
            <List class="pointer"
                items={this.state.tokenList}
            //  selected={[0]}
            //    disabled={[4]}
                multiple={false}
          //      onClick={(selected) => {this.state.getValue = _this.props.children }}
                onChange={(e) => this.handleChangeList(e)}/>
                
            <FormText color="muted">Or paste IOU Smart contract address </FormText>
                  <Input type = "text"
                    key="getValue"
                // initialValues  = {this.state.getValue}
                    name="getValue"
                    placeholder="Ethereum smart contract address 0x..."
                   // initial// initialValues  = {this.state.getValue}
                    onChange={(e) => this.handleChange(e)}/>
            <p>Current address value is <span className="value font-weight-bold">{this.state.getValue}</span></p>
            {this.state.getValue && this.state.getValue !== 0 &&
            <Button color="primary" onClick={(e) => this.getValue(e)}>Get full IOU description</Button>
            }
            <FormText color="muted">Click the button to get the IOU address value.</FormText>
            {this.state.getValue && this.state.getValue !== 0 &&
            <p>Current IOU is at  <span className="value font-weight-bold">{this.state.getValue}</span> <br />
            <br/>
           Name: {this.state.name}
           <br /> 
            Symbol: {this.state.symbol } <br/>
           Decimals: {this.state.decimals }
          Price: {this.state.price} "ANG". <br/>
            
            </p>}
          </FormGroup>
        </Form>
       <h3> 2. Staking </h3>
        <Form>
          <FormGroup>               

            <p>Current token  address value is <span className="value font-weight-bold">{this.state.getValue}</span></p>
            <Input type = "number"
                    key="sumToPurshase"
                    step={'.0001'}
                    // initialValues  = {this.state.amountBA1sell}
                        name="sumToPurshase"
                        placeholder="Sum in option tokens you want to buy option"                  
                    onChange={(e) => this.handleChange(e)}/>   

            <FormText >Please approve transfer to exchange  your sum of {this.state.symbol} tokens {this.state.sumToPurshase } to exchange for { this.state.sumToPurshase / this.state.tokenPrice} ANGs. </FormText>
            <br/>
            <Button color="primary" onClick={(e) => this.approveSD(e)}>
              Approve transferFrom {
                    this.state.sumToPurshase} of  {this.state.symbol} tokens
            </Button>
            <FormText color="muted">Click the button make approve.</FormText>

              <br/>
            <Button color="primary" onClick={(e) => this.makeStake(e)}>Make purshaising</Button>
            <FormText color="muted">Click the button make purshaising.</FormText>

          </FormGroup>
        </Form>

   
       <h3> Logs </h3>
        <p> calls being made: </p>
        <div className="logs">
          {
            this.state.logs.map((item, i) => <p key={i}>{item}</p>)
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Stake;
