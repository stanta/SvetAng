pragma solidity ^0.6.1;
import "./IndexToken.sol";

contract Swap {
    /**
    *     SvetSwap
    * 1. Client wants to buy an index. 
    * 2. He pays Svets for us.
    * 3. He configure index (or choose preconfs) and it's smart 
    * contract deploys as ERC20 token (and client can trade this)
    * 4. We send DAI to Uniswap markets for choosed pairs,  
    * proportionaly . And get reward as liquidity providers. And 
    * don't response for this funds.
    * 5. If client wants to return investments, he can choose 
    * delivery or settlement. 
    * 5.1 if he choose settlement, we return to him DAI at current 
    * price from Uniswap
    * 5.2 if choosed delivery, we returns dai , exchange to tokens 
    * and send to him tokens.
    * 6. Next stage,  after we get enough liquidity, we'll start 
    * fork of Uniswap.
     */

    function makeIndex (string memory _name, string  memory _symbol)  public  returns (address) {
        return address(new IndexToken (_name, _symbol, msg.sender));
    }

    function addActive (address _addrIndex, address _addrActive,  uint256 _amount) public  {
        IndexToken indexT = IndexToken(_addrIndex);
        indexT.addActive(_addrActive, _amount);

        // here wee need connection to Uniswap
    }

}