/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleBond, SimpleBondInterface } from "../SimpleBond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenRewards_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vestingBlocks_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "treasury_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "block",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bondId",
        type: "uint256",
      },
    ],
    name: "LogBond",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
    ],
    name: "LogClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardsRatio",
        type: "uint256",
      },
    ],
    name: "LogSetRewards",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bond",
    outputs: [
      {
        internalType: "uint256",
        name: "bondId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bonds",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "block",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "bondsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "claimBond",
    outputs: [
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "rewardsBondOf",
    outputs: [
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsClaimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsClaimable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "rewardsOf",
    outputs: [
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsClaimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardsClaimable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewardsRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenRewardsRatio",
        type: "uint256",
      },
    ],
    name: "setRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "treasury_",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "vestingBlocks_",
        type: "uint256",
      },
    ],
    name: "setVestingBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenRewards",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200173b3803806200173b8339810160408190526200003491620002a8565b6200003f33620000d4565b6000805460ff60a01b191690556001600160a01b038316620000a85760405162461bcd60e51b815260206004820152601460248201527f496e76616c69642052657761726420746f6b656e00000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038316608052620000c08262000124565b620000cb81620001c6565b505050620002e9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146200016f5760405162461bcd60e51b815260206004820181905260248201526000805160206200171b83398151915260448201526064016200009f565b60008111620001c15760405162461bcd60e51b815260206004820152601d60248201527f496e76616c69642056657374696e6720626c6f636b73206e756d62657200000060448201526064016200009f565b600255565b6000546001600160a01b03163314620002115760405162461bcd60e51b815260206004820181905260248201526000805160206200171b83398151915260448201526064016200009f565b6001600160a01b038116620002695760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642054726561737572792061646472657373000000000000000060448201526064016200009f565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b0381168114620002a357600080fd5b919050565b600080600060608486031215620002be57600080fd5b620002c9846200028b565b925060208401519150620002e0604085016200028b565b90509250925092565b608051611408620003136000396000818161015701528181610490015261050401526114086000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806380c15aaa116100c3578063d578ceab1161007c578063d578ceab14610318578063eafba8be14610321578063f0f4426014610334578063f2fde38b14610347578063f3fef3a31461035a578063fee1a9c81461036d57600080fd5b806380c15aaa1461029d5780638456cb59146102b05780638da5cb5b146102b8578063a515366a146102c9578063ac43f366146102dc578063b451ae4a146102ef57600080fd5b80633f4ba83a116101155780633f4ba83a14610225578063479ba7ae1461022f5780634e71d92d1461025d5780635c975abb1461026557806361d027b314610282578063715018a61461029557600080fd5b8063091c76f5146101525780630e15561a146101965780631c08c08e146101ad578063202160fd146101c0578063327d83b8146101e0575b600080fd5b6101797f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61019f60045481565b60405190815260200161018d565b61019f6101bb3660046111aa565b610376565b61019f6101ce3660046111df565b60016020526000908152604090205481565b6101f36101ee3660046111fa565b610577565b604080516001600160a01b0390961686526020860194909452928401919091526060830152608082015260a00161018d565b61022d6105cf565b005b61024261023d3660046111df565b610603565b6040805193845260208401929092529082015260600161018d565b61019f610682565b600054600160a01b900460ff16604051901515815260200161018d565b600654610179906001600160a01b031681565b61022d6106f2565b61022d6102ab3660046111fa565b610726565b61022d6107f5565b6000546001600160a01b0316610179565b61019f6102d73660046111fa565b610827565b61022d6102ea3660046111aa565b610a33565b61019f6102fd3660046111df565b6001600160a01b031660009081526003602052604090205490565b61019f60055481565b61024261032f3660046111fa565b610ab2565b61022d6103423660046111df565b610b55565b61022d6103553660046111df565b610bf7565b61022d6103683660046111fa565b610c92565b61019f60025481565b60008054600160a01b900460ff16156103aa5760405162461bcd60e51b81526004016103a190611224565b60405180910390fd5b3360009081526003602052604081208054849081106103cb576103cb61124e565b600091825260208083206040805160a081018252600590940290910180546001600160a01b031684526001810154928401929092526002820154908301526003810154606083015260048101546080830152925061042890610cda565b9050801561052f5780826003016000828254610444919061127a565b92505081905550806005600082825461045d919061127a565b909155505060028201546003830154111561047a5761047a611292565b604051636310dfc560e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c621bf8a90602401600060405180830381600087803b1580156104dc57600080fd5b505af11580156104f0573d6000803e3d6000fd5b505060065461052f92506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169250163384610d66565b60408051338152602081018690529081018490527f9a4772cd5c0946aaea956f025c3bd64f5b4464abfaa006dbfc1ffe104b89ef2f9060600160405180910390a15050919050565b6003602052816000526040600020818154811061059357600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b039093169550909350919085565b6000546001600160a01b031633146105f95760405162461bcd60e51b81526004016103a1906112a8565b610601610dd7565b565b60008080805b6001600160a01b03851660009081526003602052604090205481101561067a5760008060006106388885610ab2565b91945092509050610649838861127a565b9650610655828761127a565b9550610661818661127a565b9450505050600181610673919061127a565b9050610609565b509193909250565b60008054600160a01b900460ff16156106ad5760405162461bcd60e51b81526004016103a190611224565b60005b336000908152600360205260409020548110156106ee576106d081610376565b6106da908361127a565b91506106e760018261127a565b90506106b0565b5090565b6000546001600160a01b0316331461071c5760405162461bcd60e51b81526004016103a1906112a8565b6106016000610e74565b6000546001600160a01b031633146107505760405162461bcd60e51b81526004016103a1906112a8565b6001600160a01b03821661079d5760405162461bcd60e51b815260206004820152601460248201527324b73b30b634b2102932bbb0b932103a37b5b2b760611b60448201526064016103a1565b6001600160a01b038216600081815260016020908152604091829020849055815192835282018390527f6510bc177b221b83db45f8daeddbea4c053d983b9505fd7a4810528e5e5826cb910160405180910390a15050565b6000546001600160a01b0316331461081f5760405162461bcd60e51b81526004016103a1906112a8565b610601610ec4565b60008054600160a01b900460ff16156108525760405162461bcd60e51b81526004016103a190611224565b6001600160a01b0383166000908152600160205260409020546108ab5760405162461bcd60e51b8152602060048201526011602482015270151bdad95b881b9bdd08185b1b1bddd959607a1b60448201526064016103a1565b6108c06001600160a01b038416333085610d66565b6108fb6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6001600160a01b03841680825260208083018590524360808401526000918252600190526040812054633b9aca009061093490866112dd565b61093e91906112fc565b905080826040018181525050806004600082825461095c919061127a565b90915550503360008181526003602081815260408084208054600180820183559186529483902088516005870290910180546001600160a01b0319166001600160a01b0390921691821781558985015192810183905589840151600282018190556060808c0151978301979097556080808c015160049093018390558551998a5295890192909252928701919091529285019290925283015260a0820181905293507f052c36ae0feaf423139c51ade3446fd2170796d06cb1fb368243a368921ed79b9060c00160405180910390a1505092915050565b6000546001600160a01b03163314610a5d5760405162461bcd60e51b81526004016103a1906112a8565b60008111610aad5760405162461bcd60e51b815260206004820152601d60248201527f496e76616c69642056657374696e6720626c6f636b73206e756d62657200000060448201526064016103a1565b600255565b6001600160a01b038216600090815260036020526040812080548291829182919086908110610ae357610ae361124e565b60009182526020918290206040805160a081018252600590930290910180546001600160a01b031683526001810154938301939093526002830154908201819052600383015460608301819052600490930154608083015295509093509050610b4b81610cda565b9150509250925092565b6000546001600160a01b03163314610b7f5760405162461bcd60e51b81526004016103a1906112a8565b6001600160a01b038116610bd55760405162461bcd60e51b815260206004820152601860248201527f496e76616c69642054726561737572792061646472657373000000000000000060448201526064016103a1565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610c215760405162461bcd60e51b81526004016103a1906112a8565b6001600160a01b038116610c865760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103a1565b610c8f81610e74565b50565b6000546001600160a01b03163314610cbc5760405162461bcd60e51b81526004016103a1906112a8565b600654610cd6906001600160a01b03848116911683610f29565b5050565b60008160800151431015610cf057610cf0611292565b6000826080015143610d02919061131e565b90506000600254821015610d3457600254828560400151610d2391906112dd565b610d2d91906112fc565b9050610d3b565b5060408301515b8360600151811015610d4f57610d4f611292565b6060840151610d5e908261131e565b949350505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610dd19085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610f5e565b50505050565b600054600160a01b900460ff16610e275760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103a1565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff1615610eee5760405162461bcd60e51b81526004016103a190611224565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e573390565b6040516001600160a01b038316602482015260448101829052610f5990849063a9059cbb60e01b90606401610d9a565b505050565b6000610fb3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166110309092919063ffffffff16565b805190915015610f595780806020019051810190610fd19190611335565b610f595760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103a1565b606061103f8484600085611049565b90505b9392505050565b6060824710156110aa5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103a1565b843b6110f85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103a1565b600080866001600160a01b031685876040516111149190611383565b60006040518083038185875af1925050503d8060008114611151576040519150601f19603f3d011682016040523d82523d6000602084013e611156565b606091505b5091509150611166828286611171565b979650505050505050565b60608315611180575081611042565b8251156111905782518084602001fd5b8160405162461bcd60e51b81526004016103a1919061139f565b6000602082840312156111bc57600080fd5b5035919050565b80356001600160a01b03811681146111da57600080fd5b919050565b6000602082840312156111f157600080fd5b611042826111c3565b6000806040838503121561120d57600080fd5b611216836111c3565b946020939093013593505050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561128d5761128d611264565b500190565b634e487b7160e01b600052600160045260246000fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008160001904831182151516156112f7576112f7611264565b500290565b60008261131957634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561133057611330611264565b500390565b60006020828403121561134757600080fd5b8151801515811461104257600080fd5b60005b8381101561137257818101518382015260200161135a565b83811115610dd15750506000910152565b60008251611395818460208701611357565b9190910192915050565b60208152600082518060208401526113be816040850160208701611357565b601f01601f1916919091016040019291505056fea2646970667358221220bff5ad4ccc80a7343921fe413e69221726aa2a061800a28553dc828e6744e14264736f6c634300080900334f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572";

type SimpleBondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleBondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleBond__factory extends ContractFactory {
  constructor(...args: SimpleBondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    tokenRewards_: string,
    vestingBlocks_: BigNumberish,
    treasury_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleBond> {
    return super.deploy(
      tokenRewards_,
      vestingBlocks_,
      treasury_,
      overrides || {}
    ) as Promise<SimpleBond>;
  }
  getDeployTransaction(
    tokenRewards_: string,
    vestingBlocks_: BigNumberish,
    treasury_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenRewards_,
      vestingBlocks_,
      treasury_,
      overrides || {}
    );
  }
  attach(address: string): SimpleBond {
    return super.attach(address) as SimpleBond;
  }
  connect(signer: Signer): SimpleBond__factory {
    return super.connect(signer) as SimpleBond__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleBondInterface {
    return new utils.Interface(_abi) as SimpleBondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleBond {
    return new Contract(address, _abi, signerOrProvider) as SimpleBond;
  }
}
