var Wolf = (function() {
    function Wolf(level) {
        Unit.call(this, 100, 400, level)
    }

    Wolf.prototype = Object.create(Unit.prototype)
    Wolf.prototype.constructor = Wolf

    return Wolf;
}());

