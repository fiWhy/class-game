var LazyIra = (function() {
    function LazyIra(level) {
      Unit.call(this, 10, 1000, level);
    }
  
    LazyIra.prototype = Object.create(Unit.prototype);
    LazyIra.prototype.constructor = LazyIra;
  
    return LazyIra;
  })();