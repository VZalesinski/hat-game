import { TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { MyButton } from '@components/index'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '@hooks/index'
import { resetGame } from '@store/gameSlice'
import { resetRounds } from '@store/roundsSlice'
import { resetTeam } from '@store/teamsSlice'
import { resetWords } from '@store/wordsSlice'

interface NavType {
	navigate: (value: string) => void
}

export const ToNewGame: FC = () => {
	const { navigate } = useNavigation<NavType>()
	const dispatch = useAppDispatch()
	return (
		<TouchableOpacity
			onPress={() => {
				dispatch(resetGame())
				dispatch(resetRounds())
				dispatch(resetTeam())
				dispatch(resetWords())
				navigate('NewGame')
			}}
		>
			<MyButton text='Новая игра' />
		</TouchableOpacity>
	)
}
