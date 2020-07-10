pragma solidity ^0.6.1;
 
//import ".embark/contracts/token/ERC20/ERC20Detailed.sol"
import "./openzeppelin-contracts/contracts/token/ERC20/ERC20Capped.sol";
import "./OraclePrice.sol";

contract Exchange {
    ERC20Capped BA;
    OraclePrice oraclePrice;
    address owner;
    
    modifier onlyOwner () {
        require (msg.sender == owner,"Only owner" );
        _;
    }
    


    function stake  (address _addrToken, uint _stakeAmount) public 
        {
        // 1. calculate exchage rate
        uint256 transferAmount = _stakeAmount * oraclePrice.getLastPrice(_addrToken);
        // 2. transfer from staker to contract
        ERC20Capped BA1sell = ERC20Capped (_addrToken);
        BA1sell.transferFrom(msg.sender, address(this), _stakeAmount); 
        // 3. transfer to staker
        BA.transfer(msg.sender, transferAmount );

        }

    function withdraw (address _addrToken, uint _wisdrAmount ) public 
        {
        uint256 transferAmount = _wisdrAmount * oraclePrice.getLastPrice(_addrToken);
        BA.transferFrom(msg.sender, address(this), transferAmount); 
        ERC20Capped BA1sell = ERC20Capped (_addrToken);
        BA1sell.transfer(msg.sender, _wisdrAmount );
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
        owner = _addr;

        }
}
