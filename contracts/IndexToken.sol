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

    Index[] public activesList ;


    constructor (string memory _name, string memory _symbol, Index[] memory _activesList ) 
        ERC20Detailed(_name,  //name
              _symbol, //symbol
              18 )  //decimals            
            public {
      activesList = _activesList;
    }



    function getActivesList() public view returns (Index[] memory) {
      return activesList;
    }



}