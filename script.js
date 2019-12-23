var bg = new BattleGround(document.getElementById('wrapper'), 30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

var fnc = function(e) {
    switch(e.keyCode) {
        case 37:
            bg.moveCharacterLeft()
            console.log('Left');
            break;
        case 38:
            bg.moveCharacterJump();
            console.log('Up')
            break;
        case 39:
            bg.moveCharacterRight();
            console.log('Right')
            break;
        case 40:
            bg.moveCharacterCrouch();
            console.log('Down')
            break;
    }
}

document.addEventListener('keydown', fnc)


// BattleGround.prototype.render = function() {
//     var ul = document.querySelector('.ul');

//     for (var i = 1; i < this.area.length; i++) {
//         var li = document.createElement('li')
//         li.innerHTML 
//         ul.append(li)
//     }
// };



