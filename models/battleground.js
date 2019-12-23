var BattleGround = (function() {
  function BattleGround(element, size, amountOfMonsters) {
    this.wrapperElement = null;
    this.cellsElement = null;
    this.controllsElement = null;
    this.element = element;
    this.size = size;
    this.characterIndex = 0;
    this.beforeElement = null;
    this.character = null;
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
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('game__wrapper');
    this.wrapper.innerHTML =
      '<div class="game__cells"></div> \
        <div class="game__controls"></div>\
      ';

    this.cellsElement = this.wrapper.querySelector('.game__cells');
    this.controllsElement = this.wrapper.querySelector('.game__controls');
    this.wrapper.appendChild(this.cellsElement);
    this.wrapper.appendChild(this.controllsElement);
    this.element.appendChild(this.wrapper);
  };

  BattleGround.prototype.update = function() {
    var self = this;
    this.cellsElement.innerHTML = '';
    this.area.forEach(function(el) {
      var cell = document.createElement('div');
      var cellElement = el.render();

      cell.classList.add('game__cells__item');
      cell.appendChild(cellElement);
      self.cellsElement.appendChild(cell);
    });
  };

  BattleGround.prototype.addCharacter = function(character) {
    this.beforeElement = this.area[this.characterIndex];
    this.area[this.characterIndex] = this.character = character;
    this.update();
  };

  BattleGround.prototype.moveCharacterLeft = function() {
    var beforeElementIndex = this.characterIndex;
    this.beforeElement = this.area[--this.characterIndex];
    this.area[this.characterIndex] = this.character;
    this.area[beforeElementIndex] = this.beforeElement;
    this.update();
  };
  BattleGround.prototype.moveCharacterRight = function() {
    var beforeElementIndex = this.characterIndex;
    this.beforeElement = this.area[++this.characterIndex];
    this.area[this.characterIndex] = this.character;
    this.area[beforeElementIndex] = this.beforeElement;
    console.log(this.characterIndex, this.area);
    this.update();
  };
  BattleGround.prototype.characterJump = function() {};
  BattleGround.prototype.characterCrouch = function() {};

  return BattleGround;
})();
