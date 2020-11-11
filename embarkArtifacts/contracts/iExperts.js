import EmbarkJS from '../embarkjs';

const iExpertsConfig = {"abiDefinition":[{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isExpert","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],"className":"iExperts","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"","realArgs":[],"code":"","runtimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"isExpert(address)":"76c535ae"},"filename":"/mnt/512-2/dfd/SvetAng2/SvetAng/.embark/contracts/interfaces/iExperts.sol","originalFilename":"contracts/interfaces/iExperts.sol","path":"/mnt/512-2/dfd/SvetAng2/SvetAng/contracts/interfaces/iExperts.sol","type":"file","deploymentAccount":"0x17ebecC846E3B927A27A0d6B58A8b8C821Be1591"};
const iExperts = new EmbarkJS.Blockchain.Contract(iExpertsConfig);

export default iExperts;
