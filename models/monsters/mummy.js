var Mummy = (function () {
    function Mummy(level) {
        Unit.call(this, 100, 249, level);
    }

    Mummy.prototype = Object.create(Unit.prototype);
    Mummy.prototype.constructor = Mummy;

    return Mummy;
}());