pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;
import "../openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

interface IIndexToken is IERC20 {

    struct Index { 
      address addrActive1;
      address addrActive2;
      uint256 amount1;      
      uint256 amount2;      
      
    }
    function name() external view returns (string memory) ;
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8); 
    function getActivesList() external view returns (Index[] memory) ;

}