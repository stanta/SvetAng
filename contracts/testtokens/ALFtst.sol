pragma solidity ^0.6.1;
import "../openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import "../openzeppelin-contracts/contracts/token/ERC20/ERC20Detailed.sol";

contract ALFtst is ERC20, ERC20Detailed {

  constructor () 
        ERC20Detailed("ALFtest",  //name
              "ALF", //symbol
              18 )  //decimals            
        ERC20()
              public {
      _mint(msg.sender, 1000000 * 10**uint(decimals()));
    }

}