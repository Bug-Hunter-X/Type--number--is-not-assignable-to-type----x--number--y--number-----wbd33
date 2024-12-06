function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

//Correct way
function printCoord2(x: number, y: number) {
  console.log("The coordinate's x value is " + x);
  console.log("The coordinate's y value is " + y);
}

printCoord2(3,7);