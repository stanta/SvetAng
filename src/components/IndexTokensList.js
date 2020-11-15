import React from 'react'
import EmbarkJS from 'Embark/EmbarkJS';

import IndexTokensListItem from './IndexTokensListItem';
import IndexStorage from '../embarkArtifacts/contracts/IndexStorage';

class IndexTokensList extends React.Component {

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
        sumtoStake:0,
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
  

async  indexList(e) {
   // e.preventDefault();
    await EmbarkJS.enableEthereum();
    await web3.eth.getAccounts().then(e => { this.state.account = e[0];  
      });
      IndexStorage.methods.indexList().call().then(_value => this.setState({ tokenList: _value }));
    
  }

  render() {
    return (<React.Fragment>
        

    return (
        <div>
            <div className="left-list-header">
                    <p>
                        AVAILABLE INDEX TOKENS (PORTFELS)
                    </p>
                </div>
                <ul className="left-list-items">
                   indexList(e);
                    <IndexTokensListItem/>
                    
                   
                </ul>
        </div>
    )
    </React.Fragment>
    );
  
}
}
export default IndexTokensList;
