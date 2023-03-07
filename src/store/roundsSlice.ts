import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface RoundType {
  name: string,
  description: string,
  ban: string,
  completed: boolean,
  lifehack?: string,
  id: number
}

export type RoundsState = {
  allRounds: RoundType[]
}


const initialState: RoundsState = {
  allRounds: [
    {
      name: 'Alias',
      description: 'Команды играют по очереди. В свой ход один из участников команды должен словами объяснить как можно больше карточек. Отгадывают только участники играющей команды. Сбрасывать карточки обратно в шляпу нельзя, не сдавайтесь, проявляйте фантазию!',
      ban: 'Использование однокоренных слов и иностранных аналогов слов, написанных на карточках.',
      lifehack: 'Если вы не знаете слово, написанное на карточке, попробуйте объяснить его по частям или использовать созвучное слово.',
      completed: false,
      id: 0,
    },
    {
      name: 'Крокодил',
      description: 'Объяснить слово с помощью мимики и жестов.',
      ban: 'Издавать звуки, говорить, показывать буквы',
      completed: false,
      id: 1
    },
    {
      name: 'Блицкриг',
      description: 'Объяснить написанное на карточке одним словом. На этом этапе каждой команде дается в два раза меньше времени, чем на предыдущих. Играющая команда может обсуждать в слух предположения и озвучивать один вариант. Если окончательный ответ неверный, раунд автоматически завершается и ход переходит другой команде.',
      ban: 'Использовать словосочетания, однокоренные слова и иностранные аналоги слова, написанного на карточке.',
      completed: false,
      id: 2
    }
  ]
}



export const roundsSlice = createSlice({
  name: 'rounds',
  initialState,
  reducers: {
    resetRounds() {
      return {
        ...initialState
      }
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      state.allRounds[action.payload].completed = true
      const storeData = async (key: string, value: RoundType[]) => {
        try {
          await AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
          console.log(e)
        }
      }
      if (state.allRounds) storeData('@all-rounds', state.allRounds)

      // if (state.allRounds[action.payload].id === 0) storeData('@round1', state.allRounds[action.payload])

      // if (state.allRounds[action.payload].id === 1) storeData('@round2', state.allRounds[action.payload])

      // if (state.allRounds[action.payload].id === 2) storeData('@round2', state.allRounds[action.payload])
    }
  },
})

export const { resetRounds, toggleComplete } = roundsSlice.actions

export default roundsSlice.reducer