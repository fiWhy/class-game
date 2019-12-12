  
var WildBoar = (function () {
  function WildBoar(level) {
      Unit.call(this, 600, 800, level);
  }

  WildBoar.prototype = Object.create(Unit.prototype);
  WildBoar.prototype.constructor = WildBoar;


  return WildBoar;
}());
