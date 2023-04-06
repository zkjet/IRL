// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// Untested Contract

import "@openzeppelin/contracts/access/Ownable.sol";

contract CarPurchase is Ownable {
    string private carSellerWallet;
    string private carBuyerWallet;
    uint public purchasePrice;
    bool private warranty;
    bool public saleComplete;

    constructor() {}

    function normalThing() public {
        // anyone can call this normalThing()
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }

    function specialThing() public onlyOwner {
        // only the owner can call specialThing()!
    }

    function getCarSellerWallet(string memory _carSellerWallet) private {
        carSellerWallet = _carSellerWallet;
    }

    function getCarBuyerWallet(string memory _carBuyerWallet) private {
        carBuyerWallet = _carBuyerWallet;
    }

    function setPrice(uint _purchasePrice) public {
        purchasePrice = _purchasePrice;
    }

    function transferCar() public {}
}
