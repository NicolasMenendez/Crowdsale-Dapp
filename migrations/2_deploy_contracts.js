var TutorialToken = artifacts.require("TutorialToken");
var Crowdsale = artifacts.require("Crowdsale");


module.exports = function(deployer,accounts) {

  var tokenInstance;
  deployer.deploy(TutorialToken).then(function() {            //Deploy Token
    return deployer.deploy(Crowdsale,50000,TutorialToken.address);  //Deploy Crowsale with param(rate, token)
  }).then(function() {                             //function to send total tokens from owner to tokenContract
    return this.TutorialToken
          .deployed()
          .then(instance => {
            tokenInstance = instance;
            return instance.totalSupply();
          }).then(totalSupply => {
            return tokenInstance
            .transfer(Crowdsale.address,totalSupply);
          })
  });
};
