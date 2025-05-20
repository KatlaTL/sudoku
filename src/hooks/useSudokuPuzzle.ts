import { useQuery } from "@tanstack/react-query";
import { getSudoku } from "../api/sudokuApi"
import { useEffect } from "react";
import { useSudokuContext } from "../context/sudokuContext";

export const useSudokuPuzzle = async () => {
    const sudokuContext = useSudokuContext();

    const sudokuQuery = useQuery({
        queryKey: ["sudoku"],
        queryFn: getSudoku
    });

    useEffect(() => {
        if (sudokuQuery.isSuccess && sudokuQuery.data) {
            console.log(sudokuQuery)
            sudokuContext.actionDispatch?.setInitialSudokuState(sudokuQuery.data);
        }
        
    }, [sudokuQuery.data])

    return await getSudoku();
}