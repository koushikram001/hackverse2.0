// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract XinFinNFT is ERC721Enumerable, Ownable {
    using SafeMath for uint256;

    uint256 public constant MAX_NFT_SUPPLY = 10000;
    uint256 public constant PRICE = 1 ether;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    // Mint NFTs
    function mintNFT(uint256 numberOfTokens) external payable {
        require(totalSupply() + numberOfTokens <= MAX_NFT_SUPPLY, "Exceeds maximum supply");
        require(numberOfTokens > 0 && numberOfTokens <= 10, "You can mint between 1 and 10 NFTs at a time");
        require(msg.value >= PRICE * numberOfTokens, "Insufficient funds");

        for (uint256 i = 0; i < numberOfTokens; i++) {
            uint256 tokenId = totalSupply() + 1;
            _safeMint(msg.sender, tokenId);
        }
    }

    // Withdraw contract balance
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        payable(owner()).transfer(balance);
    }

    // Base URI for metadata
    function setBaseURI(string memory baseURI) public onlyOwner {
        _setBaseURI(baseURI);
    }

    // Pause and unpause contract
    bool public paused = false;

    function pause() public onlyOwner {
        paused = true;
    }

    function unpause() public onlyOwner {
        paused = false;
    }

    function isPaused() public view returns (bool) {
        return paused;
    }

    // Override for enumeration
    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override {
        require(!paused, "Transfers are paused");
        super._beforeTokenTransfer(from, to, tokenId);
    }
}