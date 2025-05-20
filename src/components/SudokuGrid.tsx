import { SudokuCell } from "./SudokuCell";

type SudokuGridProps = {
    cellValues: number[];
}

export const SudokuGrid = ({ cellValues }: SudokuGridProps) => {

    

    const cells = Array.from({ length: 9 }, (_, index) => index + 1);

    return (
        <div className="sudokuGrid">
            {cells.map(value => (
                <SudokuCell value={value} />
            ))}
        </div>
    )
}