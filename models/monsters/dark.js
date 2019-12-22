var Dark = (function () {
    function Dark(level) {
        Unit.call(this, 100, 100, level);
    }

    Dark.prototype = Object.create(Unit.prototype);
    Dark.prototype.constructor = Dark;

    Dark.prototype.attack = function(monster) {
       this.monster = monster;
       
    };

    return Dark;
}());

// Теперь,- как мэйнтенреы ваших монстров,- ваша задача добавить к ним метод attack,
// который принимает в себя другого монстра и получает от него урон. Интерфейс 
// выглядит следующим образом

Monster.prototype.attack = function(monster) {
 // code
};