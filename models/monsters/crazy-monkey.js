var CrazyMonkey = (function() {
  var CrazyMonkey = function(lvl) {
    var defs = {
      hp: 115,
      dmg: 30
    };
    Unit.call(this, {
      lvl: lvl,
      hp: defs.hp,
      dmg: defs.dmg
    });
  };
  CrazyMonkey.prototype = Object.create(Unit.prototype);
  CrazyMonkey.prototype.constructor = CrazyMonkey;
  CrazyMonkey.prototype.climbATree = function(tree) {
    this.climbedTree = tree;
    tree.setClimber(this);
  };
  CrazyMonkey.prototype.attack = function(unit) {
    this.health -= unit.dmg;
    unit.attack(this);
  };
  return CrazyMonkey;
})();
