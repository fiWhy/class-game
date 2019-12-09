var Dragon = (function () {
    function Dragon(level) {
        Unit.call(this, 150, 200, level);
    }

    Dragon.prototype = Object.create(Unit.prototype);
    Dragon.prototype.constructor = Dragon;


    return Dragon;
}());
