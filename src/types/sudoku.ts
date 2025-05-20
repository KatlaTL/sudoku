export type SudokuBoard = number[][];

export interface SudokuQueryResponse {
    newboard: {
        grids: {
            value: number[][];
            solution: number[][];
            difficulty: string;
        }[]
    }
}