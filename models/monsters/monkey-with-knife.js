var MonkeyWithKnife = (function () {
    function MonkeyWithKnife(level) {
        Unit.call(this, 100, 100, level);
    }

    MonkeyWithKnife.prototype = Object.create(Unit.prototype);
    MonkeyWithKnife.prototype.constructor = MonkeyWithKnife;

    return MonkeyWithKnife;
}());