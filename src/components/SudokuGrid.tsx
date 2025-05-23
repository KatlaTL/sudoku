import { SudokuCell } from "./SudokuCell";

type SudokuGridProps = {
    cellValues: number[];
}

export const SudokuGrid = ({ cellValues }: SudokuGridProps) => {

    return (
        <div className="sudokuGrid">
            {cellValues.map(value => (
                <SudokuCell value={value} />
            ))}
        </div>
    )
}