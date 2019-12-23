var CrazyDove = (function() {
    function CrazyDove(level) {
      Unit.call(this, 5, 25, level);
    }
  
    CrazyDove.prototype = Object.create(Unit.prototype);
    CrazyDove.prototype.constructor = CrazyDove;
  
    return CrazyDove;
  })();