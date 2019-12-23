var bg = new BattleGround(document.getElementById('wrapper'), 30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

var fnc = function(e){
    switch (e.keyCode){
        case 37:
            console.log('Left');
            break;
            case 38: console.log('Up');
            break;
            case 39:
                console.log('Right');
                break;
                case 40:
                    console.log('Down');
                    break;
    }
    }
console.log(e instanceof KeyboardEvent);
};

document.addEventListener('keydown',fnc);
