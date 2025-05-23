type SudokuCellProps = {
    value: number
}

export const SudokuCell = ({ value }: SudokuCellProps) => {

    return (
        <div className="sudokuCell">
            <p className="sudokuCellValue">{value === 0 ? "" : value}</p>
        </div>
    )
}