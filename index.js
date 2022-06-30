

function receivesAFunction(callback){
    return (callback());
}

function returnsAnAnonymousFunction () {
    return (function () { return 4 + 5; });
  }
  
function returnsANamedFunction () {
    return (function example () {return 7 +8; });
}