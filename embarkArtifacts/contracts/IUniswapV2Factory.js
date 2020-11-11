import EmbarkJS from '../embarkjs';

const IUniswapV2FactoryConfig = {"abiDefinition":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"setFeeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"setFeeToSetter","outputs":[],"stateMutability":"nonpayable","type":"function"}],"className":"IUniswapV2Factory","args":[],"gas":"auto","silent":false,"track":true,"deploy":false,"realRuntimeBytecode":"","realArgs":[],"code":"","runtimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"allPairs(uint256)":"1e3dd18b","allPairsLength()":"574f2ba3","createPair(address,address)":"c9c65396","feeTo()":"017e7e58","feeToSetter()":"094b7415","getPair(address,address)":"e6a43905","setFeeTo(address)":"f46901ed","setFeeToSetter(address)":"a2e74af6"},"filename":"/mnt/512-2/dfd/SvetAng2/SvetAng/.embark/node_modules/@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol","originalFilename":"contracts//mnt/512-2/dfd/SvetAng2/SvetAng/.embark/node_modules/@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol","path":"/mnt/512-2/dfd/SvetAng2/SvetAng/contracts/.embark/node_modules/@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol","type":"file","deploymentAccount":"0x17ebecC846E3B927A27A0d6B58A8b8C821Be1591"};
const IUniswapV2Factory = new EmbarkJS.Blockchain.Contract(IUniswapV2FactoryConfig);

export default IUniswapV2Factory;
