var bg = new BattleGround(document.getElementById('wrapper'), 30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

document.addEventListener('keydown', e => {
  console.log(e);
  switch (e.keyCode) {
    case 39:
      bg.moveCharacterRight();
      break;
    case 37:
      bg.moveCharacterLeft();
      break;
  }
});
