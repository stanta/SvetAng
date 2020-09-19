pragma solidity ^0.6.1;
 

contract Experts {
    address owner;

    constructor ()  public {
        owner =  msg.sender;
    }

    mapping (address => bool) public isExpert;


    modifier onlyOwner () {
        require (msg.sender == owner,"Only owner" );
        _;
    }
    
    function setNewOwner (address _newOwner) public onlyOwner {
        owner = _newOwner;
    }


    function addExpert  (address _addrExp) public onlyOwner {
        isExpert [_addrExp] = true;
    }
    function delExpert  (address _addrExp) public onlyOwner {
        isExpert [_addrExp] = false;
    }


    function setOwner(address _addrOwner) public onlyOwner {
        owner = _addrOwner;
    }



}
