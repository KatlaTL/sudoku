import { useQuery } from "@tanstack/react-query";
import { getSudoku } from "../api/sudokuApi"
import { useEffect, useState } from "react";
import { useSudokuContext } from "../context/sudokuContext";

export const useSudokuPuzzle = () => {
    const sudokuContext = useSudokuContext();
    const [isLoadEnabled, setIsLoadEnabled] = useState<boolean>(false);

    const sudokuQuery = useQuery({
        queryKey: ["sudoku"],
        queryFn: getSudoku,
        enabled: isLoadEnabled
    });

    useEffect(() => {
        if (sudokuQuery.isSuccess && sudokuQuery.data) {
            sudokuContext.actionDispatch?.setInitialSudokuState(sudokuQuery.data);
            setIsLoadEnabled(false);
        }
        
    }, [sudokuQuery.data]);

    const loadSudoku = () => setIsLoadEnabled(true);

    const refreshSudoku = () => {
        setIsLoadEnabled(true);
        return sudokuQuery.refetch();
    }

    return {
        loadSudoku,
        refreshSudoku,
        ...sudokuContext
    }
}