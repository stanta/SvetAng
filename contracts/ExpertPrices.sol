pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

import "./Experts.sol";


contract ExpertPrices {

   address owner; 

   constructor ()  public {
        owner =  msg.sender;
    }
    /**    
     * TODO 
        1. experts puts prices from their ETH accounts
        2. contract calculates average price (how?)
        3. result sends to OraclePrices.addPrice
     */
}