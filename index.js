/*jshint esversion: 6*/
/*let row = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[14, 15, 16, 17]
];

let column = [
['a', 'b', 'c', 'd'],
['e', 'f', 'g', 'h'],
['i', 'j', 'k', 'l'],
['m', 'n', 'o', 'p']
];

//console.log(row[1][2], column[1][2]);

  for(let i =0; i < row.length; i++){
    for(let j = 0; j < row[i].length; j++){
      console.log(row[i][j]);
    }
  for (let x = 0; x < column.length; x++){
    for(let y = 0; y < column[x].length; y++){
      console.log(column[x][y]);
    }
  }
  }*/
//possible answer 3
function matrix(newRow, newCol, fill){
    let grid = [];
    for(let i = 0; i < newRow; i++){
      let secondCol = [];
      for(let j = 0; j < newCol; j++){
        secondCol[j] = fill;
      }
      grid[i] = secondCol;
      }
      return grid;
  }
  let my2DMatrix = matrix(8,8, 10);
  console.log(my2DMatrix[3][3]);


