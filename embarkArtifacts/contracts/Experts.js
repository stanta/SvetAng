import EmbarkJS from '../embarkjs';

const ExpertsConfig = {"abiDefinition":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor","name":"constructor","signature":"constructor"},{"inputs":[{"internalType":"address","name":"_addrExp","type":"address"}],"name":"addExpert","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x4fcaee77"},{"inputs":[{"internalType":"address","name":"_addrExp","type":"address"}],"name":"delExpert","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x36222655"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExpert","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"signature":"0x76c535ae"},{"inputs":[{"internalType":"address","name":"_addrOwner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0x13af4035"}],"deployedAddress":"0x499D46dF7e330869eC030FfAeCeeaba954dbE5e2","className":"Experts","args":[],"gas":236141,"gasPrice":"20000000000","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af40351461005157806336222655146100795780634fcaee771461009f57806376c535ae146100c5575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100ff565b005b6100776004803603602081101561008f57600080fd5b50356001600160a01b031661016d565b610077600480360360208110156100b557600080fd5b50356001600160a01b03166101da565b6100eb600480360360208110156100db57600080fd5b50356001600160a01b031661024d565b604080519115158252519081900360200190f35b6000546001600160a01b0316331461014b576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101b9576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b03163314610226576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b60016020526000908152604090205460ff168156fea2646970667358221220eb31283a0a58a51268","realArgs":[],"fromIndex":0,"code":"608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610298806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af40351461005157806336222655146100795780634fcaee771461009f57806376c535ae146100c5575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100ff565b005b6100776004803603602081101561008f57600080fd5b50356001600160a01b031661016d565b610077600480360360208110156100b557600080fd5b50356001600160a01b03166101da565b6100eb600480360360208110156100db57600080fd5b50356001600160a01b031661024d565b604080519115158252519081900360200190f35b6000546001600160a01b0316331461014b576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101b9576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b03163314610226576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b60016020526000908152604090205460ff168156fea2646970667358221220eb31283a0a58a51268ba46145ed7ea7a11d402725978da65989ef7dcda69ed2664736f6c63430006010033","runtimeBytecode":"608060405234801561001057600080fd5b506004361061004c5760003560e01c806313af40351461005157806336222655146100795780634fcaee771461009f57806376c535ae146100c5575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100ff565b005b6100776004803603602081101561008f57600080fd5b50356001600160a01b031661016d565b610077600480360360208110156100b557600080fd5b50356001600160a01b03166101da565b6100eb600480360360208110156100db57600080fd5b50356001600160a01b031661024d565b604080519115158252519081900360200190f35b6000546001600160a01b0316331461014b576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146101b9576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b6001600160a01b03166000908152600160205260409020805460ff19169055565b6000546001600160a01b03163314610226576040805162461bcd60e51b815260206004820152600a60248201526927b7363c9037bbb732b960b11b604482015290519081900360640190fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b60016020526000908152604090205460ff168156fea2646970667358221220eb31283a0a58a51268ba46145ed7ea7a11d402725978da65989ef7dcda69ed2664736f6c63430006010033","linkReferences":{},"swarmHash":"ba46145ed7ea7a11d402725978da65989ef7dcda69ed2664736f6c6343000601","gasEstimates":{"creation":{"codeDepositCost":"132800","executionCost":"21012","totalCost":"153812"},"external":{"addExpert(address)":"21986","delExpert(address)":"21946","isExpert(address)":"1180","setOwner(address)":"21891"}},"functionHashes":{"addExpert(address)":"4fcaee77","delExpert(address)":"36222655","isExpert(address)":"76c535ae","setOwner(address)":"13af4035"},"filename":"/home/st/Desktop/SvetAng2/SvetAng/.embark/contracts/Experts.sol","originalFilename":"contracts/Experts.sol","path":"/home/st/Desktop/SvetAng2/SvetAng/contracts/Experts.sol","type":"file","deploymentAccount":"0xb3CF7c396fEf271b764938512bEc0B375873f6C6","transactionHash":"0x71e5bccf67cf56446ba9a4ebc2b60bab1e20b556bf41fa8c77ff5a717491e469"};
const Experts = new EmbarkJS.Blockchain.Contract(ExpertsConfig);

export default Experts;
