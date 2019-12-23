var GreedyPig = (function() {
    function GreedyPig(level) {
      Unit.call(this, 80, 10, level);
    }
  
    GreedyPig.prototype = Object.create(Unit.prototype);
    GreedyPig.prototype.constructor = GreedyPig;
  
    return GreedyPig;
  })();
  