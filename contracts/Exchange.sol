pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;
//import ".embark/contracts/token/ERC20/ERC20Detailed.sol"
import "./openzeppelin-contracts/contracts/token/ERC20/ERC20Capped";
import "./OraclePrice";

contract Exchange {
    ERC20Capped BA;
    OraclePrice oraclePrice;
    address owner;
    function stake  (address _addrToken, uint _amountBA1) public returns (uint _angAmount)
        {
        // 1. calculate exchage rate
        uint256 transferAmount = _amountBA1 * oraclePrice.getLastPrice(_addrToken);
        // 2. transfer from staker to contract
        ERC20Capped BA1sell = ERC20Capped (_addrToken);
        BA1sell.transferFrom(msg.sender, address(this), _amount); 
        // 3. transfer to staker
        BA.transfer(msg.sender, transferAmount );

        }

    function withdraw (address _addrToken, uint _amount ) public returns (uint _tokenAmount)
        {
        uint256 transferAmount = _amountBA1 * oraclePrice.getLastPrice(_addrToken);
        BA.transferFrom(msg.sender, address(this), transferAmount); 
        ERC20Capped BA1sell = ERC20Capped (_addrToken);
        BA.transfer(msg.sender, _amount );
        }

    
    function setPriceOracle(address _addr) public onlyOwner
        {
        oraclePrice = OraclePrice(_addr);
        }

    function setBA(address _addr) public onlyOwner
        {
        BA = ERC20Capped(_addr);
        }

    function setOwner(address _addr) public onlyOwner
        {
        owner = _addrOwner;

        }
}
