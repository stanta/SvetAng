import EmbarkJS from '../embarkjs';

const FaucetConfig = {"abiDefinition":[{"inputs":[],"name":"getAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xa39fac12"},{"inputs":[],"name":"sendTokens","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xe47112bd"},{"inputs":[{"internalType":"address","name":"_tok","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x144fa6d7"},{"inputs":[{"internalType":"address[]","name":"_tok","type":"address[]"}],"name":"setTokens","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x625adaf2"}],"deployedAddress":"0xf51F9071AB0820d4BD3e0489708d116bB5DFADc8","className":"Faucet","args":[],"gas":330577,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b506004361061004c5760003560e01c8063144fa6d714610051578063625adaf214610079578063a39fac121461011c578063e47112bd14610174575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b031661017c565b005b6100776004803603602081101561008f57600080fd5b8101906020810181356401000000008111156100aa57600080fd5b8201836020820111156100bc57600080fd5b803590602001918460208302840111640100000000831117156100de57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506101cd945050505050565b610124610236565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610160578181015183820152602001610148565b505050509050019250505060405180910390f35b610077610298565b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0392909216919091179055565b60005b81518160ff161015610232576001828260ff16815181106101ed57fe5b60209081029190910181015182546001808201855560009485529290932090920180546001600160a01b0319166001600160a01b0390931692909217909155016101d0565b5050565b6060600180548060200260200160405190810160405280929190818152602001828054801561028e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610270575b5050505050905090565b3360009081526020819052604090205415806102c857503360009081526020819052604090205442610e10909101105b6103035760405162461bcd60e51b81526004018080602001828103825260248152602001806104496024913960400191505060405180910390fd5b60005b60015460ff8216101561043357600060018260ff168154811061032557fe5b600091825260209182902001546040805163313ce56760e01b815290516001600160a01b039092169350839263a9059cbb923392859263313ce56792600480840193829003018186803b15801561037b57600080fd5b505afa15801561038f573d6000803e3d6000fd5b505050506040513d60208110156103a557600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260ff909116600a90810a0260248301525160448083019260209291908290030181600087803b1580156103fe57600080fd5b505af1158015610412573d6000803e3d6000fd5b505050506040513d602081101561042857600080fd5b505050600101610306565b5033600090815260208190526040902042905556fe596f752063616e2072657175657374206a757374206f6e636520706572203630206d696ea2646970667358221220600558b9488deac596","realArgs":[],"fromIndex":0,"code":"608060405234801561001057600080fd5b506104a2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063144fa6d714610051578063625adaf214610079578063a39fac121461011c578063e47112bd14610174575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b031661017c565b005b6100776004803603602081101561008f57600080fd5b8101906020810181356401000000008111156100aa57600080fd5b8201836020820111156100bc57600080fd5b803590602001918460208302840111640100000000831117156100de57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506101cd945050505050565b610124610236565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610160578181015183820152602001610148565b505050509050019250505060405180910390f35b610077610298565b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0392909216919091179055565b60005b81518160ff161015610232576001828260ff16815181106101ed57fe5b60209081029190910181015182546001808201855560009485529290932090920180546001600160a01b0319166001600160a01b0390931692909217909155016101d0565b5050565b6060600180548060200260200160405190810160405280929190818152602001828054801561028e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610270575b5050505050905090565b3360009081526020819052604090205415806102c857503360009081526020819052604090205442610e10909101105b6103035760405162461bcd60e51b81526004018080602001828103825260248152602001806104496024913960400191505060405180910390fd5b60005b60015460ff8216101561043357600060018260ff168154811061032557fe5b600091825260209182902001546040805163313ce56760e01b815290516001600160a01b039092169350839263a9059cbb923392859263313ce56792600480840193829003018186803b15801561037b57600080fd5b505afa15801561038f573d6000803e3d6000fd5b505050506040513d60208110156103a557600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260ff909116600a90810a0260248301525160448083019260209291908290030181600087803b1580156103fe57600080fd5b505af1158015610412573d6000803e3d6000fd5b505050506040513d602081101561042857600080fd5b505050600101610306565b5033600090815260208190526040902042905556fe596f752063616e2072657175657374206a757374206f6e636520706572203630206d696ea2646970667358221220600558b9488deac59670e1c1e42f0c78bf76debb2ab579a4246b7c2ae612519d64736f6c63430006010033","runtimeBytecode":"608060405234801561001057600080fd5b506004361061004c5760003560e01c8063144fa6d714610051578063625adaf214610079578063a39fac121461011c578063e47112bd14610174575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b031661017c565b005b6100776004803603602081101561008f57600080fd5b8101906020810181356401000000008111156100aa57600080fd5b8201836020820111156100bc57600080fd5b803590602001918460208302840111640100000000831117156100de57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506101cd945050505050565b610124610236565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610160578181015183820152602001610148565b505050509050019250505060405180910390f35b610077610298565b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0392909216919091179055565b60005b81518160ff161015610232576001828260ff16815181106101ed57fe5b60209081029190910181015182546001808201855560009485529290932090920180546001600160a01b0319166001600160a01b0390931692909217909155016101d0565b5050565b6060600180548060200260200160405190810160405280929190818152602001828054801561028e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610270575b5050505050905090565b3360009081526020819052604090205415806102c857503360009081526020819052604090205442610e10909101105b6103035760405162461bcd60e51b81526004018080602001828103825260248152602001806104496024913960400191505060405180910390fd5b60005b60015460ff8216101561043357600060018260ff168154811061032557fe5b600091825260209182902001546040805163313ce56760e01b815290516001600160a01b039092169350839263a9059cbb923392859263313ce56792600480840193829003018186803b15801561037b57600080fd5b505afa15801561038f573d6000803e3d6000fd5b505050506040513d60208110156103a557600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260ff909116600a90810a0260248301525160448083019260209291908290030181600087803b1580156103fe57600080fd5b505af1158015610412573d6000803e3d6000fd5b505050506040513d602081101561042857600080fd5b505050600101610306565b5033600090815260208190526040902042905556fe596f752063616e2072657175657374206a757374206f6e636520706572203630206d696ea2646970667358221220600558b9488deac59670e1c1e42f0c78bf76debb2ab579a4246b7c2ae612519d64736f6c63430006010033","linkReferences":{},"swarmHash":"70e1c1e42f0c78bf76debb2ab579a4246b7c2ae612519d64736f6c6343000601","gasEstimates":{"creation":{"codeDepositCost":"237200","executionCost":"281","totalCost":"237481"},"external":{"getAddresses()":"infinite","sendTokens()":"infinite","setToken(address)":"41887","setTokens(address[])":"infinite"}},"functionHashes":{"getAddresses()":"a39fac12","sendTokens()":"e47112bd","setToken(address)":"144fa6d7","setTokens(address[])":"625adaf2"},"filename":"/home/st/Desktop/SvetAng2/SvetAng/.embark/contracts/Faucet.sol","originalFilename":"contracts/Faucet.sol","path":"/home/st/Desktop/SvetAng2/SvetAng/contracts/Faucet.sol","type":"file","deploymentAccount":"0x05048CC945907bBB20947bbC243202cB9F7e8fDB","transactionHash":"0x638d37a4d8026d66b0c173b5e801b85f6719935903d1cf234ef500ac39aea229"};
const Faucet = new EmbarkJS.Blockchain.Contract(FaucetConfig);

export default Faucet;
