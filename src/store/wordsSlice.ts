import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface wordType {
  text: string,
  id: string,
}

export interface WordsState {
  allWords: wordType[] | null,
  roundWords1: wordType[] | null,
  roundWords2: wordType[] | null,
  roundWords3: wordType[] | null,

}


const initialState: WordsState = {
  allWords: [],
  roundWords1: [],
  roundWords2: [],
  roundWords3: []
}

const storeData = async (key: string, value: wordType[]) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<wordType>) => {
      if (state.allWords && state.roundWords1 && state.roundWords2 && state.roundWords3) {
        state.allWords.push({
          text: action.payload.text,
          id: action.payload.id
        })

        state.roundWords1.push({
          text: action.payload.text,
          id: action.payload.id
        })

        state.roundWords2.push({
          text: action.payload.text,
          id: action.payload.id
        })

        state.roundWords3.push({
          text: action.payload.text,
          id: action.payload.id
        })
        storeData('@round-words1', state.roundWords1)
        storeData('@round-words2', state.roundWords2)
        storeData('@round-words3', state.roundWords3)
      }
    },

    deleteWord: (state, action: PayloadAction<string>) => {
      if (state.allWords && state.roundWords1 && state.roundWords2 && state.roundWords3) {
        state.allWords = state.allWords.filter(item => item.id !== action.payload)
        state.roundWords1 = state.roundWords1.filter(item => item.id !== action.payload)
        state.roundWords2 = state.roundWords2.filter(item => item.id !== action.payload)
        state.roundWords2 = state.roundWords3.filter(item => item.id !== action.payload)
        storeData('@round-words1', state.roundWords1)
        storeData('@round-words2', state.roundWords2)
        storeData('@round-words3', state.roundWords3)
      }
    },

    addGuessedWord1: (state, action: PayloadAction<string>) => {
      if (state.roundWords1) state.roundWords1 = state.roundWords1.filter(item => item.id !== action.payload)
      if (state.roundWords1) storeData('@round-words1', state.roundWords1)
    },

    addGuessedWord2: (state, action: PayloadAction<string>) => {
      if (state.roundWords2) state.roundWords2 = state.roundWords2.filter(item => item.id !== action.payload)
      if (state.roundWords2) storeData('@round-words2', state.roundWords2)
    },

    addGuessedWord3: (state, action: PayloadAction<string>) => {
      if (state.roundWords3) state.roundWords3 = state.roundWords3.filter(item => item.id !== action.payload)
      if (state.roundWords3) storeData('@round-words3', state.roundWords3)
    },
    resetWords() {
      const removeValues = async () => {
        try {
          await AsyncStorage.multiRemove(['round-words1', 'round-words2', 'round-words3'])
        } catch (e) {
          // console.log(e)
        }
      }
      removeValues()

      return {
        ...initialState
      }
    }
  },
})

export const { addWord, deleteWord, resetWords, addGuessedWord1, addGuessedWord2, addGuessedWord3 } = wordsSlice.actions

export default wordsSlice.reducer