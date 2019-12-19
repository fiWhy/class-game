var BattleGround = (function() {
  function BattleGround(element, size, amountOfMonsters) {
    this.amountOfMonsters = amountOfMonsters || size / 2;
    this.area = new Array(size).fill(1).map(function() {
      return new Grass();
    });
    this.render();
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
  };

  BattleGround.prototype.render = function() {
    var el = document.createElement('div');
    el.classList.add('game__wrapper');
    el.innerHTML =
      '<div class="game__cells"></div> \
        <div class="game__controls"></div>\
      ';

    var cellsElement = el.querySelector('.game__cells'),
      controlsElement = el.querySelector('.game__controls');
  };

  BattleGround.prototype.addCharacter = function(character) {
    this.area[0] = character;
  };

  return BattleGround;
})();
