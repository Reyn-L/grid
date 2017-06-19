/*jshint esversion: 6*/
function matrix(newRow, newCol, fill){
    let grid = [];
    for(let i = 0; i < newRow; i++){
      grid.push([]);

    for(let j = 0; j < newCol; j++){
      grid[i].push([fill]);
      }
      }
      return grid;
  }

  console.log(matrix(10,5,0));

  //made fixes after seeing


