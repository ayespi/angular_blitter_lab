"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetEditController", [
    "BleetFactory",
    BleetEditControllerFunction
  ]);

  function BleetEditControllerFunction(BleetFactory, $stateParams){
    this.bleet = new BleetFactory();
    this.create = function(){
      this.bleet.$save();
    }
  }
}());
