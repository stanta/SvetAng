pragma solidity ^0.6.1;

abstract contract iOracleamount {
    function addamount   (address _addrToken, uint _amount ) external virtual;

    function delToken   (address _addrToken) external virtual;
  
    function getLenamount (address _addrToken) external virtual view  returns (uint) ;
    
    function getLastamount (address _addrToken) external virtual view  returns (uint) ;

    function getallTokens () external virtual view  returns (address[] memory ) ;

}