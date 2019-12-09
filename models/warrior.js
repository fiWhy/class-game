var Warrior = (function() {
    function Warrior(level) {
        Unit.call(this, 200, 400, level)
    }

    Warrior.prototype = Object.create(Unit.prototype)
    Warrior.prototype.constructor = Warrior

    return Warrior;
}());

