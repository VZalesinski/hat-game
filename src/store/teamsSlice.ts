import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface TeamType {
  title: string,
  id: string,
  score: number,
}

export type TeamsState = {
  teams: TeamType[],
  currentIndex: number,
}


const initialState: TeamsState = {
  teams: [
    { title: 'Бобры', id: `${new Date().toISOString()}`, score: 0 },
    { title: "Кабаны", id: `${new Date().toISOString() + 1}`, score: 0 }
  ],
  currentIndex: 0,
}

export const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam: (state, action: PayloadAction<string>) => {
      state.teams.push({
        title: action.payload,
        id: new Date().toISOString(),
        score: 0,
      })
      const storeData = async (value: TeamType[]) => {
        try {
          await AsyncStorage.setItem('@teams', JSON.stringify(value))
        } catch (e) {
          console.log(e)
        }
      }
      storeData(state.teams)
    },
    deleteTeam: (state, action: PayloadAction<string>) => {
      state.teams = state.teams.filter(item => item.id !== action.payload)
      const storeData = async (value: TeamType[]) => {
        try {
          await AsyncStorage.setItem('@teams', JSON.stringify(value))
        } catch (e) {
          console.log(e)
        }
      }
      storeData(state.teams)
    },
    resetTeam() {
      const removeValues = async () => {
        try {
          await AsyncStorage.removeItem('@team')
        } catch (e) {
          // console.log(e)
        }
      }
      removeValues()
      return {
        ...initialState
      }
    },
    addPoint: (state, action: PayloadAction<string>) => {
      const team = state.teams.find(element => element.id === action.payload)
      if (team) {
        team.score += 1
        const storeData = async (value: number) => {
          try {
            await AsyncStorage.setItem('@current-index', String(value))
          } catch (e) {
            console.log(e)
          }
        }
        storeData(state.currentIndex)
      }
    },
    updateCurrentIndex(state) {
      if (state.currentIndex === state.teams.length - 1) state.currentIndex = 0
      else state.currentIndex += 1
      const storeData = async (value: number) => {
        try {
          await AsyncStorage.setItem('@current-index', String(value))
        } catch (e) {
          console.log(e)
        }
      }
      storeData(state.currentIndex)
    }
  },
})

export const { addTeam, deleteTeam, resetTeam, addPoint, updateCurrentIndex } = teamsSlice.actions

export const selectTeams = (state: { teams: TeamsState }) => state.teams.teams;

export const selectTeamWithHighestScore = (state: { teams: TeamsState }) => {
  const teams = selectTeams(state);
  const highestScore = Math.max(...teams.map(team => team.score));
  const teamsWithHighestScore = teams.filter(team => team.score === highestScore);
  if (teamsWithHighestScore.length === 1) {
    return teamsWithHighestScore[0];
  } else {
    return 'draw';
  }
};

export default teamsSlice.reducer