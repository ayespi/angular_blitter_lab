"use strict";

(function(){
  angular
  .module("blitter")
  .controller("BleetNewController", [
    "BleetFactory",
    BleetNewControllerFunction
  ]);

  function BleetNewControllerFunction(BleetFactory, $stateParams){
    this.bleet = new BleetFactory();
    this.create = function(){
      this.bleet.$save();
    }
  }
}());
