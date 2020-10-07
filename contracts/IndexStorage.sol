pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

contract IndexStorage {
    address owner;
    address factory; 
    mapping (bytes32 => address) internal Indexes ;
    

    struct IndexName { 
        string name;
        string symbol;
    }

    IndexName[] public indexList; //todo


    constructor () public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require (owner == msg.sender, "Only owner can do this");
        _;
    }
    modifier onlyFactory() {
        require (factory == msg.sender, "Only factory can do this");
        _;
    }

    function setFactory (address _addr) public onlyOwner
        {
        factory = _addr;
        }


    function setOwner (address _newOwner) public onlyOwner {
        owner = _newOwner;
    }


    function setIndex (string memory _name, string memory _symbol, address _index) public onlyFactory {
        Indexes[keccak256(abi.encodePacked(_name, _symbol))] = _index;
        indexList.push(IndexName(_name, _symbol));        
    }

    function getLenIndexes () public view  returns (uint) { //onlyExchange
        return indexList.length;
    }

    function indexes(string memory _name, string memory _symbol) external view returns (address) {
        return Indexes[keccak256(abi.encodePacked(_name, _symbol))];
    }
}