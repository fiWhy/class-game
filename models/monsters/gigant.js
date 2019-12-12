var Gigant = (function () {
  function Gigant(level) {
      Unit.call(this, 1000, 1700, level);
  }

  Gigant.prototype = Object.create(Unit.prototype);
  Gigant.prototype.constructor = Gigant;


  return Gigant;
}());
