import { useState } from "react";
import Cell from "./Cell";

const Board = ({ nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 }) =>{

  
  const [lit, setlit] = useState(createBoard())
  let tblBoard = [];

  function createBoard() {
    let initialBoard = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(null);
      }
      initialBoard.push(row);
    }
    console.log(initialBoard)
    return initialBoard;
  }

  const changeColor = (coo)=>{
    setlit(lit =>{
    console.log('hey')
    const [y, x] = coo.split("-").map(Number);
    console.log(x)
    console.log(y)
    const classes = tbBoard[x][y]

   
    console.log(tbBoard[x].props.children[y])
    const element = tbBoard[x].props.children[y]
    console.log(tbBoard[x].props.children[y].props.is)
    // const stat = tbBoard[x].props.children[y].props.is =='x'? 'y' : 'x';
    const stat = !tbBoard[x].props.children[y].props.isLit? true : false;
    // tbBoard[x].props.children[y].props.isLit = stat
    console.log(stat)
    console.log(element)
    // if(tbBoard[x].props.children[y].props.is =='x'){
    //   console.log('MAKAAAAAAAAAAARAAANAAAAAAAA')
    // }
    // `Cell ${isLit ? "Cell-lit" : ""}`;
    return stat
   
    }
    )
  }

  
  let tbBoard = [];
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`;
    
      row.push(
        <Cell
          key={coord}
          isLit={false}
          changeColor={() => changeColor(coord)}
        />
      );
    }
    tbBoard.push(<tr key={y}>{row}</tr>);
  }
  console.log(tbBoard)

      
  return (
    <table className="Board">
      <tbody>{tbBoard}</tbody>
   
    </table>
  )

}

export default Board