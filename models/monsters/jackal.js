var Jackal = (function () {
    function Jackal(level) {
        Unit.call(this, 100, 207, level);
    }

    Jackal.prototype = Object.create(Unit.prototype);
    Jackal.prototype.constructor = Jackal;

    return Jackal;
}());