pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "./Experts";
import "./ExpertsRewards";

contract OraclePrice {

    Experts experts;

    struct PriceItem {
        uint price;
        uint time;
    }

    mapping (address => PriceItem[]) public prices;
    address[] tokens

    address owner;
    address exchange;

    modifier onlyExpert () [
        require (experts.isExpert(msg.sender), "Only expert can do this");
        _;
    ]

    function setExpertsContr (address _addrExp) public onlyOwner {
        experts = Experts(_addrExp);
    }
    
    function setExchange (address _addrExchange) public onlyOwner


    function addPrice   (address _addrToken, uint _price ) public onlyExpert {
        if (prices[_addrToken].lenght == 0) {
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

    function getLenPrice (address _addrToken) public onlyExchange returns (uint) [
        return prices[_addrToken].lenght;
    ]

    function getallPrices (address _addrToken) public onlyExpert returns (uint[] prices[_addrToken])

    function getallTokens () public onlyExpert returns (address[] tokens)





}
