import EmbarkJS from '../embarkjs';

const OracleTotSupplyConfig = {"abiDefinition":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"_addrToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"addamount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addrToken","type":"address"}],"name":"delToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addrToken","type":"address"}],"name":"getLastamount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addrToken","type":"address"}],"name":"getLenamount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getallTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addrExp","type":"address"}],"name":"setExpertsContr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"setNewOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addrOwner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}],"deployedAddress":"0x04b932796a9ec56521568B90CC9DA1634Afd6d30","className":"OracleTotSupply","args":[],"gas":"auto","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106100885760003560e01c8063653e3f271161005b578063653e3f27146100f1578063a9bc9ed914610104578063ab7bc7aa14610117578063f5a1f5b4146100a257610088565b8063118e06331461008d57806313af4035146100a257806352258b9d146100b55780635f1b98f0146100c8575b600080fd5b6100a061009b3660046104c1565b61012c565b005b6100a06100b03660046104c1565b610183565b6100a06100c33660046104e3565b6101cf565b6100db6100d63660046104c1565b610324565b6040516100e89190610620565b60405180910390f35b6100a06100ff3660046104c1565b61033f565b6100db6101123660046104c1565b61038b565b61011f610401565b6040516100e89190610541565b6003546001600160a01b0316331461015f5760405162461bcd60e51b81526004016101569061058e565b60405180910390fd5b6001600160a01b038116600090815260016020526040812061018091610464565b50565b6003546001600160a01b031633146101ad5760405162461bcd60e51b81526004016101569061058e565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600054604051633b629ad760e11b81526001600160a01b03909116906376c535ae906101ff90339060040161052d565b60206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f919061050d565b61026b5760405162461bcd60e51b8152600401610156906105b2565b6001600160a01b0382166000908152600160205260409020546102d457600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0384161790555b6001600160a01b0390911660009081526001602081815260408084208151808301909252948152428183019081528554808501875595855291909320925160029094029092019283559051910155565b6001600160a01b031660009081526001602052604090205490565b6003546001600160a01b031633146103695760405162461bcd60e51b81526004016101569061058e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600160205260408120546103c05760405162461bcd60e51b8152600401610156906105e9565b6001600160a01b0382166000908152600160205260409020805460001981019081106103e857fe5b9060005260206000209060020201600001549050919050565b6060600280548060200260200160405190810160405280929190818152602001828054801561045957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161043b575b505050505090505b90565b5080546000825560020290600052602060002090810190610180919061046191905b808211156104a05760008082556001820155600201610486565b5090565b80356001600160a01b03811681146104bb57600080fd5b92915050565b6000602082840312156104d2578081fd5b6104dc83836104a4565b9392505050565b600080604083850312156104f5578081fd5b6104ff84846104a4565b946020939093013593505050565b60006020828403121561051e578081fd5b815180151581146104dc578182fd5b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b818110156105825783516001600160a01b03168352928401929184019160010161055d565b50909695505050505050565b6020808252600a908201526927b7363c9037bbb732b960b11b604082015260600190565b60208082526017908201527f4f6e6c79206578706572742063616e20646f2074686973000000000000000000604082015260600190565b60208082526018908201527f4e6f20616d6f756e7420666f72207468697320746f6b656e0000000000000000604082015260600190565b9081526020019056fea2646970667358221220330155bad58bf6a607","realArgs":[],"fromIndex":0,"code":"608060405234801561001057600080fd5b50600380546001600160a01b0319163317905561065f806100326000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063653e3f271161005b578063653e3f27146100f1578063a9bc9ed914610104578063ab7bc7aa14610117578063f5a1f5b4146100a257610088565b8063118e06331461008d57806313af4035146100a257806352258b9d146100b55780635f1b98f0146100c8575b600080fd5b6100a061009b3660046104c1565b61012c565b005b6100a06100b03660046104c1565b610183565b6100a06100c33660046104e3565b6101cf565b6100db6100d63660046104c1565b610324565b6040516100e89190610620565b60405180910390f35b6100a06100ff3660046104c1565b61033f565b6100db6101123660046104c1565b61038b565b61011f610401565b6040516100e89190610541565b6003546001600160a01b0316331461015f5760405162461bcd60e51b81526004016101569061058e565b60405180910390fd5b6001600160a01b038116600090815260016020526040812061018091610464565b50565b6003546001600160a01b031633146101ad5760405162461bcd60e51b81526004016101569061058e565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600054604051633b629ad760e11b81526001600160a01b03909116906376c535ae906101ff90339060040161052d565b60206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f919061050d565b61026b5760405162461bcd60e51b8152600401610156906105b2565b6001600160a01b0382166000908152600160205260409020546102d457600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0384161790555b6001600160a01b0390911660009081526001602081815260408084208151808301909252948152428183019081528554808501875595855291909320925160029094029092019283559051910155565b6001600160a01b031660009081526001602052604090205490565b6003546001600160a01b031633146103695760405162461bcd60e51b81526004016101569061058e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600160205260408120546103c05760405162461bcd60e51b8152600401610156906105e9565b6001600160a01b0382166000908152600160205260409020805460001981019081106103e857fe5b9060005260206000209060020201600001549050919050565b6060600280548060200260200160405190810160405280929190818152602001828054801561045957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161043b575b505050505090505b90565b5080546000825560020290600052602060002090810190610180919061046191905b808211156104a05760008082556001820155600201610486565b5090565b80356001600160a01b03811681146104bb57600080fd5b92915050565b6000602082840312156104d2578081fd5b6104dc83836104a4565b9392505050565b600080604083850312156104f5578081fd5b6104ff84846104a4565b946020939093013593505050565b60006020828403121561051e578081fd5b815180151581146104dc578182fd5b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b818110156105825783516001600160a01b03168352928401929184019160010161055d565b50909695505050505050565b6020808252600a908201526927b7363c9037bbb732b960b11b604082015260600190565b60208082526017908201527f4f6e6c79206578706572742063616e20646f2074686973000000000000000000604082015260600190565b60208082526018908201527f4e6f20616d6f756e7420666f72207468697320746f6b656e0000000000000000604082015260600190565b9081526020019056fea2646970667358221220330155bad58bf6a6071a18f6dd3cba751d7ca418e56c7c04cfd166236b85a88364736f6c63430006060033","runtimeBytecode":"608060405234801561001057600080fd5b50600436106100885760003560e01c8063653e3f271161005b578063653e3f27146100f1578063a9bc9ed914610104578063ab7bc7aa14610117578063f5a1f5b4146100a257610088565b8063118e06331461008d57806313af4035146100a257806352258b9d146100b55780635f1b98f0146100c8575b600080fd5b6100a061009b3660046104c1565b61012c565b005b6100a06100b03660046104c1565b610183565b6100a06100c33660046104e3565b6101cf565b6100db6100d63660046104c1565b610324565b6040516100e89190610620565b60405180910390f35b6100a06100ff3660046104c1565b61033f565b6100db6101123660046104c1565b61038b565b61011f610401565b6040516100e89190610541565b6003546001600160a01b0316331461015f5760405162461bcd60e51b81526004016101569061058e565b60405180910390fd5b6001600160a01b038116600090815260016020526040812061018091610464565b50565b6003546001600160a01b031633146101ad5760405162461bcd60e51b81526004016101569061058e565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b600054604051633b629ad760e11b81526001600160a01b03909116906376c535ae906101ff90339060040161052d565b60206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f919061050d565b61026b5760405162461bcd60e51b8152600401610156906105b2565b6001600160a01b0382166000908152600160205260409020546102d457600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b0384161790555b6001600160a01b0390911660009081526001602081815260408084208151808301909252948152428183019081528554808501875595855291909320925160029094029092019283559051910155565b6001600160a01b031660009081526001602052604090205490565b6003546001600160a01b031633146103695760405162461bcd60e51b81526004016101569061058e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600160205260408120546103c05760405162461bcd60e51b8152600401610156906105e9565b6001600160a01b0382166000908152600160205260409020805460001981019081106103e857fe5b9060005260206000209060020201600001549050919050565b6060600280548060200260200160405190810160405280929190818152602001828054801561045957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161043b575b505050505090505b90565b5080546000825560020290600052602060002090810190610180919061046191905b808211156104a05760008082556001820155600201610486565b5090565b80356001600160a01b03811681146104bb57600080fd5b92915050565b6000602082840312156104d2578081fd5b6104dc83836104a4565b9392505050565b600080604083850312156104f5578081fd5b6104ff84846104a4565b946020939093013593505050565b60006020828403121561051e578081fd5b815180151581146104dc578182fd5b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b818110156105825783516001600160a01b03168352928401929184019160010161055d565b50909695505050505050565b6020808252600a908201526927b7363c9037bbb732b960b11b604082015260600190565b60208082526017908201527f4f6e6c79206578706572742063616e20646f2074686973000000000000000000604082015260600190565b60208082526018908201527f4e6f20616d6f756e7420666f72207468697320746f6b656e0000000000000000604082015260600190565b9081526020019056fea2646970667358221220330155bad58bf6a6071a18f6dd3cba751d7ca418e56c7c04cfd166236b85a88364736f6c63430006060033","linkReferences":{},"swarmHash":"1a18f6dd3cba751d7ca418e56c7c04cfd166236b85a88364736f6c6343000606","gasEstimates":{"creation":{"codeDepositCost":"326200","executionCost":"21197","totalCost":"347397"},"external":{"addamount(address,uint256)":"infinite","delToken(address)":"infinite","getLastamount(address)":"3123","getLenamount(address)":"1342","getallTokens()":"infinite","setExpertsContr(address)":"22016","setNewOwner(address)":"22082","setOwner(address)":"22039"}},"functionHashes":{"addamount(address,uint256)":"52258b9d","delToken(address)":"118e0633","getLastamount(address)":"a9bc9ed9","getLenamount(address)":"5f1b98f0","getallTokens()":"ab7bc7aa","setExpertsContr(address)":"653e3f27","setNewOwner(address)":"f5a1f5b4","setOwner(address)":"13af4035"},"filename":"/home/st/Desktop/SvetAng2/SvetAng/.embark/contracts/OracleTotSupply.sol","originalFilename":"contracts/OracleTotSupply.sol","path":"/home/st/Desktop/SvetAng2/SvetAng/contracts/OracleTotSupply.sol","type":"file","deploymentAccount":"0xcDD7C0fba0Fe0D7DDf49a0B6B627700F4e26b6F8"};
const OracleTotSupply = new EmbarkJS.Blockchain.Contract(OracleTotSupplyConfig);

export default OracleTotSupply;
