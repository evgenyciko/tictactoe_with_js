const cross = "cross";
const circle = "circle";

const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");

let turn = cross;

resetButton.onclick = startGame;

function handleClick(e) {
  const boxTarget = e.target;

  if (turn === cross){
   
    boxTarget.classList.add("cross");
    turn = circle;
  }else{
   
  boxTarget.classList.add("circle");
    turn = cross;
}
}
function startGame() {
 
  boxElements.forEach((box) => {
    box.classList.remove('cross','circle');
    box.addEventListener("click", handleClick, { once: true });
  });
}

startGame();
