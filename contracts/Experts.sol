pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract Experts {
    address owner;
    mapping (address => bool) public isExpert;

    function setExperts (address _addrExp) public onlyOwner {
        experts = Experts(_addrExp);
    }


    modifier onlyExpert () [
        require (msg.sender, "Only expert can do this");
        _;
    ]

    modifier onlyOwner () {
        require (msg.sender == owner,"Only owner" );
        _;
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
