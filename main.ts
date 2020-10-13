 let pstack: Array<Sprite> = [];
let positionx = 80;
let positiony = 104;
let stackcount = 0;
game.onUpdateInterval(250, function() {
  if (controller.up.isPressed()) {
    pstack.push(sprites.create(img`
     . . . . . . b b b b . . . . . .
     . . . . . . b 4 4 4 b . . . . .
     . . . . . . b b 4 4 4 b . . . .
     . . . . . b 4 b b b 4 4 b . . .
     . . . . b d 5 5 5 4 b 4 4 b . .
     . . . . b 3 2 3 5 5 4 e 4 4 b .
     . . . b d 2 2 2 5 7 5 4 e 4 4 e
     . . . b 5 3 2 3 5 5 5 5 e e e e
     . . b d 7 5 5 5 3 2 3 5 5 e e e
     . . b 5 5 5 5 5 2 2 2 5 5 d e e
     . b 3 2 3 5 7 5 3 2 3 5 d d e 4
     . b 2 2 2 5 5 5 5 5 5 d d e 4 .
     b d 3 2 d 5 5 5 d d d 4 4 . . .
     b 5 5 5 5 d d 4 4 4 4 . . . . .
     4 d d d 4 4 4 . . . . . . . . .
     4 4 4 4 . . . . . . . . . . . .
    `));
    pstack[stackcount].setPosition(positionx, positiony);
    stackcount++;
    positiony -= 16
 }
  if (stackcount != 0 && controller.down.isPressed()) {
     pstack[stackcount - 1].destroy(effects.fire, 0);
     pstack.pop();
     stackcount--;
     positiony += 16
  }      
})