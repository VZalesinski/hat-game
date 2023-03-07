import React from 'react'
import type { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MyButton } from '@components/index'
import { useAppSelector } from '@hooks/index'

interface NavType {
	navigate: (value: string) => void
}

export const ToContinueGame: FC = () => {
	const { navigate } = useNavigation<NavType>()
	const isContinueGame = useAppSelector(state => state.game.continueGame)

	return isContinueGame ? (
		<TouchableOpacity onPress={() => navigate('Score')}>
			<MyButton text='Продолжить' />
		</TouchableOpacity>
	) : (
		<TouchableOpacity disabled={true}>
			<MyButton text='Продолжить' fill borderColor='border-orange' />
		</TouchableOpacity>
	)
}
