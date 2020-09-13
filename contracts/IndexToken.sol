pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;
import "./openzeppelin-contracts/contracts/token/ERC20/ERC20Detailed.sol";


contract IndexToken is ERC20Detailed {
    /**
    * makes ERC20 compatible index token 
     */
    struct Index { // index components abiencoded
      address addrActive1;
      address addrActive2;
      uint256 amount1;      
      uint256 amount2;      
      
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
      owner = msg.sender;
    }

    function addActive (
                        address _addrActive1, 
                        address _addrActive2, 
                        uint256 _amount1, 
                        uint256 _amount2) public onlyOwner {
        activeList.push(Index(_addrActive1, 
                              _addrActive2,
                              _amount1, 
                              _amount2));

    }

    function getActiveList() public view returns (Index[] memory) {
      return activeList;
    }

      function getActiveListLen() public view returns (uint256) {
      return activeList.length;
    }


}