contract OraclePrice {

function addExpert  (address _addrExp)
function delExpert  (address _addrExp)
function rewardExpert (address _addrExpert) public onlyOwner

function addPrice   (address _addrToken, uint _price ) public onlyExpert

function getPrice (address _addrToken) public onlyExchange returns (uint price)

function getallPrices (address _addrToken) public onlyExpert returns (uint[] prices)
function getallTokens () public onlyExpert returns (address[] tokens)

function setExchange (address _addrExchange) public onlyOwner

function setOwner(address _addrOwner) public onlyOwner



}
