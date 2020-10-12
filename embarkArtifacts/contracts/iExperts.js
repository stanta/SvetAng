import EmbarkJS from '../embarkjs';

const iExpertsConfig = {"abiDefinition":[{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isExpert","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}],"className":"iExperts","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"","realArgs":[],"code":"","runtimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"isExpert(address)":"76c535ae"},"filename":"/home/st/Desktop/SvetAng2/SvetAng/.embark/contracts/interfaces/iExperts.sol","originalFilename":"contracts/interfaces/iExperts.sol","path":"/home/st/Desktop/SvetAng2/SvetAng/contracts/interfaces/iExperts.sol","type":"file","deploymentAccount":"0xcDD7C0fba0Fe0D7DDf49a0B6B627700F4e26b6F8"};
const iExperts = new EmbarkJS.Blockchain.Contract(iExpertsConfig);

export default iExperts;
