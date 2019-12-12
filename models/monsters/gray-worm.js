var GrayWorm = (function () {
    function GrayWorm(level) {
        Unit.call(this, 100, 200, level);
    }

    GrayWorm.prototype = Object.create(Unit.prototype);
    GrayWorm.prototype.constructor = GrayWorm;

    return GrayWorm;
}());