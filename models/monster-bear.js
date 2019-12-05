var MonsterBear = (function () {
    function MonsterBear(level) {
        Unit.call(this, 200, 500, level);
    }

    MonsterBear.prototype = Object.create(Unit.prototype);
    MonsterBear.prototype.constructor = MonsterBear;


    return MonsterBear;
}());