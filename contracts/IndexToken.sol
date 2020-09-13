pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;
import "./openzeppelin-contracts/contracts/token/ERC20/ERC20Detailed.sol";


contract IndexToken is ERC20Detailed {
    /**
    * makes ERC20 compatible index token 
     */
    struct Index { // index components abiencoded
      address addrActive;
      uint256 amount;      
    }

    Index[] public activeList ;

    address owner;

    modifier onlyOwner () {
      require(msg.sender == owner, "Only owner can do this");
      _;
    }


    constructor (string memory _name, string memory _symbol, address _emitter ) 
        ERC20Detailed(_name,  //name
              _symbol, //symbol
              18 )  //decimals            
            public {
      _mint(_emitter, 1 ether );
    }

    function addActive (address _addrActive,  uint256 _amount) public onlyOwner {
        activeList.push(Index(_addrActive, _amount));

    }

    function getActiveList() public view returns (Index[] memory) {
      return activeList;
    }

      function getActiveListLen() public view returns (uint256) {
      return activeList.length;
    }


}