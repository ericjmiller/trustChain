let Web3 = require("Web3");
let TruffleContract = require("truffle-contract");
let fs = require("fs");

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');

module.exports = function web3Hook(sails) {
  return {
    initialize: function(cb) {
      sails.contracts = {};
      sails.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");

      var adoptionContent = fs.readFileSync(sails.config.appPath + "/build/contracts/Adoption.json");
      let adoption = JSON.parse(adoptionContent);

      sails.contracts.Adoption = TruffleContract(adoption);
      sails.contracts.Adoption.setProvider(sails.web3Provider);

      //$.getJSON('../../../build/contracts/Adoption.json', function(data) {
      //  // Get the necessary contract artifact file and instantiate it with truffle-contract
      //  var AdoptionArtifact = data;
      //  sails.contracts.Adoption = TruffleContract(AdoptionArtifact);

      //  // Set the provider for our contract
      //  sails.contracts.Adoption.setProvider(sails.web3Provider);
      //});

    cb();
    }
  }
}


//  var account = web3.eth.accounts[0];
//  var contract = web3.eth.contract(LogiToken);
//  sails.contract = contract;
//}
//
//
//initWeb3: function() {
//    // Is there is an injected web3 instance?
//    if (typeof web3 !== 'undefined') {
//      App.web3Provider = web3.currentProvider;
//    } else {
//      // If no injected web3 instance is detected, fallback to the TestRPC
//      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
//    }
//    web3 = new Web3(App.web3Provider);
//
//    return App.initContract();
//  },
//
//  initContract: function() {
//    $.getJSON('Adoption.json', function(data) {
//      // Get the necessary contract artifact file and instantiate it with truffle-contract
//      var AdoptionArtifact = data;
//      App.contracts.Adoption = TruffleContract(AdoptionArtifact);
//
//      // Set the provider for our contract
//      App.contracts.Adoption.setProvider(App.web3Provider);
//
//      // Use our contract to retrieve and mark the adopted pets
//      return App.markAdopted();
//    });
//
//    return App.bindEvents();
//  },
//
//  bindEvents: function() {
//    $(document).on('click', '.btn-adopt', App.handleAdopt);
//  },
//
//  markAdopted: function(adopters, account) {
//    var adoptionInstance;
//
//    App.contracts.Adoption.deployed().then(function(instance) {
//      adoptionInstance = instance;
//
//      return adoptionInstance.getAdopters.call();
//    }).then(function(adopters) {
//      for (i = 0; i < adopters.length; i++) {
//        if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
//          $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
//        }
//      }
//    }).catch(function(err) {
//      console.log(err.message);
//    });
//  },
