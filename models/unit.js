var Unit = (function() {
  function Unit(baseDamage, health, level) {
    this.el = document.createElement('div');
    this.el.classList.add('cell__unit');
    var modifier = (level - 1) * 10;
    this.damage = baseDamage + modifier;
    this.maxHealth = this.health = health + modifier;
    this.level = level;
  }

  Unit.prototype.attack = function() {
    console.log('Attack', this);
  };

  Unit.prototype.render = function() {
    return this.el;
  };

  return Unit;
})();
