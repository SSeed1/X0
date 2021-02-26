document.addEventListener("DOMContentLoaded", () => {
  alert("!!PLEASE CHOSE PLAYER BEFORE THE GAME!! AND HAVE FUN");
});
let deck = [
  ['','',''],
  ['','',''],
  ['','','']
];
let currentPlayer = 'X';
$('#chose').click(function (event) {
  if ($('#chose-player').val() == 'x_player') {
      currentPlayer='X';
  }
  if ($('#chose-player').val() == '0_player') {
      currentPlayer='O';
  }
})
$('#restart').click(function(event){
  location.reload();
})
let fieldHtml = '';
for(let x = 0; x < 3; x++) {
  for(let y = 0; y < 3; y++) {
    fieldHtml += '<div class="cell" data-x="' + x + '" data-y="' + y + '"></div>';
  }
}
$('#field').html(fieldHtml);
$('#current-player').html(currentPlayer);

function checkGameFinished() {
  for(let x = 0; x < 3; x++) {
    let allXHor = true;
    let allOHor = true;
    for(let y = 0; y < 3; y++) {
      if (deck[x][y] != 'X') {
        allXHor = false;
      }
      if (deck[x][y] != 'O') {
        allOHor = false;
      }
    }
    if (allXHor) {
      $('#game-result').html('X wins');
    }
    if (allOHor) {
      $('#game-result').html('O wins');
    }
  }
}

$('.cell').on('click', function(event){
  let cell = event.currentTarget;
  if (cell.innerHTML == '') {
    cell.innerHTML = currentPlayer;
    let x = parseInt(cell.getAttribute('data-x'));
    let y = parseInt(cell.getAttribute('data-y'));
    deck[x][y] = currentPlayer;
    if (currentPlayer == 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    $('#current-player').html(currentPlayer);
    checkGameFinished();
  }
});
