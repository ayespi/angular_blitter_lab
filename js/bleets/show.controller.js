"use strict";

(function(){
  angular
  .module("blitter")
  .controller("BleetShowController", [
    "BleetFactory",
    "$stateParams",
    BleetShowControllerFunction
  ]);

  function BleetShowControllerFunction(BleetFactory, $stateParams){
    this.bleet = BleetFactory.get({id: $stateParams.id});
  }
}());
