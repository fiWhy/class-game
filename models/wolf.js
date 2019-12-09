var Wolf = (function() {
    function Wolf(level) {
        Unit.call(this, 150, 1000, level);
     }
    Wolf.prototype = Object.create(Unit.prototype);
    Wolf.prototype.constructor = Wolf;
    
    return Wolf;
}());