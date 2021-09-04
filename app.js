const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/849d66baf41c4cb6b08458da9c70f552' // Your RPC URL goes here
const web3 = new Web3(rpcURL)

// Create global variable for account

window.account = ""


// function doSomething()
// {
//     iamGlobal = "account";
//     console.log(iamGlobal);

// }

// doSomething();

const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const showBalance = document.querySelector('.showBalance');

ethereumButton.addEventListener('click', () => {
  getAccount();
  console.log(account);
});

// var balance;

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
 account = accounts[0];
  showAccount.innerHTML = account;
  
  //const balance = await ethereum.request({ method: 'eth_getBalance', params: ["0xF36EAE3B23009fB9D1864B4377605aD2e667EFd4","latest"] });
  // const balance = await ethereum.request({ method: 'eth_getBalance', params: [account,"latest"] });
  // ethereum.request({ method: 'eth_getBalance', params: [account,"latest"] }) => {
    web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether')
  })
 
  // const balance = balances[0];
  showBalance.innerHTML = balance;
}

// const address = getAccount() // Your account address goes here

// // retrieve account balance from web3
// web3.eth.getBalance(address, (err, wei) => {
//   balance = web3.utils.fromWei(wei, 'ether')
  
// })
