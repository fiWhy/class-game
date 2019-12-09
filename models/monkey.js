var Monkey = (function() {
    function Monkey(level) {
        Unit.call(this, 100, 400, level)
    }

    Monkey.prototype = Object.create(Unit.prototype)
    Monkey.prototype.constructor = Monkey

    return Monkey;
}());

