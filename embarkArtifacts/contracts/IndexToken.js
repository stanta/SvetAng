import EmbarkJS from '../embarkjs';

const IndexTokenConfig = {"abiDefinition":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address[]","name":"_activesAddr","type":"address[]"},{"internalType":"uint256[]","name":"_activAm","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_i","type":"uint256"}],"name":"getActivesItem","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActivesLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActivesList","outputs":[{"components":[{"internalType":"address","name":"addrActive","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct iIndexToken.Index[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_trans","type":"bool"}],"name":"setTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"className":"IndexToken","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106101215760003560e01c80635bb47808116100ad578063a296b32311610071578063a296b32314610246578063a457c2d714610259578063a9059cbb1461026c578063b74254481461027f578063dd62ed3e1461029457610121565b80635bb47808146101fd5780636bf509ad1461021057806370a082311461021857806379cc67901461022b57806395d89b411461023e57610121565b8063313ce567116100f4578063313ce5671461018c57806335ad7eb3146101a157806339509351146101c257806340c10f19146101d557806342966c68146101e857610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016457806323b872dd14610179575b600080fd5b61012e6102a7565b60405161013b9190610d94565b60405180910390f35b610157610152366004610cb6565b61033d565b60405161013b9190610d89565b61016c61035b565b60405161013b9190611038565b610157610187366004610c76565b610361565b6101946103a2565b60405161013b9190611041565b6101b46101af366004610d00565b6103ab565b60405161013b929190610d18565b6101576101d0366004610cb6565b610424565b6101576101e3366004610cb6565b61047d565b6101fb6101f6366004610d00565b610489565b005b6101fb61020b366004610c27565b61049d565b61016c6104f4565b61016c610226366004610c27565b6104fa565b6101fb610239366004610cb6565b610515565b61012e610570565b6101fb610254366004610ce0565b6105d1565b610157610267366004610cb6565b610613565b61015761027a366004610cb6565b610681565b6102876106b7565b60405161013b9190610d31565b61016c6102a2366004610c42565b61072c565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b5050505050905090565b600061035161034a610757565b848461075b565b5060015b92915050565b60025490565b60075460009060ff1661038f5760405162461bcd60e51b815260040161038690610ec9565b60405180910390fd5b61039a84848461080f565b509392505050565b60055460ff1690565b600654600090819083106103d15760405162461bcd60e51b815260040161038690610ea3565b600683815481106103de57fe5b6000918252602090912060029091020154600680546001600160a01b039092169350908490811061040b57fe5b9060005260206000209060020201600101549050915091565b6000610351610431610757565b846104788560016000610442610757565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61089716565b61075b565b600061035183836108c3565b61049a610494610757565b8261098f565b50565b60075461010090046001600160a01b031633146104cc5760405162461bcd60e51b815260040161038690610f86565b600780546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60065490565b6001600160a01b031660009081526020819052604090205490565b600061054d826040518060600160405280602481526020016110d560249139610540866102a2610757565b919063ffffffff610a7116565b90506105618361055b610757565b8361075b565b61056b838361098f565b505050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103335780601f1061030857610100808354040283529160200191610333565b60075461010090046001600160a01b031633146106005760405162461bcd60e51b815260040161038690610f86565b6007805460ff1916911515919091179055565b6000610351610620610757565b84610478856040518060600160405280602581526020016110f9602591396001600061064a610757565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a7116565b60075460009060ff166106a65760405162461bcd60e51b815260040161038690610ec9565b6106b08383610a9d565b5092915050565b60606006805480602002602001604051908101604052809291908181526020016000905b82821015610723576000848152602090819020604080518082019091526002850290910180546001600160a01b031682526001908101548284015290835290920191016106db565b50505050905090565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166107815760405162461bcd60e51b815260040161038690610fbd565b6001600160a01b0382166107a75760405162461bcd60e51b815260040161038690610e2a565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610802908590611038565b60405180910390a3505050565b600061081c848484610aad565b61088d84610828610757565b610478856040518060600160405280602881526020016110ad602891396001600160a01b038a16600090815260016020526040812090610866610757565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610a7116565b5060019392505050565b6000828201838110156108bc5760405162461bcd60e51b815260040161038690610e6c565b9392505050565b6001600160a01b0382166108e95760405162461bcd60e51b815260040161038690611001565b6108f56000838361056b565b600254610908908263ffffffff61089716565b6002556001600160a01b038216600090815260208190526040902054610934908263ffffffff61089716565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610983908590611038565b60405180910390a35050565b6001600160a01b0382166109b55760405162461bcd60e51b815260040161038690610f00565b6109c18260008361056b565b610a0481604051806060016040528060228152602001611065602291396001600160a01b038516600090815260208190526040902054919063ffffffff610a7116565b6001600160a01b038316600090815260208190526040902055600254610a30908263ffffffff610bce16565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610983908590611038565b60008184841115610a955760405162461bcd60e51b81526004016103869190610d94565b505050900390565b6000610351610aaa610757565b84845b6001600160a01b038316610ad35760405162461bcd60e51b815260040161038690610f41565b6001600160a01b038216610af95760405162461bcd60e51b815260040161038690610de7565b610b0483838361056b565b610b4781604051806060016040528060268152602001611087602691396001600160a01b038616600090815260208190526040902054919063ffffffff610a7116565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610b7c908263ffffffff61089716565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610802908590611038565b60006108bc83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a71565b80356001600160a01b038116811461035557600080fd5b600060208284031215610c38578081fd5b6108bc8383610c10565b60008060408385031215610c54578081fd5b610c5e8484610c10565b9150610c6d8460208501610c10565b90509250929050565b600080600060608486031215610c8a578081fd5b8335610c958161104f565b92506020840135610ca58161104f565b929592945050506040919091013590565b60008060408385031215610cc8578182fd5b610cd28484610c10565b946020939093013593505050565b600060208284031215610cf1578081fd5b813580151581146108bc578182fd5b600060208284031215610d11578081fd5b5035919050565b6001600160a01b03929092168252602082015260400190565b602080825282518282018190526000919060409081850190868401855b82811015610d7c57815180516001600160a01b03168552860151868501529284019290850190600101610d4e565b5091979650505050505050565b901515815260200190565b6000602080835283518082850152825b81811015610dc057858101830151858201604001528201610da4565b81811115610dd15783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252600c908201526b4e6f2074686973206974656d60a01b604082015260600190565b6020808252601d908201527f5472616e7366657273206e6f7420676976656e20666f7220746f6b656e000000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526018908201527f4f6e6c7920666163746f72792063616e20646f20746869730000000000000000604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b6001600160a01b038116811461049a57600080fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220ef7dd2df41f9b36534","realArgs":[],"code":"60806040523480156200001157600080fd5b50604051620015e3380380620015e383398101604081905262000034916200031e565b8351849084906200004d90600390602085019062000156565b5080516200006390600490602084019062000156565b50506005805460ff191660121790555060078054600960a91b60ff60a81b1990911617905560005b82518160ff1610156200012f5760066040518060400160405280858460ff1681518110620000b557fe5b60200260200101516001600160a01b03168152602001848460ff1681518110620000db57fe5b602090810291909101810151909152825460018082018555600094855293829020835160029092020180546001600160a01b0319166001600160a01b0390921691909117815591015190820155016200008b565b505060078054610100600160a81b03191633610100021760ff191690555062000480915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019957805160ff1916838001178555620001c9565b82800160010185558215620001c9579182015b82811115620001c9578251825591602001919060010190620001ac565b50620001d7929150620001db565b5090565b620001f891905b80821115620001d75760008155600101620001e2565b90565b80516001600160a01b03811681146200021357600080fd5b92915050565b600082601f8301126200022a578081fd5b8151620002416200023b8262000460565b62000439565b8181529150602080830190848101818402860182018710156200026357600080fd5b60005b84811015620002845781518452928201929082019060010162000266565b505050505092915050565b600082601f830112620002a0578081fd5b81516001600160401b03811115620002b6578182fd5b6020620002cc601f8301601f1916820162000439565b92508183528481838601011115620002e357600080fd5b60005b8281101562000303578481018201518482018301528101620002e6565b82811115620003155760008284860101525b50505092915050565b6000806000806080858703121562000334578384fd5b84516001600160401b03808211156200034b578586fd5b62000359888389016200028f565b955060209150818701518181111562000370578586fd5b6200037e89828a016200028f565b95505060408701518181111562000393578485fd5b80880189601f820112620003a5578586fd5b80519150620003b86200023b8362000460565b82815284810190828601868502840187018d1015620003d5578889fd5b8893505b848410156200040357620003ee8d82620001fb565b835260019390930192918601918601620003d9565b5060608b01519097509450505050808211156200041e578283fd5b506200042d8782880162000219565b91505092959194509250565b6040518181016001600160401b03811182821017156200045857600080fd5b604052919050565b60006001600160401b0382111562000476578081fd5b5060209081020190565b61115380620004906000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635bb47808116100ad578063a296b32311610071578063a296b32314610246578063a457c2d714610259578063a9059cbb1461026c578063b74254481461027f578063dd62ed3e1461029457610121565b80635bb47808146101fd5780636bf509ad1461021057806370a082311461021857806379cc67901461022b57806395d89b411461023e57610121565b8063313ce567116100f4578063313ce5671461018c57806335ad7eb3146101a157806339509351146101c257806340c10f19146101d557806342966c68146101e857610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016457806323b872dd14610179575b600080fd5b61012e6102a7565b60405161013b9190610d94565b60405180910390f35b610157610152366004610cb6565b61033d565b60405161013b9190610d89565b61016c61035b565b60405161013b9190611038565b610157610187366004610c76565b610361565b6101946103a2565b60405161013b9190611041565b6101b46101af366004610d00565b6103ab565b60405161013b929190610d18565b6101576101d0366004610cb6565b610424565b6101576101e3366004610cb6565b61047d565b6101fb6101f6366004610d00565b610489565b005b6101fb61020b366004610c27565b61049d565b61016c6104f4565b61016c610226366004610c27565b6104fa565b6101fb610239366004610cb6565b610515565b61012e610570565b6101fb610254366004610ce0565b6105d1565b610157610267366004610cb6565b610613565b61015761027a366004610cb6565b610681565b6102876106b7565b60405161013b9190610d31565b61016c6102a2366004610c42565b61072c565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b5050505050905090565b600061035161034a610757565b848461075b565b5060015b92915050565b60025490565b60075460009060ff1661038f5760405162461bcd60e51b815260040161038690610ec9565b60405180910390fd5b61039a84848461080f565b509392505050565b60055460ff1690565b600654600090819083106103d15760405162461bcd60e51b815260040161038690610ea3565b600683815481106103de57fe5b6000918252602090912060029091020154600680546001600160a01b039092169350908490811061040b57fe5b9060005260206000209060020201600101549050915091565b6000610351610431610757565b846104788560016000610442610757565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61089716565b61075b565b600061035183836108c3565b61049a610494610757565b8261098f565b50565b60075461010090046001600160a01b031633146104cc5760405162461bcd60e51b815260040161038690610f86565b600780546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60065490565b6001600160a01b031660009081526020819052604090205490565b600061054d826040518060600160405280602481526020016110d560249139610540866102a2610757565b919063ffffffff610a7116565b90506105618361055b610757565b8361075b565b61056b838361098f565b505050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103335780601f1061030857610100808354040283529160200191610333565b60075461010090046001600160a01b031633146106005760405162461bcd60e51b815260040161038690610f86565b6007805460ff1916911515919091179055565b6000610351610620610757565b84610478856040518060600160405280602581526020016110f9602591396001600061064a610757565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a7116565b60075460009060ff166106a65760405162461bcd60e51b815260040161038690610ec9565b6106b08383610a9d565b5092915050565b60606006805480602002602001604051908101604052809291908181526020016000905b82821015610723576000848152602090819020604080518082019091526002850290910180546001600160a01b031682526001908101548284015290835290920191016106db565b50505050905090565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166107815760405162461bcd60e51b815260040161038690610fbd565b6001600160a01b0382166107a75760405162461bcd60e51b815260040161038690610e2a565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610802908590611038565b60405180910390a3505050565b600061081c848484610aad565b61088d84610828610757565b610478856040518060600160405280602881526020016110ad602891396001600160a01b038a16600090815260016020526040812090610866610757565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610a7116565b5060019392505050565b6000828201838110156108bc5760405162461bcd60e51b815260040161038690610e6c565b9392505050565b6001600160a01b0382166108e95760405162461bcd60e51b815260040161038690611001565b6108f56000838361056b565b600254610908908263ffffffff61089716565b6002556001600160a01b038216600090815260208190526040902054610934908263ffffffff61089716565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610983908590611038565b60405180910390a35050565b6001600160a01b0382166109b55760405162461bcd60e51b815260040161038690610f00565b6109c18260008361056b565b610a0481604051806060016040528060228152602001611065602291396001600160a01b038516600090815260208190526040902054919063ffffffff610a7116565b6001600160a01b038316600090815260208190526040902055600254610a30908263ffffffff610bce16565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610983908590611038565b60008184841115610a955760405162461bcd60e51b81526004016103869190610d94565b505050900390565b6000610351610aaa610757565b84845b6001600160a01b038316610ad35760405162461bcd60e51b815260040161038690610f41565b6001600160a01b038216610af95760405162461bcd60e51b815260040161038690610de7565b610b0483838361056b565b610b4781604051806060016040528060268152602001611087602691396001600160a01b038616600090815260208190526040902054919063ffffffff610a7116565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610b7c908263ffffffff61089716565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610802908590611038565b60006108bc83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a71565b80356001600160a01b038116811461035557600080fd5b600060208284031215610c38578081fd5b6108bc8383610c10565b60008060408385031215610c54578081fd5b610c5e8484610c10565b9150610c6d8460208501610c10565b90509250929050565b600080600060608486031215610c8a578081fd5b8335610c958161104f565b92506020840135610ca58161104f565b929592945050506040919091013590565b60008060408385031215610cc8578182fd5b610cd28484610c10565b946020939093013593505050565b600060208284031215610cf1578081fd5b813580151581146108bc578182fd5b600060208284031215610d11578081fd5b5035919050565b6001600160a01b03929092168252602082015260400190565b602080825282518282018190526000919060409081850190868401855b82811015610d7c57815180516001600160a01b03168552860151868501529284019290850190600101610d4e565b5091979650505050505050565b901515815260200190565b6000602080835283518082850152825b81811015610dc057858101830151858201604001528201610da4565b81811115610dd15783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252600c908201526b4e6f2074686973206974656d60a01b604082015260600190565b6020808252601d908201527f5472616e7366657273206e6f7420676976656e20666f7220746f6b656e000000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526018908201527f4f6e6c7920666163746f72792063616e20646f20746869730000000000000000604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b6001600160a01b038116811461049a57600080fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220ef7dd2df41f9b36534928658330ad1df82d2428ba6083fc1466ef1d460b1eb3364736f6c63430006060033","runtimeBytecode":"608060405234801561001057600080fd5b50600436106101215760003560e01c80635bb47808116100ad578063a296b32311610071578063a296b32314610246578063a457c2d714610259578063a9059cbb1461026c578063b74254481461027f578063dd62ed3e1461029457610121565b80635bb47808146101fd5780636bf509ad1461021057806370a082311461021857806379cc67901461022b57806395d89b411461023e57610121565b8063313ce567116100f4578063313ce5671461018c57806335ad7eb3146101a157806339509351146101c257806340c10f19146101d557806342966c68146101e857610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016457806323b872dd14610179575b600080fd5b61012e6102a7565b60405161013b9190610d94565b60405180910390f35b610157610152366004610cb6565b61033d565b60405161013b9190610d89565b61016c61035b565b60405161013b9190611038565b610157610187366004610c76565b610361565b6101946103a2565b60405161013b9190611041565b6101b46101af366004610d00565b6103ab565b60405161013b929190610d18565b6101576101d0366004610cb6565b610424565b6101576101e3366004610cb6565b61047d565b6101fb6101f6366004610d00565b610489565b005b6101fb61020b366004610c27565b61049d565b61016c6104f4565b61016c610226366004610c27565b6104fa565b6101fb610239366004610cb6565b610515565b61012e610570565b6101fb610254366004610ce0565b6105d1565b610157610267366004610cb6565b610613565b61015761027a366004610cb6565b610681565b6102876106b7565b60405161013b9190610d31565b61016c6102a2366004610c42565b61072c565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b5050505050905090565b600061035161034a610757565b848461075b565b5060015b92915050565b60025490565b60075460009060ff1661038f5760405162461bcd60e51b815260040161038690610ec9565b60405180910390fd5b61039a84848461080f565b509392505050565b60055460ff1690565b600654600090819083106103d15760405162461bcd60e51b815260040161038690610ea3565b600683815481106103de57fe5b6000918252602090912060029091020154600680546001600160a01b039092169350908490811061040b57fe5b9060005260206000209060020201600101549050915091565b6000610351610431610757565b846104788560016000610442610757565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff61089716565b61075b565b600061035183836108c3565b61049a610494610757565b8261098f565b50565b60075461010090046001600160a01b031633146104cc5760405162461bcd60e51b815260040161038690610f86565b600780546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60065490565b6001600160a01b031660009081526020819052604090205490565b600061054d826040518060600160405280602481526020016110d560249139610540866102a2610757565b919063ffffffff610a7116565b90506105618361055b610757565b8361075b565b61056b838361098f565b505050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103335780601f1061030857610100808354040283529160200191610333565b60075461010090046001600160a01b031633146106005760405162461bcd60e51b815260040161038690610f86565b6007805460ff1916911515919091179055565b6000610351610620610757565b84610478856040518060600160405280602581526020016110f9602591396001600061064a610757565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610a7116565b60075460009060ff166106a65760405162461bcd60e51b815260040161038690610ec9565b6106b08383610a9d565b5092915050565b60606006805480602002602001604051908101604052809291908181526020016000905b82821015610723576000848152602090819020604080518082019091526002850290910180546001600160a01b031682526001908101548284015290835290920191016106db565b50505050905090565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166107815760405162461bcd60e51b815260040161038690610fbd565b6001600160a01b0382166107a75760405162461bcd60e51b815260040161038690610e2a565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610802908590611038565b60405180910390a3505050565b600061081c848484610aad565b61088d84610828610757565b610478856040518060600160405280602881526020016110ad602891396001600160a01b038a16600090815260016020526040812090610866610757565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610a7116565b5060019392505050565b6000828201838110156108bc5760405162461bcd60e51b815260040161038690610e6c565b9392505050565b6001600160a01b0382166108e95760405162461bcd60e51b815260040161038690611001565b6108f56000838361056b565b600254610908908263ffffffff61089716565b6002556001600160a01b038216600090815260208190526040902054610934908263ffffffff61089716565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610983908590611038565b60405180910390a35050565b6001600160a01b0382166109b55760405162461bcd60e51b815260040161038690610f00565b6109c18260008361056b565b610a0481604051806060016040528060228152602001611065602291396001600160a01b038516600090815260208190526040902054919063ffffffff610a7116565b6001600160a01b038316600090815260208190526040902055600254610a30908263ffffffff610bce16565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610983908590611038565b60008184841115610a955760405162461bcd60e51b81526004016103869190610d94565b505050900390565b6000610351610aaa610757565b84845b6001600160a01b038316610ad35760405162461bcd60e51b815260040161038690610f41565b6001600160a01b038216610af95760405162461bcd60e51b815260040161038690610de7565b610b0483838361056b565b610b4781604051806060016040528060268152602001611087602691396001600160a01b038616600090815260208190526040902054919063ffffffff610a7116565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610b7c908263ffffffff61089716565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610802908590611038565b60006108bc83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610a71565b80356001600160a01b038116811461035557600080fd5b600060208284031215610c38578081fd5b6108bc8383610c10565b60008060408385031215610c54578081fd5b610c5e8484610c10565b9150610c6d8460208501610c10565b90509250929050565b600080600060608486031215610c8a578081fd5b8335610c958161104f565b92506020840135610ca58161104f565b929592945050506040919091013590565b60008060408385031215610cc8578182fd5b610cd28484610c10565b946020939093013593505050565b600060208284031215610cf1578081fd5b813580151581146108bc578182fd5b600060208284031215610d11578081fd5b5035919050565b6001600160a01b03929092168252602082015260400190565b602080825282518282018190526000919060409081850190868401855b82811015610d7c57815180516001600160a01b03168552860151868501529284019290850190600101610d4e565b5091979650505050505050565b901515815260200190565b6000602080835283518082850152825b81811015610dc057858101830151858201604001528201610da4565b81811115610dd15783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252600c908201526b4e6f2074686973206974656d60a01b604082015260600190565b6020808252601d908201527f5472616e7366657273206e6f7420676976656e20666f7220746f6b656e000000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526018908201527f4f6e6c7920666163746f72792063616e20646f20746869730000000000000000604082015260600190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b6001600160a01b038116811461049a57600080fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220ef7dd2df41f9b36534928658330ad1df82d2428ba6083fc1466ef1d460b1eb3364736f6c63430006060033","linkReferences":{},"swarmHash":"928658330ad1df82d2428ba6083fc1466ef1d460b1eb3364736f6c6343000606","gasEstimates":{"creation":{"codeDepositCost":"887000","executionCost":"infinite","totalCost":"infinite"},"external":{"allowance(address,address)":"infinite","approve(address,uint256)":"infinite","balanceOf(address)":"1345","burn(uint256)":"infinite","burnFrom(address,uint256)":"infinite","decimals()":"1069","decreaseAllowance(address,uint256)":"infinite","getActivesItem(uint256)":"4672","getActivesLen()":"1073","getActivesList()":"infinite","increaseAllowance(address,uint256)":"infinite","mint(address,uint256)":"infinite","name()":"infinite","setFactory(address)":"22064","setTransfer(bool)":"21967","symbol()":"infinite","totalSupply()":"1096","transfer(address,uint256)":"infinite","transferFrom(address,address,uint256)":"infinite"}},"functionHashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","burn(uint256)":"42966c68","burnFrom(address,uint256)":"79cc6790","decimals()":"313ce567","decreaseAllowance(address,uint256)":"a457c2d7","getActivesItem(uint256)":"35ad7eb3","getActivesLen()":"6bf509ad","getActivesList()":"b7425448","increaseAllowance(address,uint256)":"39509351","mint(address,uint256)":"40c10f19","name()":"06fdde03","setFactory(address)":"5bb47808","setTransfer(bool)":"a296b323","symbol()":"95d89b41","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"filename":"/home/st/Desktop/SvetAng2/SvetAng/.embark/contracts/IndexToken.sol","originalFilename":"contracts/IndexToken.sol","path":"/home/st/Desktop/SvetAng2/SvetAng/contracts/IndexToken.sol","type":"file","deploymentAccount":"0xcDD7C0fba0Fe0D7DDf49a0B6B627700F4e26b6F8"};
const IndexToken = new EmbarkJS.Blockchain.Contract(IndexTokenConfig);

export default IndexToken;