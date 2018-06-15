var currentPlayer = prompt("Who starts first? \n Press 1 for Player X \n Press any other key for Player 0");

//This while loop will make sure that currentPlayer is never null
while (currentPlayer == "") {
   currentPlayer =  prompt("Who starts first? \n Press 1 for Player X \n Press any other key for Player 0")
}


var grid=new Array(3);
grid[0]=new Array(3);
grid[1]=new Array(3);
grid[2]=new Array(3);


for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
  }
}

//This function will check is a spot is already taken
function clickCell(x,y) {
  if (grid[x][y]>0) {
    alert("OPPPS!!! That spot is already taken!");
  } 


// Clicking Of Boxes
  else {
    if (currentPlayer==1) {
      document.getElementById("cell_"+x+"_"+y).style.color="black";
      document.getElementById("cell_"+x+"_"+y).innerHTML="X";
      grid[x][y]=1;
      currentPlayer=2;
    } else {
       document.getElementById("cell_"+x+"_"+y).style.color="red";
       document.getElementById("cell_"+x+"_"+y).innerHTML="O";
      grid[x][y]=2;
      currentPlayer=1;
    }
  }
}

// Reset Game function 

function reset() {
for (var i=0; i<=2; i++) {
  for (var j=0; j<=2; j++) {
    grid[i][j]=0;
    document.getElementById("cell_"+i+"_"+j).innerHTML="&nbsp;";
  }
}
 currentPlayer=1;
}