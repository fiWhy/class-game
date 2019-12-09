var Pirate = (function () {
    function Pirate(level) {
        Unit.call(this, 250, 500, level);
    }

    Pirate.prototype = Object.create(Unit.prototype);
    Pirate.prototype.constructor = Pirate;


    return Pirate;
}());
