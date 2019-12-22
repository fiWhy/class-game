var DinoNerve = (function() {
    function DinoNerve(level) {
      Unit.call(this, 20, 900, level);
    }
  
    DinoNerve.prototype = Object.create(Unit.prototype);
    DinoNerve.prototype.constructor = DinoNerve;
  
    return DinoNerve;
  })();