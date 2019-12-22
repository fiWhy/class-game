var BattleGround = (function() {
  function BattleGround(element, size, amountOfMonsters) {
    this.wrapperElement = null;
    this.cellsElement = null;
    this.controllsElement = null;
    this.element = element;
    this.size = size;
    this.amountOfMonsters = amountOfMonsters || size / 2;
    this.area = new Array(size).fill(1).map(function() {
      return new Grass();
    });
    this.render();
    this.update();
  }

  BattleGround.prototype.fill = function(monstersArr) {
    var self = this;
    Array(this.amountOfMonsters)
      .fill(1)
      .forEach(function() {
        self.area[random(1, self.area.length)] = new monstersArr[
          random(0, monstersArr.length)
        ](random(1, 3));
      });

    this.update();
  };

  BattleGround.prototype.render = function() {
    var ul = document.querySelector('.ul');

    for (var i = 1; i < this.size; i++) {
        var li = document.createElement('li')
        li.innerHTML 
        ul.append(li)
    }
};

  BattleGround.prototype.addCharacter = function(character) {
    this.area[0] = character;
  };

  return BattleGround;
})();
