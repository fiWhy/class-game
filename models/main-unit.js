var MainUnit = (function () {
    function MainUnit(health) {
        this.health = this.MaxHealth = health;
    }
    MainUnit.prototype.move = function () {
        console.log('Person', this, 'move');
    };
    return MainUnit;
}());
