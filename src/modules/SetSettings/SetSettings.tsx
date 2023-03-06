import React, { useState } from 'react'
import type { FC } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MyButton, SliderRange } from '@components/index'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import {
	setGameTimer,
	setPlayersInTeam,
	setWordsPerPlayer
} from '@store/gameSlice'

interface NavType {
	navigate: (value: string) => void
}

export const SetSettings: FC = () => {
	const initialPlayers = useAppSelector(state => state.game.players)
	const initialWords = useAppSelector(state => state.game.wordsPerPlayer)
	const initialTimer = useAppSelector(state => state.game.timer)

	const [players, setPlayers] = useState(initialPlayers)
	const [words, setWords] = useState(initialWords)
	const [timer, setTimer] = useState(initialTimer)

	const { navigate } = useNavigation<NavType>()

	const dispatch = useAppDispatch()

	const goToNextPage = () => {
		navigate('AddingWords')
		dispatch(setPlayersInTeam(players))
		dispatch(setWordsPerPlayer(words))
		dispatch(setGameTimer(timer))
	}

	return (
		<View className='  py-5 mb-5 '>
			<SliderRange
				classNames='mb-5'
				text='Игроков в команде'
				value={players}
				setValue={setPlayers}
				minValue={2}
				maxValue={10}
				step={1}
			/>

			<SliderRange
				classNames='mb-5'
				text='Слова на человека'
				value={words}
				setValue={setWords}
				minValue={1}
				maxValue={20}
				step={1}
			/>

			<SliderRange
				classNames='mb-10'
				text='Время на раунд (сек.)'
				value={timer}
				setValue={setTimer}
				minValue={10}
				maxValue={100}
				step={10}
			/>

			<TouchableOpacity onPress={goToNextPage}>
				<MyButton text='Далее' />
			</TouchableOpacity>
		</View>
	)
}
