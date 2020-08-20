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
      addrBA1sell: "",
      addrBA2buy: "",
      amountBA1sell: "",
      amountBA2buy: "",
      decimals: 18,
      tokenPrice: 0,
      symbol: "",
      tokenList: [],
      isDeposited: 0,
      fullDeposited: 0,

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
        address: this.state.getValue});
    
          
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
  await this.state.OraclePrice.methods.getLastPrice(this.state.getValue).call().then(_value =>
    {
      this.setState({tokenPrice: _value});
    });
  }

  /*  
  async registerDeposite(e) {
    e.preventDefault();
    await EmbarkJS.enableEthereum();
    this.state.curOption =  EmbarkJS.Blockchain.Contract({
                                    abi: Options.options.jsonInterface,
                                    address: this.state.getValue});

    this.state.curOption.methods.isHandMadeDeposite().send(); //({gas: gasAmount});

    this._addToLog("Option deposited time: ", this.state.isDeposited);
  }

/*

  async getValueDeposited(e) {
    e.preventDefault();
    
    await EmbarkJS.enableEthereum();
    this.state.curOption =  EmbarkJS.Blockchain.Contract({
                                    abi: Options.options.jsonInterface,
                                    address: this.state.getValue});

    this.state.curOption.methods.isDeposited().call().then(_value => this.setState({ isDeposited: _value }));
    
    this._addToLog("Option deposited time: ", this.state.isDeposited);
    
  }
*/
    //   * 4. approve transfer amount of token by customer


async approve(e) {
    
    await EmbarkJS.enableEthereum();
    try {

      this.state.ERC20 =  EmbarkJS.Blockchain.Contract({
      abi: ERC20.options.jsonInterface,
      address: this.state.tokenPrice
      });
      
      //const decimals = await this.state.ERC20.methods.decimals().call();
      const amountSD = web3.utils.toBN( this.state.sd1 * this.state. amountBA1sell / 100 );
  
      this.state.ERC20.methods.approve(this.state.getValue, amountSD.toString()).send();
   }
   catch (err) {
     console.log (err);
   }
  }
/*
  async makeDeposite(e) {    
    await EmbarkJS.enableEthereum();
    try {
      this.state.curOption =  EmbarkJS.Blockchain.Contract({
        abi: Options.options.jsonInterface,
        address: this.state.getValue
      });
      
      this.state.curOption.methods.makeDeposite().send();
   }
   catch (err) {
     console.log (err);
   }
  }
  */

  async approveFull(e) {
    
    await EmbarkJS.enableEthereum();
    try {

      this.state.ERC20 =  EmbarkJS.Blockchain.Contract({
      abi: ERC20.options.jsonInterface,
      address: this.state.addrBA1sell
      });
      
      //const decimals = await this.state.ERC20.methods.decimals().call();
      const amountSD = web3.utils.toBN( (100- this.state.sd1) * this.state.
        amountBA1sell / 100 );
  
      this.state.ERC20.methods.approve(this.state.getValue, amountSD.toString()).send();
   }
   catch (err) {
     console.log (err);
   }
  }

  async finalFundOpt(e) {    
    await EmbarkJS.enableEthereum();
    try {
      this.state.curOption =  EmbarkJS.Blockchain.Contract({
        abi: Options.options.jsonInterface,
        address: this.state.getValue
      });
      
      this.state.curOption.methods.finalFundOpt().send();
   }
   catch (err) {
     console.log (err);
   }
  }
  
  async withdrawSeller(e) {    
    await EmbarkJS.enableEthereum();
    try {
      this.state.curOption =  EmbarkJS.Blockchain.Contract({
        abi: Options.options.jsonInterface,
        address: this.state.getValue
      });
      let amntWthdrSelBN = web3.utils.toWei (web3.utils.toBN(this.state.sumToWithdrawSel));
    
      this.state.curOption.methods.withdrawSeller(amntWthdrSelBN.toString()).send();
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
        <h3> 2. Get token's data</h3>
        <Form>
          <FormGroup>
            <Button color="primary" onClick={(e) => this.getValue(e)}>Get Value</Button>
            <FormText color="muted">Click the button to get the option address value.</FormText>
            {this.state.getValue && this.state.getValue !== 0 &&
           <p>Current token is at  <span className="value font-weight-bold">{this.state.getValue}</span> <br />
            
           Description: {this.state.description}
           <br /> 
           ETH Address active to sell: {this.state.addrBA1sell } <br/>
           ETH symbol active to sell: {this.state.symbolBA1 } <br/>
           Amount active to sell: {this.state.amountBA1sell / 10**(this.state.decimalsBA1)} <br/>
           Depositing active to sell: {this.state.sd1 } % <br/>
           <br/>
           Address active  to buy: {this.state.addrBA2buy  } <br/>
           ETH symbol active to buy: {this.state.symbolBA2 } <br/>
           Amount active to buy: {this.state.amountBA2buy / 10**(this.state.decimalsBA2) } <br/>
           Depositing active to buy: {this.state.sd2 } % <br/>
           <br/>
           
           </p>
            }
            
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
