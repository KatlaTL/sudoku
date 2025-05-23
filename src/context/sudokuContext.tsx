import { createContext, ReactNode, useContext, useReducer } from "react";
import { SudokuBoard, SudokuQueryResponse } from "../types/sudoku";

enum ActionTypes {
    SET_INITIAL_STATE = "SET_INITIAL_STATE",
    UPDATE_SUDOKU_STATE = "UPDATE_SUDOKU_STATE",
};

type ReducerActionType =
    { type: ActionTypes.SET_INITIAL_STATE, payload: { sudoku: SudokuQueryResponse } } |
    { type: ActionTypes.UPDATE_SUDOKU_STATE, payload: { board: SudokuBoard } };

type ReducerStateType = {
    sudokuState: SudokuBoard | null;
    sudokuSolution: SudokuBoard | null;
    difficulty: string | null;
};

interface SudokuContextI extends ReducerStateType {
    actionDispatch: {
        setInitialSudokuState: (sudoku: SudokuQueryResponse) => void;
        updateSudokuState: (board: SudokuBoard) => void;
    } | null,
    isLoaded: boolean;
};

const reducerInitialState: ReducerStateType = {
    sudokuState: null,
    sudokuSolution: null,
    difficulty: null

};

const contextInitialState: SudokuContextI = {
    sudokuState: reducerInitialState.sudokuState,
    sudokuSolution: reducerInitialState.sudokuSolution,
    difficulty: reducerInitialState.difficulty,
    isLoaded: false,
    actionDispatch: null
};

const SudokuContext = createContext<SudokuContextI>(contextInitialState);

const sudokuReducer = (state: ReducerStateType, action: ReducerActionType): ReducerStateType => {
    switch (action.type) {
        case ActionTypes.SET_INITIAL_STATE:
            return {
                ...state,
                sudokuState: [...action.payload.sudoku.newboard.grids[0].value],
                sudokuSolution: [...action.payload.sudoku.newboard.grids[0].solution],
                difficulty: action.payload.sudoku.newboard.grids[0].difficulty
            }
        case ActionTypes.UPDATE_SUDOKU_STATE:
            return {
                ...state // TO-DO Sudoku game logic here
            }
    }
};

export const SudokuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(sudokuReducer, reducerInitialState);

    const actionDispatch = {
        setInitialSudokuState: (sudoku: SudokuQueryResponse) => {
            dispatch({
                type: ActionTypes.SET_INITIAL_STATE,
                payload: {
                    sudoku
                }
            })
        },
        updateSudokuState: (board: SudokuBoard) => {
            dispatch({
                type: ActionTypes.UPDATE_SUDOKU_STATE,
                payload: {
                    board
                }
            })
        }
    } as SudokuContextI["actionDispatch"];

    return (
        <SudokuContext.Provider
            value={{
                isLoaded: state.sudokuState != null,
                sudokuState: state.sudokuState,
                actionDispatch: actionDispatch,
                difficulty: state.difficulty,
                sudokuSolution: state.sudokuSolution
            }}>
            {children}
        </SudokuContext.Provider>
    )
};

export const useSudokuContext = (): SudokuContextI => {
    const context = useContext(SudokuContext);
    if (!context) {
        throw new Error("useSudoku must be used within a SudokuProvider");
    }
    return context;
};