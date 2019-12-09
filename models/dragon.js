var Dragon = (function () {
  function Dragon(level) {
      Unit.call(this, 600, 1000, level);
  }

  Dragon.prototype = Object.create(Unit.prototype);
  Dragon.prototype.constructor = Dragon;


  return Dragon;
}());
