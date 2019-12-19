var ScaryClown = (function () {
    function ScaryClown(level) {
        Unit.call(this, 100, 666, level);
    }

    ScaryClown.prototype = Object.create(Unit.prototype);
    ScaryClown.prototype.constructor = ScaryClown;

    return ScaryClown;
}());