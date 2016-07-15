"use strict";

(function(){
  angular
  .module("blitter")
  .controller("BleetIndexController", [
    "BleetFactory",
    BleetIndexControllerFunction
  ]);

  function BleetIndexControllerFunction(BleetFactory){
    this.bleets = BleetFactory.query();
  }
}());
