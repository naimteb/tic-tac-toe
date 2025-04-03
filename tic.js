let playertxt = document.getElementById("playertxt");
let restartbtn = document.getElementById("restartBtn");
let boxes = Array.from(document.getElementsByClassName("box"));

let flag = false;
const X_txt = "X";
const O_txt = "O";
let current_player = X_txt;
let spaces = Array(9).fill(null);
console.log(spaces);
const startgame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxclicked));
};
function boxclicked(e) {
  if (flag) {
    return;
  }
  const id = Number(e.target.id);
  if (spaces[id] == null) {
    spaces[id] = current_player;
    e.target.innerText = current_player;
    if (playerhaswon()) {
      playertxt.innerText = `${current_player} has won!`;
      flag = true;

      return;
    }
    current_player = current_player == X_txt ? O_txt : X_txt;
  }
}
restartbtn.addEventListener("click", restart);

function restart() {
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerText = "";
  });
  current_player = X_txt;
  playertxt.innerText = "Tic-Tac-toe";
}

const wining_loc = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// function playerhaswon() {
//   for (let object of wining_loc) {
//     let [a, b, c] = object;
//     if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
//       return [a, b, c];
//     }
//   }
//   return false;
// }
function playerhaswon() {
  for (let index = 0; index < wining_loc.length; index++) {
    let a = wining_loc[index][0];
    let b = wining_loc[index][1];
    let c = wining_loc[index][2];
    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}
startgame();
