import { useSudokuPuzzle } from "../hooks/useSudokuPuzzle";
import { SudokuGrid } from "./SudokuGrid";

type SudokuBoardProps = {

}

export const SudokuBoard = ({ }: SudokuBoardProps) => {
    useSudokuPuzzle();

    // if (loading) return <p>Loading Sudoku...</p>;
    // if (error) return <p>Failed to fetch puzzle.</p>;
    // console.log(board)

    const grids = Array.from({ length: 9 }, (_, index) => index + 1);

    return (
        <div className="sudokuBoard">
            {grids.map(() => (
                <SudokuGrid cellValues={[]} />
            ))}
        </div>
    )
}