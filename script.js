var bg = new BattleGround(document.getElementsByClassName('ul'), 30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());


// BattleGround.prototype.render = function() {
//     var ul = document.querySelector('.ul');

//     for (var i = 1; i < this.area.length; i++) {
//         var li = document.createElement('li')
//         li.innerHTML 
//         ul.append(li)
//     }
// };



