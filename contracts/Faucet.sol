pragma solidity ^0.6.1;
import "./testtokens/USDTtst.sol";
import "./testtokens/wETHtst.sol";
import "./testtokens/ALFtst.sol";
import "./testtokens/TOKtst.sol";
import "./testtokens/QUBtst.sol";

contract Faucet {

USDTtst tokUSDTtst;
wETHtst tokwETHtst;
ALFtst tokALFtst;
TOKtst tokTOKtst;
QUBtst tokQUBtst;

mapping (address => uint256) listTakers;

    constructor () public {
       
        tokUSDTtst = new USDTtst();
        tokwETHtst = new wETHtst();
        tokALFtst = new ALFtst();
        tokTOKtst = new TOKtst();
        tokQUBtst = new QUBtst();

    }

    function sendTokens () public  {
        require (listTakers[msg.sender] == 0 || listTakers[msg.sender] + 600 < now,
         "You can request just once per 10 min");
            tokwETHtst.transfer(msg.sender, 10*10 ** uint(tokwETHtst.decimals()));
            tokUSDTtst.transfer(msg.sender, 10*10 ** uint(tokUSDTtst.decimals()));
            tokALFtst.transfer(msg.sender, 10*10 ** uint(tokUSDTtst.decimals()));
            tokTOKtst.transfer(msg.sender, 10*10 ** uint(tokUSDTtst.decimals()));
            tokQUBtst.transfer(msg.sender, 10*10 ** uint(tokUSDTtst.decimals()));


            listTakers[msg.sender] = now; 
        
    }
        
    function getAddresses () public view  returns  (address[5] memory){
        address[5] memory tokens;
        tokens[0] = address (tokUSDTtst);
        tokens[1] = address (tokwETHtst);
        tokens[2] = address (tokALFtst);
        tokens[3] = address (tokTOKtst);
        tokens[4] = address (tokQUBtst);
        return tokens;
    }

}