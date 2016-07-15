"use strict";

(function(){
  angular
  .module("blitter")
  .factory("BleetFactory", [
      "$resource",
      BleetFactoryFunction
    ])
  function BleetFactoryFunction($resource){
    return $resource("http://localhost:3000/bleets/:id");
  }
}());
