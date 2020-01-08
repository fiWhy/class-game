var bg = new BattleGround(document.getElementById('wrapper'), 30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

var fnc = function(e) {
  switch (e.keyCode) {
    case 37:
      bg.moveCharacterLeft();
      break;
    case 38:
      bg.characterJump();
      break;
    case 39:
      bg.moveCharacterRight();
      break;
    case 40:
      bg.characterCrouch();
      break;
  }
};

document.addEventListener('keydown', fnc);

// add event listener CASE 1
const gameCells = document.querySelectorAll('.game__cells__item');
gameCells.forEach((element, index) => {
  function mouseOverHandler() {
    console.log(`You just moused over an element number ${index}`);
  }
  element.addEventListener('mouseover', mouseOverHandler);
});

// add event listener CASE2
const gameWrapper = document.querySelector('.game__cells');
gameWrapper.addEventListener('mouseover', event => {
  let index = event.target.getAttribute('data-index');
  console.log(`You just moused over an element number ${index}`);
});
