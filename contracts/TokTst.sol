pragma solidity ^0.6.1;
import "./openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import "./openzeppelin-contracts/contracts/token/ERC20/ERC20Detailed.sol";

contract TokTst is ERC20, ERC20Detailed {

  constructor (string memory _name, string memory _symbol, uint8 _decimals ) 
        ERC20Detailed(_name,  //name
              _symbol, //symbol
              _decimals )  //decimals            
        ERC20()
              public {
      _mint(msg.sender, 21000000 * 10**uint(decimals()));
    }

}