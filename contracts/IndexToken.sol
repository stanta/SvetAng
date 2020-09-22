pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;
import "./interfaces/iIndextoken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract IndexToken is iIndexToken, ERC20 {
  
    /**
    * makes ERC20 compatible index token 
     */


    Index[] internal activesList ;


    uint8 private _decimals;

    /**
     * @dev Sets the values for `name`, `symbol`, and `decimals`. All three of
     * these values are immutable: they can only be set once during
     * construction.
     */
 


    constructor (string memory _name, string memory _symbol, Index[] memory _activesList ) ERC20(_name, _symbol)
        //decimals            
            public {

        _decimals = 18;
        activesList = _activesList;
    }


    function getActivesList() external override view returns (Index[] memory) {
      return activesList;
    }

    function getActivesLen() external override view returns (uint) {
      return activesList.length;
    }
    function getActivesItem(uint _i) external override view returns (address addr,uint amount) {
      require(_i < activesList.length, "No this item");
      addr = activesList[_i].addrActive;
      amount = activesList[_i].amount;
      
    }
        /**
     * @dev See {ERC20-_mint}.
     *
     * Requirements:
     *
     * - the caller must have the {MinterRole}.
     */
    function mint(address account, uint256 amount) external override returns (bool) {
        _mint(account, amount);
        return true;
    }
    /**
     * @dev Destroys `amount` tokens from the caller.
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) external override {
        _burn(_msgSender(), amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, deducting from the caller's
     * allowance.
     *
     * See {ERC20-_burn} and {ERC20-allowance}.
     *
     * Requirements:
     *
     * - the caller must have allowance for ``accounts``'s tokens of at least
     * `amount`.
     */
    function burnFrom(address account, uint256 amount) external override {
        uint256 decreasedAllowance = allowance(account, _msgSender()).sub(amount, "ERC20: burn amount exceeds allowance");

        _approve(account, _msgSender(), decreasedAllowance);
        _burn(account, amount);
    }

}