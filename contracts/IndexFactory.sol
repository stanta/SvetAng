pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

import "./IndexToken.sol";
import "./interfaces/iOraclePrice.sol";
import "./interfaces/iOracleCircAmount.sol";
import "./interfaces/iOracleTotSupply.sol";
import "./interfaces/iIndexStorage.sol"; //todo intertface

contract IndexFactory  {

    // is needed to list of products? 

    address owner;
    iOraclePrice oraclePrice;
    iOracleCircAmount oracleCircAmount;
    iOracleTotSupply oracleTotSupply;
    iIndexStorage indexStorage;

    function setOwner (address _newOwner) public onlyOwner {
        owner = _newOwner;
    }

    constructor () public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require (owner == msg.sender, "Only owner can do this");
        _;
    }

    function setIndexStorage (address _addr) public onlyOwner
        {
        indexStorage = iIndexStorage(_addr);
        }

    function setPriceOracle(address _addr) public onlyOwner
        {
        oraclePrice = iOraclePrice(_addr);
        }

    function setAmountOracle(address _addr) public onlyOwner
        {
        oracleCircAmount = iOracleCircAmount(_addr);
        }

    function setTotSupply(address _addr) public onlyOwner
        {
        oracleTotSupply = iOracleTotSupply(_addr);
        }

    

    function makeIndex (string memory _name, string memory _symbol, address[] memory _actives) public onlyOwner returns (address) {
        
        require (indexStorage.indexes(keccak256(abi.encodePacked(_name, _symbol))) == address(0x0), "Same name+symbol exists");
        uint[] memory activesAm;
        for (uint8 i=0; i<_actives.length; i++) {
            uint price =  oraclePrice.getLastPrice(_actives[i]);
            require(price > 0, "No price for token");
            uint ts = oracleTotSupply.getLastamount(_actives[i]);
            require(ts > 0, "No total supply for token");
            uint amount = oracleCircAmount.getLastamount(_actives[i]);
            require(amount > 0, "No circ. amount for token");
            //token am =  Token_p * (Token_s / Token_ts) / _activites.length
            activesAm[i] = amount * price / ts / _actives.length;

        }
        

        IndexToken indexT = new IndexToken (_name, _symbol, _actives,  activesAm);

        indexStorage.setIndex(_name, _symbol, address(indexT));
        return address(indexT);

    }


}