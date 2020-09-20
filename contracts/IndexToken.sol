pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;
import "./interfaces/iIndextoken.sol";
import "./openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract IndexToken is IIndexToken, ERC20 {
    /**
    * makes ERC20 compatible index token 
     */
    struct Index { 
      address addrActive; // addr of active's token
      uint256 amount; // in wei            
    }

    Index[] private activesList ;

    string private _name;
    string private _symbol;
    uint8 private _decimals;

    /**
     * @dev Sets the values for `name`, `symbol`, and `decimals`. All three of
     * these values are immutable: they can only be set once during
     * construction.
     */
 

    /**
     * @dev Returns the name of the token.
     */
    function name() external override view returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() external override view returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5,05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei.
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() external override view returns (uint8) {
        return _decimals;
    }


    constructor (string memory __name, string memory __symbol, Index[] memory _activesList ) 
        //decimals            
            public {
        _name = __name;
        _symbol = __symbol;
        _decimals = 18;
        activesList = _activesList;
    }


    function getActivesList() external override view returns (Index[] memory) {
      return activesList;
    }



}