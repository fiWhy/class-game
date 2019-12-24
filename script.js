var bg = new BattleGround(document.getElementById('wrapper'), 30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

<<<<<<< HEAD
document.getElementById('wrapper').addEventListener('mouseover', function(){
    console.log(event.target.getAttribute('class'));
   });
=======
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
>>>>>>> 921ed6f7991cd94c79f8e765867e7c5cc0baed6f
