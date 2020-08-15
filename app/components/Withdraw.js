import EmbarkJS from 'Embark/EmbarkJS';

import React from 'react';
import {Form, FormGroup, Input, HelpBlock, Button, FormText} from 'reactstrap';

import ERC20 from '../../embarkArtifacts/contracts/ERC20Detailed';

/**
 * 1. get list of tokens from oraclePrice
 * 2. show list and customer choosing token to stake
 * 3. get rates from oraclePrice and caclulate amounts
 * 4. approve transfer amount of ANG  by customer
 * 5. Transfer amount of token from, transfer amoun of ANG to customer
 */
class Withdraw  extends React.Component {

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
      decimalsBA1: 18,
      decimalsBA2: 18,
      symbolBA1: "",
      symbolBA2: "",
      sd1: 15,
      sd2: 10,
      expDays: 2,
      expHours: 2,
      description: "test",
      optionsList: [],
      isDeposited: 0,
      fullDeposited: 0,
      curOption: "",
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

  async deployOption (e) {
    
    e.preventDefault();
    await EmbarkJS.enableEthereum();
    let  account;
    await web3.eth.getAccounts().then(e => { account = e[0];  
      });
    const ERC20BA1sell =  EmbarkJS.Blockchain.Contract({
      abi: ERC20.options.jsonInterface,
      address: this.state.addrBA1sell
      });
    const ERC20BA2Buy  =  EmbarkJS.Blockchain.Contract({
        abi: ERC20.options.jsonInterface,
        address: this.state.addrBA2buy
        });

    this.state.decimalsBA1 = await  ERC20BA1sell.methods.decimals().call();
    this.state.symbolBA1 = await  ERC20BA1sell.methods.symbol().call();
    this.state.decimalsBA2 = await  ERC20BA2Buy.methods.decimals().call();
    this.state.symbolBA2 = await  ERC20BA2Buy.methods.symbol().call();
//web3.utils.toBN
    
    let amountBA1sell =  web3.utils.toBN(web3.utils.toWei (this.state.amountBA1sell));
    let decimalsBA1 =  web3.utils.toBN(10**(this.state.decimalsBA1 - 18))
    amountBA1sell =   amountBA1sell.mul(decimalsBA1);
    let  amountBA2buy =  web3.utils.toBN(web3.utils.toWei (this.state.amountBA2buy));
    let decimalsBA2 =  web3.utils.toBN(10**(this.state.decimalsBA2 - 18))
    amountBA2buy = amountBA2buy.mul(decimalsBA2);
    let expSecs = this.state.expDays*86400 + this.state.expHours *3600;
    let gasAmount;
    await MakeOptions.methods.makeOption(
      this.state.addrBA1sell,
      this.state.addrBA2buy,
      amountBA1sell.toString(),
      amountBA2buy.toString(),
      parseInt(this.state.sd1, 10) ,
      parseInt(this.state.sd2, 10),
      expSecs.toString(),
      this.state.description
     ).estimateGas({from: account}).then(e => { gasAmount = e;  
     }); ;
    MakeOptions.methods.makeOption(
                 this.state.addrBA1sell,
                 this.state.addrBA2buy,
                 amountBA1sell.toString(),
                 amountBA2buy.toString(),
                 parseInt(this.state.sd1, 10) ,
                 parseInt(this.state.sd2, 10),
                 expSecs.toString(),
                 this.state.description
                ).send({from:account, gas: gasAmount});
    this._addToLog("MakeOptions.methods.MakeOptions: ", this.state.getValue);

  }


