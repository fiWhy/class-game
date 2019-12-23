var Character = (function() {
  function Character(level) {
    Unit.call(this, 600, 1000, level);
  }

  Character.prototype = Object.create(Unit.prototype);
  Character.prototype.constructor = Character;

  Character.prototype.render = function() {
    Unit.prototype.render.call(this);
    this.el.style.backgroundColor = 'red';
    return this.el;
  };

  return Character;
})();
