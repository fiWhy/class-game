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

let cell = document.querySelectorAll('.game__cells__item');
cell.forEach((element, index) => {
  let eventMouseOver = element.addEventListener('mouseover', () =>
    console.log(`You just moused over element number ${index}`)
  );
});
