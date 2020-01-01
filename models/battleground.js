var BattleGround = (function() {
  function BattleGround(element, size, amountOfMonsters) {
    this.gameWrapper = null;
    this.gameCells = null;
    this.gameControls = null;
    this.element = element;
    this.size = size;
    this.characterIndex = 0;
    this.beforeElement = null;
    this.character = null;
    this.amountOfMonsters = amountOfMonsters || size / 2;
    this.area = new Array(size).fill(1).map(function() {
      return new Grass();
    });
    this.drawGameField();
    this.drawElements();
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

  BattleGround.prototype.drawGameField = function(){
    this.gameWrapper = createElementWithClass('div', 'game__wrapper');
    this.gameCells = createElementWithClass('div', 'game__cells');
    this.gameControls = createElementWithClass('div', 'game__controls');
    this.gameWrapper.appendChild(this.gameCells);
    this.gameWrapper.appendChild(this.gameControls);
    this.element.appendChild(this.gameWrapper);
    return {
      gameWrapper: this.gameWrapper,
      gameCells: this.gameCells,
      gameControls: this.gameControls
    }
  }

  BattleGround.prototype.drawElements = function(){
    var game = this.drawGameField();
    this.area.forEach(function() {
      var cell = createElementWithClass('div', 'game__cells__item');
      game.gameCells.appendChild(cell);
          })
  } 

  BattleGround.prototype.update = function(){
    this.element.innerHTML = '';
    this.drawElements();
  }

  BattleGround.prototype.addCharacter = function(character) {
    this.beforeElement = this.area[this.characterIndex];
    this.area[this.characterIndex] = this.character = character;
    this.update();
  };

  BattleGround.prototype.moveCharacterLeft = function() {
    this.move(this.characterIndex - 1);
  };
  BattleGround.prototype.moveCharacterRight = function() {
    this.move(this.characterIndex + 1);
  };
  BattleGround.prototype.characterJump = function() {
    this.move(this.characterIndex + 2);
  };
  BattleGround.prototype.characterCrouch = function() {
    this.move(this.characterIndex + 2);
  };

  BattleGround.prototype.move = function(newIndex) {
    var beforeElementIndex = this.characterIndex;
    console.log(beforeElementIndex, this.beforeElement);
    if (newIndex < 0 || newIndex > this.area.length - 1) {
      return;
    }
    this.characterIndex = newIndex;
    this.area[beforeElementIndex] = this.beforeElement;
    this.beforeElement = this.area[newIndex];
    this.area[this.characterIndex] = this.character;
    this.update();
  };

  return BattleGround;
})();
