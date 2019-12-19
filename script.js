var bg = new BattleGround(30);

bg.fill([Dragon, CrocoTurtle, Monkey, Snake, MonsterBear]);
bg.addCharacter(new Character());

var rootElement = document.getElementById("rootElement");
consoleNodesRecursive(rootElement);
