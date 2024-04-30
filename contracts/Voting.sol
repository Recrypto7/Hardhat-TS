// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract Voting is Context {

    struct Proposal {
        address author;
        string title;
        string description;
        uint endblock;
        uint yeas;
        uint noes;
       // 
    }

    // struct Voters {
    //     uint idVote;
    //     uint vote;
    //     bool voted;
    // }
    ERC20 public votingToken;
    constructor(address _votingToken){
        votingToken = ERC20(_votingToken);
    }

    mapping(uint => Proposal) public proposals;
    //mapping (uint => mapping(address => uint)) voters;
    // mapping(uint =>)
    uint public proposalCount;

    function createProposal(string memory _description,string memory _title, uint _endblock) public {
        require(_endblock > block.number, "Endblock must be in the future");
        require(_msgSender() != address(0));

        proposals[proposalCount] = Proposal({
            author: msg.sender,
            title: _title,
            description: _description,
            endblock: _endblock,
            yeas: 0,
            noes: 0
            
        });
        
        // Initialisation du mapping voters
       // proposals[proposalCount].voters = new mapping(address => uint256);
        proposalCount++;
    }

    function voteYes(uint _idVote) public {
        require(votingToken.balanceOf(_msgSender()) > 0, "You have no token to vote" );
        require(block.timestamp < proposals[_idVote].endblock);
        //require(proposals[_idVote].author != _msgSender(), "You can't vote as the author of the proposal!");
        proposals[_idVote].yeas++;
    }

    function voteNo(uint _idVote) public {
        require(votingToken.balanceOf(_msgSender()) > 0, "You have no token to vote" );
        require(block.timestamp < proposals[_idVote].endblock);
       // require(proposals[_idVote].author != _msgSender(), "You can't vote as the author of the proposal!");
        proposals[_idVote].noes++;
    }
}