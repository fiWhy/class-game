var UglyDoll = (function () {
    function UglyDoll(level) {
        Unit.call(this, 100, 333, level);
    }

    UglyDoll.prototype = Object.create(Unit.prototype);
    UglyDoll.prototype.constructor = UglyDoll;

    return UglyDoll;
}());