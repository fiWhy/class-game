var Dark = (function () {
    function Dark(level) {
        Unit.call(this, 100, 100, level);
    }

    Dark.prototype = Object.create(Unit.prototype);
    Dark.prototype.constructor = Dark;

    return Dark;
}());