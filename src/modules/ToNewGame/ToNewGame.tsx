import { TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { MyButton } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '@hooks/index'
import { resetGame } from '@store/gameSlice'
import { resetRounds } from '@store/roundsSlice'
import { resetTeam } from '@store/teamsSlice'
import { resetWords } from '@store/wordsSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface NavType {
	navigate: (value: string) => void
}

export const ToNewGame: FC = () => {
	const { navigate } = useNavigation<NavType>()
	const dispatch = useAppDispatch()

	const onButtonPress = () => {
		dispatch(resetGame())
		dispatch(resetRounds())
		dispatch(resetTeam())
		dispatch(resetWords())
		const removeAll = async () => {
			const keys = [
				'@timer',
				'@round-words1',
				'@round-words2',
				'@round-words3',
				'@round1',
				'@round2',
				'@round3',
				'@teams'
			]
			try {
				await AsyncStorage.multiRemove(keys)
			} catch (e) {
				// remove error
			}
		}
		removeAll()
		navigate('NewGame')
	}
	return (
		<TouchableOpacity onPress={() => onButtonPress()}>
			<MyButton text='Новая игра' />
		</TouchableOpacity>
	)
}
