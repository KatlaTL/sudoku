type SudokuCellProps = {
    value: number
}

export const SudokuCell = ({ value }: SudokuCellProps) => {

    return (
        <div className="sudokuCell">
            <p className="sudokuCellValue">{value}</p>
        </div>
    )
}