pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

interface iIndexStorage {
   
    //mapping (bytes32 => address) public indexes ;
    function indexes (bytes32 _code ) external view returns (address);

    function setIndex (string calldata _name, string calldata _symbol, address _index) external ;

    function getLenIndexes () external view  returns (uint);

}