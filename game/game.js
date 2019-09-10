var p1 = 0;
var p2 = 0;
var x = true;
function scoresdisplay() {
    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");
    player1.innerHTML = rows+" score: 0";
    player2.innerHTML = cols+" score: 0";
}
function rolldice(rows, cols) {
    if (x == true) {
        var die1 = document.getElementById("die1");
        var die2 = document.getElementById("die2");
        var status = document.getElementById("status");
        var player1 = document.getElementById("player1");
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        var diceTotal = d1 + d2;
        die1.innerHTML = d1;
        die2.innerHTML = d2;
        x = false;
        if (d1 === d2 && d1 === 6 && p1 !== 2) {
            p1 = p1 + 1;
            status.innerHTML = (3 - p1) + " more to  "+rows+" to win the game!!";
            player1.innerHTML = rows+" score: "+p1;
        } else if (d1 === d2 && d1 === 6 && p1 === 2) {
            alert(rows+" is winner!");
            window.location.reload();
        } else {
            status.innerHTML = "Its'ok  "+rows+".You still have chance to win.";
            player1.innerHTML = rows+" score: "+p1;
        }
    } else {
        var die1 = document.getElementById("die1");
        var die2 = document.getElementById("die2");
        var status = document.getElementById("status");
        var player2 = document.getElementById("player2");
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        var diceTotal = d1 + d2;
        die1.innerHTML = d1;
        die2.innerHTML = d2;
        x = true;
        if (d1 === d2 && d1 === 6 && p2 !== 2) {
            p2 = p2 + 1;
            status.innerHTML = (3 - p2) + " more to  "+cols+" to win the game!!";
            player2.innerHTML = cols+" score: "+p2;
        } else if (d1 === d2 && d1 === 6 && p2 === 2) {
            alert(cols+" is winner!");
            window.location.reload();
        } else {
             status.innerHTML = "Its'ok  "+cols+".You still have chance to win.";
             player2.innerHTML = cols+" score: "+p2;
        }
    }
}
function aboutgame(){
  alert("The game has two players and the one who gets \"6\" on both the dice for three times first  will win the game.");
}
function getConfirmation() {
    var retVal = confirm("Do you want to restart game?");
    if( retVal == true ) {
        window.location.reload();
       return true;
    }
 }
var rows ="";
var cols ="";
rows = rows+prompt("Enter Player1 name");
    cols = cols+prompt("Enter Player2 name");
    if(rows === "")
        rows = "Player1";
        if(cols === "")
        cols = "Player2";
        window.onload=scoresdisplay(rows, cols);
        document.getElementById("player1").innerHTML = rows+" score: 0";
        document.getElementById("player2").innerHTML = cols+" score: 0";
        rolldice(rows, cols);
