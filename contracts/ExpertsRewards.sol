pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract ExpertsRewards {
    import "./Experts.sol";

    Experts experts;

    address owner;

    mapping (address=> uint) expertsRewards;

    modifier onlyExpert () [
        require (experts.isExpert(msg.sender), "Only expert can do this");
        _;
    ]

    modifier onlyOwner () {
        require (msg.sender == owner,"Only owner" );
        _;
    }

    function setOwner(address _addrOwner) public onlyOwner {
        owner = _addrOwner;
    }

    function setExpertsContr (address _addrExp) public onlyOwner {
        experts = Experts(_addrExp);
    }


    function rewardExpert (address _addrExpert, uint _amount) public {
        expertsRewards[_addrExpert] += _amount;
    }

    function withdraw (address _addrExpert, uint _amount) public onlyExpert {
        //todo
    }   



}
