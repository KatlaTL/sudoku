import { useEffect } from "react";
import { useSudokuPuzzle } from "../hooks/useSudokuPuzzle";
import { SudokuGrid } from "./SudokuGrid";

type SudokuBoardProps = {

}

export const SudokuBoard = ({ }: SudokuBoardProps) => {
    const { sudokuState, isLoaded, sudokuSolution, loadSudoku } = useSudokuPuzzle();

    useEffect(() => loadSudoku(), []); // Move this some place else

    console.log(sudokuState)
    if (!isLoaded) return <p>Loading Sudoku...</p>;


    const grids = sudokuSolution!;

    return (
        <div className="sudokuBoard">
            {grids.map((grid) => (
                <SudokuGrid cellValues={grid} />
            ))}
        </div>
    )
}