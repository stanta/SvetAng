import EmbarkJS from 'Embark/EmbarkJS';
import React from 'react';
import {Form, FormGroup, Input, HelpBlock, Button, FormText} from 'reactstrap';
import Faucet  from '../../embarkArtifacts/contracts/Faucet';
import ReactGA from 'react-ga';


class faucet extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      valueSet: 10,
      valueGet: "",
      addrBA1: 0x0000000000000000000000,
      addrBA2: 0x0000000000000000000000,
      addrs:[],
      logs: []
    };
  }

  handleChange(e) {
    this.setState({ valueSet: e.target.value });
  }

  checkEnter(e, func) {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    func.apply(this, [e]);
  }

  async sendTokens(e) {
    e.preventDefault();
    await EmbarkJS.enableEthereum();

    await Faucet.methods.sendTokens().send();

    this.state.addrs = await Faucet.methods.getAddresses().call();
    this._addToLog("SimpleStorage.methods.set(value).send()");
  }

  getValue(e) {
    e.preventDefault();

    //SimpleStorage.methods.get().call().then(_value => this.setState({ valueGet: _value }));
    this._addToLog("SimpleStorage.methods.get(console.log)");
  }

  _addToLog(txt) {
    this.state.logs.push(txt);
    this.setState({ logs: this.state.logs });
  }

  render() {
    return (<React.Fragment>


        <h3> Get test tokens (first switch to ROPSTEN network!) </h3>
        <Form>
          <FormGroup>
            <Button color="primary" onClick={(e) => this.sendTokens(e)}>Get tokens</Button>
            <FormText color="muted">Click the button to get 100 tokens UST and wETH. </FormText>
            {this.state.addrs[0] !== 0  && this.state.addrs[1] !== 0 &&
            <p>Current tokens addresses value are <li><span className="value font-weight-bold">{this.state.addrs[0]} </span></li> <li><span className="value font-weight-bold">{this.state.addrs[1]} </span> </li>, and add this to your wallet </p>}
          </FormGroup>
        </Form>

        <h3> 3. Contract Calls </h3>
        <p>Javascript calls being made: </p>
        <div className="logs">
          {
            this.state.logs.map((item, i) => <p key={i}>{item}</p>)
          }
        </div>
      </React.Fragment>
    );
  }
}

export default faucet;
