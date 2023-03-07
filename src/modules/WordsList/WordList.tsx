import React from 'react'
import type { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { MyButton, WordItem } from '@components/index'
import { WordsModal } from '../WordsModal/WordsModal'
import { useNavigation } from '@react-navigation/native'
import { setContinueGame } from '@store/gameSlice'

interface NavType {
	navigate: (value: string) => void
}

export const WordsList: FC = () => {
	const { navigate } = useNavigation<NavType>()
	const dispatch = useAppDispatch()
	const allWords = useAppSelector(state => state.words.allWords)
	const players = useAppSelector(state => state.game.players)
	const teams = useAppSelector(state => state.teams.teams)
	const wordsPerPlayer = useAppSelector(state => state.game.wordsPerPlayer)

	const allPlayers = () => {
		const resultLength = players * teams.length
		let result = []
		let counter = 1
		for (let i = 0; i < resultLength; i++) {
			result.push(counter)
			counter++
		}
		return result
	}
	const pronunciation =
		wordsPerPlayer === 1
			? 'слово'
			: wordsPerPlayer > 1 && wordsPerPlayer < 5
			? 'слова'
			: 'слов'

	const isDisabled =
		allWords && allWords.length === players * teams.length * wordsPerPlayer
			? false
			: true
	return (
		<>
			<View className='pt-5'>
				{isDisabled && (
					<Text className='text-center font-roboto text-lg text-whiteMain mb-5'>
						Каждый игрок должен добавить {wordsPerPlayer} {pronunciation}
					</Text>
				)}
			</View>

			<ScrollView className='px-2'>
				<View>
					{allPlayers().map(item => (
						<WordsModal key={item} player={item} classNames='mb-5' />
					))}
				</View>
			</ScrollView>
			<TouchableOpacity
				className='mt-5'
				disabled={isDisabled}
				onPress={() => {
					dispatch(setContinueGame())
					navigate('Score')
				}}
			>
				<MyButton
					text='Начать'
					fill={isDisabled}
					borderColor={isDisabled ? 'border-orange' : ''}
				/>
			</TouchableOpacity>
		</>
	)
}
