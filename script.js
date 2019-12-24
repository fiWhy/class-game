var bg = new BattleGround(document.getElementById('wrapper'), 30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

document.getElementById('wrapper').addEventListener('mouseover', function(){
    console.log(event.target.getAttribute('class'));
   });
