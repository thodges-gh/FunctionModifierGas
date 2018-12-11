pragma solidity ^0.4.24;

contract MyContract {
  bytes32 public data;

  function setsByFunction(bytes32 _data) internal {
    data = _data;
  }

  modifier setModifier(bytes32 _data) {
    data = _data;
    _;
  }

  function testFunction(bytes32 _data) public {
    setsByFunction(_data);
  }

  function testModifier(bytes32 _data) public setModifier(_data) {}
}