pragma solidity ^0.6.1;
import "./IndexToken.sol";
import '@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol';

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";


contract IndexFactory {
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

    address owner;

    IUniswapV2Factory uniswapV2Factory;
    IUniswapV2Router02 uniswapV2Router02;
    uint16 miningDelay;
    uint8 discount;

    modifier onlyOwner () {
      require(msg.sender == owner, "Only owner can do this");
      _;
    }

    function setIUniswapV2 (address _addrFact, address _addrRout, uint8 _discount, uint16 _miningDelay) public onlyOwner {

        require(_discount  > 0 && _addrFact != address (0x0) && _addrRout != address (0x0), "in setIUniswapV2 all must !=0");
        uniswapV2Factory = IUniswapV2Factory (_addrFact);
        uniswapV2Router02 = IUniswapV2Router02 (_addrRout);
        miningDelay = _miningDelay;
        discount = _discount;
    }

    function makeIndex (string memory _name, 
                        string  memory _symbol)  
                        public  returns (address) {
        return address(new IndexToken (_name, _symbol, msg.sender));
    }

    function addActive (address _addrIndex, 
                        address _addrActive1, 
                        address _addrActive2, 
                        uint256 _amount1, 
                        uint256 _amount2) public returns (uint256 amountRes1, uint256 amountRes2, uint256 liquidity) { 
        IndexToken indexT = IndexToken(_addrIndex);
        indexT.addActive(_addrActive1, 
                        _addrActive2,
                        _amount1, 
                        _amount2);

        // here wee need connection to Uniswap
        address pair = uniswapV2Factory.getPair(_addrActive1, _addrActive2);
        if (pair == address(0x0)) {
            //create pair 
            pair = uniswapV2Factory.createPair(_addrActive1, _addrActive2);
            //todo setFeeTo ??
        }

        //send liquidity  
        ( amountRes1, amountRes2, liquidity) = uniswapV2Router02.addLiquidity(
                     _addrActive1,
                     _addrActive2,
                     _amount1, //uint amountADesired,
                     _amount2, //uint amountBDesired,
                     _amount1 * uint256(discount) /100,
                     _amount2 * uint256(discount) /100,
                     address (this),
                     block.timestamp + miningDelay
                    ) ;

    }

}