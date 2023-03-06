import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RoundType {
  name: string,
  description: string,
  ban: string,
  completed: boolean,
  id: number
}

export type RoundsState = {
  allRounds: RoundType[]
}


const initialState: RoundsState = {
  allRounds: [
    {
      name: 'Alias',
      description: 'Надо суметь объяснить другими словами разгадываемое слово.',
      ban: 'Использовать однокоренные слова и иностранные аналоги слова, написанного на карточке.',
      completed: false,
      id: 0,
    },
    {
      name: 'Крокодил',
      description: 'При помощи мимики, жестов или танцев показать своим товарищам задуманное слово.',
      ban: 'Издавать звуки, говорить.',
      completed: false,
      id: 1
    },
    {
      name: 'Блицкриг',
      description: 'Объяснить слово ОДНИМ словом. В раундах дается на половну меньше времени, чем в предыдущих этапах. Команда может обсуждать в слух предположения. Если окончательный ответ был неверным, раунд завершается.',
      ban: 'Использование словосочетаний однокоренных слов, явное указывание на предмет который отгадывают, перевод с иностранных слов.',
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
    }
  },
})

export const { resetRounds, toggleComplete } = roundsSlice.actions

export default roundsSlice.reducer