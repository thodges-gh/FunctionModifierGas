# Solidity Functions vs. Modifiers (gas cost)

```
truffle test
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/MyContract.sol...


  Contract: MyContract
    testFunction
         41952
      ✓ costs this much to run^
    testModifier
         41906
      ✓ costs this much to run^
    setWithEquality
         42008
      ✓ costs this much to run^
    setWithoutEquality
         41838
      ✓ costs this much to run^


  4 passing (361ms)
```