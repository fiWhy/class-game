var Tree = (function() {
  function Tree(level) {
    Unit.call(this, 0, 10, level);
  }

  Tree.prototype = Object.create(Unit.prototype);
  Tree.prototype.constructor = Tree;
  Tree.prototype.setClimber = function(unit) {
    this.climber = unit;
  };

  return Tree;
})();
