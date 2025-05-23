import { SudokuQueryResponse } from "../types/sudoku";
import axiosClient from "./axiosClient";

const SUDOKU_URL = "https://sudoku-api.vercel.app/api/dosuku";

export const getSudoku = async () => {
    try {
        const response = await axiosClient.get<SudokuQueryResponse>(SUDOKU_URL);
        
        return response.data
    } catch (error) {
        throw error;
    }
}