  async getValue(e) {
    e.preventDefault();
    await EmbarkJS.enableEthereum();
    let  account;
    await web3.eth.getAccounts().then(e => { account = e[0];  
      });
    MakeOptions.methods.getLast(account).call().then(_value => this.setState({ getValue: _value }));
    
    this.state.curOption =  EmbarkJS.Blockchain.Contract({
        abi: Options.options.jsonInterface,
        address: this.state.getValue});
    
    await this.state.curOption.methods.thisOpt().call().then(_value =>
      {
      const paramsToString = params => Object.entries(params).reduce((acc, [key, value], index, array) => `${acc}${key}=${encodeURIComponent(value)}${index !== (array.length - 1) ? '&' : ''}`, "");    
      this.setState({addrBA1sell: _value.addrBA1sell});
      this.setState({addrBA2buy: _value.addrBA2buy});
      this.setState({amountBA1sell: _value.amountBA1sell});
      this.setState({amountBA2buy: _value.amountBA2buy});
      this.setState({sd1: _value.sd1});
      this.setState({sd2: _value.sd2});
      this.setState({expDays: _value.expDays});
      this.setState({description: _value.description});
      this.setState({isDeposited: _value.isDeposited});
      this.setState({fullDeposited: _value.fullDeposited});
      this.setState({ curOptstate: paramsToString(_value) })
      });
    this._addToLog("Option address: ", this.state.getValue );
  }

    
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
  async approveDep(e) {
    
    await EmbarkJS.enableEthereum();
    try {

      this.state.ERC20 =  EmbarkJS.Blockchain.Contract({
      abi: ERC20.options.jsonInterface,
      address: this.state.addrBA1sell
      });
      
      //const decimals = await this.state.ERC20.methods.decimals().call();
      const amountSD = web3.utils.toBN( this.state.sd1 * this.state. amountBA1sell / 100 );
  
      this.state.ERC20.methods.approve(this.state.getValue, amountSD.toString()).send();
   }
   catch (err) {
     console.log (err);
   }
  }

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
        
        
        <h3> 1. Deploy option    </h3>
          <Form>
                <FormGroup>
                <FormText color="muted">ERC20 token address of your base active (to sell)</FormText>
                  <Input type = "text"
                    key="addrBA1sell"
                // initialValues  = {this.state.addrBA1sell}
                    name="addrBA1sell"
                    placeholder="Ethereum address 0x0..."                  
                    onChange={(e) => this.handleChange(e)}/>
                    
                 <FormText color="muted">Amount to sell in your tokens</FormText>  
                 <Input type = "number"
                    step={'.0001'}
                    key="amountBA1sell"
                    // initialValues  = {this.state.amountBA1sell}
                        name="amountBA1sell"
                        placeholder="Sum in tokens you want to sell: 10.0001"                  
                    onChange={(e) => this.handleChange(e)}/>                  
                  
                 <FormText color="muted"> Percentage You offer for secure deposite  </FormText>  
                 <Input type = "number"
                    step={'.01'}
                      key="sd1"
                      // initialValues  = {this.state.sd1}
                      name="sd1"
                      placeholder="example in %: 10.01"                       
                    onChange={(e) => this.handleChange(e)}/>               

                 <FormText color="muted">ERC20 token address of base active to buy</FormText>
                  <Input type = "text"
                      key="addrBA2buy"
                    // initialValues  = {this.state.addrBA2buy}
                      name="addrBA2buy"
                      placeholder="Ethereum address 0x0..."  
                    onChange={(e) => this.handleChange(e)}/>
                    
                 <FormText color="muted">Amount to buy in 'their' tokens</FormText>  
                 <Input type = "number"
                    step={'.0001'}
                    key="amountBA2buy"
                    // initialValues  = {this.state.amountBA1sell}
                    name="amountBA2buy"
                    placeholder="Sum in tokens you want to buy for your tokens: 10.0001 "                  
                
                    onChange={(e) => this.handleChange(e)}/>                  
                  
                 <FormText color="muted"> Percentage You ASK  for secure deposite from buyers </FormText>  
                 
                 <Input type = "number"
                    key="sd2"
                    step={'.01'}
                  // initialValues  = {this.state.sd1}
                    name="sd2"
                    placeholder="example in %: 10.04"                    
                    onChange={(e) => this.handleChange(e)}/>         

                  <FormText color="muted"> Calendar (actronomical) days ... </FormText>  
                 <Input type = "number"
                    key="expDays"
                    // initialValues  = {this.state.sd1}
                      name="expDays"
                      placeholder="2"   
                    onChange={(e) => this.handleChange(e)}/>         
        <FormText color="muted"> ... and hours before mature the option after funded by YOU </FormText>  
                 <Input type = "number"
                    key="expHours"
                    // initialValues  = {this.state.sd1}
                      step={'.01'}
                      name="expHours"
                      placeholder="2.25"                    
                    onChange={(e) => this.handleChange(e)}/> 
                <FormText color="muted">Description for option </FormText>
                  <Input type = "text"
                      key="description"
                      // initialValues  = {this.state.addrBA2buy}
                      name="description"
                      placeholder="description here... "  
                    onChange={(e) => this.handleChange(e)}/>
                  <br />
                <Button color="primary" onClick={(e) => this.deployOption(e)}>Deploy option </Button>
                </FormGroup>
          </Form>
          <h3> 2. Get the current option address value</h3>
        <Form>
          <FormGroup>
            <Button color="primary" onClick={(e) => this.getValue(e)}>Get Value</Button>
            <FormText color="muted">Click the button to get the option address value.</FormText>
            {this.state.getValue && this.state.getValue !== 0 &&
           <p>Current option is at  <span className="value font-weight-bold">{this.state.getValue}</span> <br />
            
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

export default SimpleOption;
