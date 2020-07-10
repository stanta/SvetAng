pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./Experts.sol";
import "./ExpertsRewards.sol";

contract OraclePrice {

    Experts experts;

    struct PriceItem {
        uint price;
        uint time;
    }

    mapping (address => PriceItem[]) public prices;
    address[] tokens;

    address owner;
    address exchange;

    modifier onlyOwner () {
        require (msg.sender == owner,"Only owner" );
        _;
    }

    modifier onlyExpert () {
        require (experts.isExpert(msg.sender), "Only expert can do this");
        _;
    }
    
    modifier onlyExchange () {
        require (msg.sender == exchange, "Only exchange" );
        _;
    }

    function setExpertsContr (address _addrExp) public onlyOwner {
        experts = Experts(_addrExp);
    }
    
    function setExchange (address _addrExchange) public onlyOwner {
        exchange = _addrExchange;
    }


    function addPrice   (address _addrToken, uint _price ) public onlyExpert {
        if (prices[_addrToken].length == 0) {
            tokens.push(_addrToken);
        }
        prices[_addrToken].push(PriceItem(_price, now));

    }

    
    function setOwner(address _addrOwner) public onlyOwner {
        owner = _addrOwner;
    }

    function delToken   (address _addrToken) public onlyOwner {
//todo  ?
    }

    function getLenPrice (address _addrToken) public view onlyExchange returns (uint) {
        return prices[_addrToken].length;
    }
    
    function getLastPrice (address _addrToken) public view onlyExchange returns (uint) {
        return prices[_addrToken][prices[_addrToken].length-1].price;
    }

    function getallPrices (address _addrToken) public view onlyExpert returns (PriceItem[] memory) {
        return prices[_addrToken];
    }

    function getallTokens () public view onlyExpert returns (address[] memory ) {
        return tokens;
    }





}
