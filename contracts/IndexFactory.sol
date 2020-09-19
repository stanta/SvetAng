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
    uint16 miningDelay = 600; //secs
    uint8 discount = 98; //% 
    mapping (address => mapping (address =>  uint)) liquidity; 

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

    function fill (address _addrIndex, 
                        address _addrActive1, //DAI
                        address _addrActive2,  // token
                        uint256 _amount1, 
                        uint256 _amount2) public returns (uint256 amountRes1, uint256 amountRes2) { 

        // here wee need connection to Uniswap

        
        ERC20 a1 = ERC20 (_addrActive1);
        require(a1.transferFrom(msg.sender, address(this), _amount1), 'transferFrom failed.');

        
        require(a1.approve(address(uniswapV2Router02), _amount1), 'approve Active1 failed.');

        // amountOutMin must be retrieved from an oracle of some kind
        address[] memory path = new address[](2);
        path[0] = _addrActive1;
        path[1] = _addrActive2;
        uniswapV2Router02.swapExactTokensForETH(_amount1,_amount2 * uint256(discount) /100, path, msg.sender, block.timestamp);
        
        //send liquidity  
        uint liqCurr;
        ( amountRes1, amountRes2, liqCurr) = uniswapV2Router02.addLiquidity(
                     _addrActive1,
                     _addrActive2,
                    0,// _amount1, //uint amountADesired,
                     _amount2, //uint amountBDesired,
                    0,// _amount1 * uint256(discount) /100,
                     _amount2 * uint256(discount) /100,
                     address (this),
                     block.timestamp + miningDelay
                    ) ;
        liquidity [_addrIndex][_addrActive2] += liqCurr;

    }

    function withdraw (address _addrIndex,
                        address _addrActive1, //dai
                        address _addrActive2,  //token
                        uint256 _amount1 
                        ) internal returns (uint256 amountRes1, uint256 amountRes2) { 

        // here wee need connection to Uniswap        
        //return liquidity  
        require(liquidity [ _addrIndex][_addrActive2] > 0 , "no liquiduty on this index");
        uint liqCurr =  liquidity [ _addrIndex][_addrActive2];
        liquidity [ _addrIndex][_addrActive2] = 0;
        
        ( amountRes1, amountRes2) = uniswapV2Router02.removeLiquidity(
                     _addrActive1,
                     _addrActive2,
                     liqCurr,
                     _amount1, //gets DAI directly
                      0, 
                     address (msg.sender),
                     block.timestamp + miningDelay
                    ) ;
        

    }

}