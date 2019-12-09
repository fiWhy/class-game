var Snake = (function () {
    function Snake(level) {
        Unit.call(this, 50, 50, level);
    }

    Snake.prototype = Object.create(Unit.prototype);
    Snake.prototype.constructor = Snake;


    return Snake;
}());
