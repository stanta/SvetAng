module.exports = {
  // default applies to all environments
  default: {
    // order of connections the dapp should connect to
    dappConnection: [
      "$EMBARK",
      "$WEB3",  // uses pre existing web3 object if available (e.g in Mist)
      "ws://localhost:8546",
      "http://localhost:8545"
    ],

    // Automatically call `ethereum.enable` if true.
    // If false, the following code must run before sending any transaction: `await EmbarkJS.enableEthereum();`
    // Default value is true.
    // dappAutoEnable: true,

    gas: "auto",

    // Strategy for the deployment of the contracts:
    // - implicit will try to deploy all the contracts located inside the contracts directory
    //            or the directory configured for the location of the contracts. This is default one
    //            when not specified
    // - explicit will only attempt to deploy the contracts that are explicitly specified inside the
    //            contracts section.
    strategy: 'explicit',

    // minimalContractSize, when set to true, tells Embark to generate contract files without the heavy bytecodes
    // Using filteredFields lets you customize which field you want to filter out of the contract file (requires minimalContractSize: true)
     minimalContractSize: true,
    // filteredFields: [],

    deploy: {
      Experts: {
        fromIndex: 0,
        args: []
      },

      Exchange: {
        fromIndex: 0,
        args: [],

      },
   /*
      ExpertsRewards: {
        fromIndex: 0,
        args: [],
        onDeploy: async ({contracts, web3, logger}) => {
          await contracts.ExpertsRewards.methods.setExpertsContr(contracts.Experts.options.address).send({from: web3.eth.defaultAccount});

        }
      },
*/

      OraclePrice: {
        fromIndex: 0,
        args: [], 
        
        },

        Faucet: {
          fromIndex: 0,
          args: [], 
          
          },
       
      TokTst: { deploy: false,},
      DAItest: {
        instanceOf: 'TokTst',
          fromIndex: 0,
          args: ["DAItest", "DAI", 18], 

      },
        
      ALFtst: {
        instanceOf: 'TokTst',
        fromIndex: 0,
        args: ["ALFtst", "ALF", 17], 

        },
      QUBtst: {
        instanceOf: 'TokTst',
        fromIndex: 0,
        args: ["QUBtst", "QUB", 16], 

        },
        ANGtst: {
          instanceOf: 'TokTst',
          fromIndex: 0,
          args: ["ANGtst", "ANG", 18], 
  
          },
                       
    },
      afterDeploy: async ({contracts, web3, logger}) => {
        await contracts.Faucet.methods.setToken(contracts.DAItest.options.address).send({from: web3.eth.defaultAccount});
        await contracts.Faucet.methods.setToken(contracts.ALFtst.options.address).send({from: web3.eth.defaultAccount});
        await contracts.Faucet.methods.setToken(contracts.QUBtst.options.address).send({from: web3.eth.defaultAccount});  
        await contracts.Faucet.methods.setToken(contracts.ANGtst.options.address).send({from: web3.eth.defaultAccount});        

        await contracts.Experts.methods.addExpert(web3.eth.defaultAccount).send({from: web3.eth.defaultAccount});
        await contracts.OraclePrice.methods.setExpertsContr(contracts.Experts.options.address).send({from: web3.eth.defaultAccount});
        await contracts.OraclePrice.methods.setExchange(contracts.Exchange.options.address).send({from: web3.eth.defaultAccount});   

        await contracts.OraclePrice.methods.addPrice(contracts.ALFtst.options.address, 1).send({from: web3.eth.defaultAccount});   
        await contracts.OraclePrice.methods.addPrice(contracts.QUBtst.options.address, 2).send({from: web3.eth.defaultAccount});        
        await contracts.OraclePrice.methods.addPrice(contracts.DAItest.options.address, 3).send({from: web3.eth.defaultAccount});

        await contracts.Exchange.methods.setBA(contracts.ANGtst.options.address).send({from: web3.eth.defaultAccount});
        await contracts.Exchange.methods.setPriceOracle(contracts.OraclePrice.options.address).send({from: web3.eth.defaultAccount});
        await contracts.ANGtst.methods.transfer(contracts.Exchange.options.address, "1000000000000000000000000").send({from: web3.eth.defaultAccount});
    }
  },

  // default environment, merges with the settings in default
  // assumed to be the intended environment by `embark run`
  development: {},

  // merges with the settings in default
  // used with "embark run privatenet"
  privatenet: {},

  

  // you can name an environment with specific settings and then specify with
  // "embark run custom_name" or "embark blockchain custom_name"
  // custom_name: {}
};
