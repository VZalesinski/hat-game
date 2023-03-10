import React from 'react'
import type { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MyButton } from '@components/index'
import { useAppSelector } from '@hooks/index'

interface NavType {
	navigate: (value: string) => void
}

export const ToSettings: FC = () => {
	const { navigate } = useNavigation<NavType>()
	const teams = useAppSelector(state => state.teams.teams)

	return (
		<TouchableOpacity
			disabled={teams.length <= 1}
			onPress={() => {
				navigate('Settings')
			}}
		>
			<MyButton
				text='Далее'
				fill={teams.length <= 1}
				borderColor={teams.length <= 1 ? 'border-orange' : ''}
			/>
		</TouchableOpacity>
	)
}
