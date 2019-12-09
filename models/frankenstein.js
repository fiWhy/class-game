var Frankenstein = (function () {
    function Frankenstein(level) {
        Unit.call(this, 250, 500, level);
    }

    Frankenstein.prototype = Object.create(Unit.prototype);
    Frankenstein.prototype.constructor = Frankenstein;


    return Frankenstein;
}());
