var BattleGround = (function() {
  function BattleGround(size, amountOfMonsters) {
    this.amountOfMonsters = amountOfMonsters || size / 2;
    this.area = new Array(size).fill(1).map(function() {
      return new Grass();
    });
  }

  BattleGround.prototype.fill = function(monstersArr) {
    var self = this;
    console.log(monstersArr);
    Array(this.amountOfMonsters)
      .fill(1)
      .forEach(function() {
        self.area[random(1, self.area.length)] = new monstersArr[
          random(0, monstersArr.length)
        ](random(1, 3));
      });
  };

  BattleGround.prototype.addCharacter = function(character) {
    this.area[0] = character;
  }

  return BattleGround;
})();
