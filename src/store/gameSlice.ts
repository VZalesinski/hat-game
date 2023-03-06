import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface RoundType {
  name: string,
  description: string,
  ban: string,
  guessedWords: string[] | [],
  completed: boolean
}

export interface GameState {
  players: number,
  wordsPerPlayer: number,
  timer: number,


}

const initialState: GameState = {
  players: 5,
  wordsPerPlayer: 5,
  timer: 60,
}


export const gameSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setPlayersInTeam: (state, action: PayloadAction<number>) => {
      state.players = action.payload
    },
    setWordsPerPlayer: (state, action: PayloadAction<number>) => {
      state.wordsPerPlayer = action.payload
    },
    setGameTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload
    },
    resetGame() {
      return {
        ...initialState
      }
    }
  },
})

export const { setPlayersInTeam, setGameTimer, setWordsPerPlayer, resetGame } = gameSlice.actions

export default gameSlice.reducer