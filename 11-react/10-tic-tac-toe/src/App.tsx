// import { useState } from "react"

// function App() {
//   const [boxes, setBoxes] = useState<(string | null)[]>(new Array(9).fill(null))
//   const [current, setCurrent] = useState<"X" | "O">()
//   const [turn, setTurn] = useState<number>(0)
//   const [check, setCheck] = useState<number>(0)



//   const wins: number[][] = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 6], [0, 4, 8], [2, 4, 6]];

//   const checkWin = (player: string): boolean => {

//     const result = wins.some((win) =>
//       boxes[win[0]] === player &&
//       boxes[win[1]] === player &&
//       boxes[win[2]] === player,
//       setCheck(prev => prev + 1)
//     )

//     if (!result) {
//       checkDraw()
//     }
//     return true
//   }
//   const checkDraw = (): boolean => {
//     if (check >= 8) return true
//     return false
//   }

//   const handleClick = (idx: number) => {
//     if (!current) return
//     if (turn === 9) return
//     if (boxes[idx]) return
//     console.log("idx", idx)
//     console.log(current)
//     console.log(turn)
//     if (turn >= 8) return
//     setBoxes(prev => {
//       const newBoxes = [...prev]
//       newBoxes[idx] = current
//       return newBoxes
//     })
//     checkWin(current)
//     if (!checkWin(current))
//       setTurn(prev => prev + 1)
//     setCurrent(prev => (prev === "X" ? "O" : "X"))
//   }

//   return (
//     <>
//       <div>
//         <h1>Choose to Start with</h1>
//         <div className="flex" ><button className="m-2 p-2" onClick={() => setCurrent("X")}>X</button><button className="m-2 p-2" onClick={() => setCurrent("O")}>O</button></div>
//       </div>
//       <div className="flex flex-col items-center justify-center h-screen">
//         <div className="grid grid-cols-3 gap-0 w-fit items-center justify-center">
//           {boxes.map((box, i) => (
//             <div onClick={() => handleClick(i)} key={i} className="h-20 w-20 flex items-center justify-center border border-black">{box}</div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
import { useState } from "react"

function App() {
  const [boxes, setBoxes] = useState<(string | null)[]>(new Array(9).fill(null))
  const [current, setCurrent] = useState<"X" | "O">()
  const [winner, setWinner] = useState<string | null>(null)
  const [draw, setDraw] = useState(false)

  const wins: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const checkWin = (board: (string | null)[], player: string): boolean => {
    return wins.some(
      ([a, b, c]) =>
        board[a] === player && board[b] === player && board[c] === player
    )
  }

  const handleClick = (idx: number) => {
    if (!current) return
    if (winner || draw) return
    if (boxes[idx]) return

    const newBoxes = [...boxes]
    newBoxes[idx] = current

    setBoxes(newBoxes)

    if (checkWin(newBoxes, current)) {
      setWinner(current)
      return
    }

    if (newBoxes.every(box => box !== null)) {
      setDraw(true)
      return
    }

    setCurrent(current === "X" ? "O" : "X")
  }

  const resetGame = () => {
    setBoxes(new Array(9).fill(null))
    setCurrent(undefined)
    setWinner(null)
    setDraw(false)
  }

  return (
    <>
      <div>
        <h1>Choose to Start with</h1>

        <div className="flex">
          <button className="m-2 p-2" onClick={() => setCurrent("X")}>
            X
          </button>
          <button className="m-2 p-2" onClick={() => setCurrent("O")}>
            O
          </button>
        </div>

        {current && !winner && !draw && <h2>Current Turn: {current}</h2>}
        {winner && <h2>Winner: {winner}</h2>}
        {draw && <h2>Draw!</h2>}

        <button className="m-2 p-2" onClick={resetGame}>
          Reset
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="grid grid-cols-3 gap-0 w-fit">
          {boxes.map((box, i) => (
            <div
              onClick={() => handleClick(i)}
              key={i}
              className="h-20 w-20 flex items-center justify-center border border-black text-3xl cursor-pointer"
            >
              {box}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App