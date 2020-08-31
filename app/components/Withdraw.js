import EmbarkJS from 'Embark/EmbarkJS';

import React from 'react';
import {Form, FormGroup, Input, HelpBlock, Button, FormText} from 'reactstrap';
import List from 'react-list-select';

import OraclePrice from '../../embarkArtifacts/contracts/OraclePrice';
import Exchange from '../../embarkArtifacts/contracts/Exchange';
import ERC20 from '../../embarkArtifacts/contracts/TokTst';
/**
 * 1. get list of tokens from oraclePrice
 * 2. show list and customer choosing token to withdraw 
 * 3. get rates from oraclePrice and caclulate amounts
 * 4. approve transfer amount of token by customer
 * 5. Transfer amount of token from, transfer amoun of ANG to customer
 */

class withdraw extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueSet: 10,
      getValue: "",
      logs: [],
      addToken: "",
      BA:"",
      decimals: 18,
      tokenPrice: 0,
      symbol: "",
      tokenList: [],
      isDeposited: 0,
      fullDeposited: 0,
      sumtowithdraw:0,
      curToken: "",
      OraclePrice:"",
      curOptstate:"" ,
      ERC20: "" ,
      sumToWithdrawSel: 0,
      account:""
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
    await web3.eth.getAccounts().then(e => { this.state.account = e[0];  
      });
    OraclePrice.methods.getallTokens().call().then(_value => this.setState({ tokenList: _value }));
    
  }
  // * 2. show list and customer choosing token to withdraw 
  handleChangeList(e) {
    let keyVal = {}
    keyVal["getValue"] = this.state.tokenList[e];
    this.setState( keyVal );
                 
  }
  async getValue(e) {
    e.preventDefault();
    await EmbarkJS.enableEthereum();
    
    await web3.eth.getAccounts().then(e => { this.state.account = e[0];  
      });
    //MakeOptions.methods.getLast(account).call().then(_value => this.setState({ getValue: _value }));
    
    this.state.curToken =  EmbarkJS.Blockchain.Contract({
        abi: ERC20.options.jsonInterface,
        address: this.state.getValue});
    
    let  addrBA; 
    await Exchange.methods.getBA().call().then(_value =>
      {
       addrBA = _value;
      });
    
    this.state.BA =  EmbarkJS.Blockchain.Contract({
          abi: ERC20.options.jsonInterface,
          address: addrBA});
      
          
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
    this._addToLog("token address: ", this.state.getValue );

  //  * 3. get rates from oraclePrice and caclulate amounts
  await OraclePrice.methods.getLastPrice(this.state.getValue).call().then(_value =>
    {
      this.setState({tokenPrice: _value});
    });
  }

  //   * 4. approve transfer amount of token by customer


async approve(e) {
    
    await EmbarkJS.enableEthereum();
    try {

      
      const amount = web3.utils.toBN( this.state.sumtowithdraw * 10 ** this.state.decimals / this.state.tokenPrice ).toString() ;
  
      this.state.BA.methods.approve(Exchange.options.address , amount).send();
   }
   catch (err) {
     console.log (err);
   }
  }

  async makewithdraw(e) {    
    await EmbarkJS.enableEthereum();
    try {
      
    const amount = web3.utils.toBN( this.state.sumtowithdraw * 10 ** this.state.decimals ).toString();
    Exchange.methods.withdraw(this.state.getValue, amount).send();
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
            <Button color="primary" onClick={(e) => this.getallTokens(e)}>Get my tokens list</Button>
            <br />
            <List class="pointer"
                items={this.state.tokenList}
            //  selected={[0]}
            //    disabled={[4]}
                multiple={false}
          //      onClick={(selected) => {this.state.getValue = _this.props.children }}
                onChange={(e) => this.handleChangeList(e)}/>
                
            <FormText color="muted">Or paste Token Smart contract address </FormText>
                  <Input type = "text"
                    key="getValue"
                // initialValues  = {this.state.getValue}
                    name="getValue"
                    placeholder="Ethereum smart contract address 0x..."
                   // initial// initialValues  = {this.state.getValue}
                    onChange={(e) => this.handleChange(e)}/>
            <p>Current address value is <span className="value font-weight-bold">{this.state.getValue}</span></p>
            {this.state.getValue && this.state.getValue !== 0 &&
            <Button color="primary" onClick={(e) => this.getValue(e)}>Get full token description</Button>
            }
            <FormText color="muted">Click the button to get the token address value.</FormText>
            {this.state.getValue && this.state.getValue !== 0 &&
            <p>Current token is at  <span className="value font-weight-bold">{this.state.getValue}</span> <br />
            <br/>
           Name: {this.state.name}
           <br /> 
            Symbol: {this.state.symbol } <br/>
            Decimals: {this.state.decimals } <br/>
            Price: {this.state.tokenPrice} ANGs. <br/>
            
            </p>}
          </FormGroup>
        </Form>
       <h3> 2. Withdraw </h3>
        <Form>
          <FormGroup>               

            <p>Current token  address value is <span className="value font-weight-bold">{this.state.getValue}</span></p>
            <Input type = "number"
                    key="sumtowithdraw"
                    step={'.0001'}
                    // initialValues  = {this.state.amountBA1sell}
                        name="sumtowithdraw"
                        placeholder="Sum in  tokens you want to withdraw"                  
                    onChange={(e) => this.handleChange(e)}/>   

            <FormText >Please approve transfer { this.state.sumtowithdraw / this.state.tokenPrice} sum of ANG tokens {this.state.sumtowithdraw } to exchange for {this.state.sumtowithdraw}{this.state.symbol} tokens. </FormText>
            <br/>
            <Button color="primary" onClick={(e) => this.approve(e)}>
              Approve transferFrom {
                    this.state.sumtowithdraw / this.state.tokenPrice} of  ANG tokens
            </Button>
            <FormText color="muted">Click the button make approve.</FormText>

              <br/>
            <Button color="primary" onClick={(e) => this.makewithdraw(e)}>Make withdraw</Button>
            <FormText color="muted">Click the button to withdraw.</FormText>

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

export default withdraw;
