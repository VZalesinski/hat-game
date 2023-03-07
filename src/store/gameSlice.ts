import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface GameState {
  players: number,
  wordsPerPlayer: number,
  timer: number,
  continueGame: boolean
}

const initialState: GameState = {
  players: 5,
  wordsPerPlayer: 5,
  timer: 60,
  continueGame: false
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
      const storeData = async (value: number) => {
        try {
          await AsyncStorage.setItem('@timer', String(value))
        } catch (e) {
          console.log(e)
        }
      }
      storeData(state.timer)
    },

    setContinueGame: (state) => {
      state.continueGame = true
    },

    resetGame() {
      const removeValue = async () => {
        try {
          await AsyncStorage.removeItem('@timer')
        } catch (e) {
          // console.log(e)
        }
      }
      removeValue()

      return {
        ...initialState
      }
    }
  },
})

export const { setPlayersInTeam, setGameTimer, setWordsPerPlayer, resetGame, setContinueGame } = gameSlice.actions

export default gameSlice.reducer