var Scalapender = (function() {
    function Scalapender(level) {
        Unit.call(this, 150, 1000, level);
     }
    Scalapender.prototype = Object.create(Unit.prototype);
    Scalapender.prototype.constructor = Scalapender;
    
    return Scalapender;
}());