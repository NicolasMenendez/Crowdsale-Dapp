pragma solidity ^0.4.24;

import "./TutorialToken.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";


contract Crowdsale {
  using SafeMath for uint256;

  TutorialToken public token;
  address public wallet;
  uint256 public rate;
  uint256 public weiRaised;


  event TokenPurchase(
    address indexed purchaser,
    address indexed beneficiary,
    uint256 value,
    uint256 amount
  );


  constructor(uint256 _rate, address _tokenAddress) public {
    require(_rate > 0);
    require(_tokenAddress != address(0));

    rate = _rate;
    token = TutorialToken(_tokenAddress);
  }


  function () external payable {
    buyTokens(msg.sender);
  }


  function buyTokens(address _beneficiary) public payable {

    uint256 weiAmount = msg.value;
    _preValidatePurchase(_beneficiary, weiAmount);

    // calculate token amount to be created
    uint256 tokens = _getTokenAmount(weiAmount);

    // update state
    weiRaised = weiRaised.add(weiAmount);

    _processPurchase(_beneficiary, tokens);
    emit TokenPurchase(
      msg.sender,
      _beneficiary,
      weiAmount,
      tokens
    );

  }

  function _preValidatePurchase(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal
  {
    require(_beneficiary != address(0));
    require(_weiAmount != 0);
  }


  function _processPurchase(
    address _beneficiary,
    uint256 _tokenAmount
  )
    internal
  {
    token.transfer(_beneficiary, _tokenAmount);
  }


  function _getTokenAmount(uint256 _weiAmount)
    internal view returns (uint256)
  {
    return _weiAmount.mul(rate);
  }

}
