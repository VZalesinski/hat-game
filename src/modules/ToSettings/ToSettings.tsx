import React from 'react'
import type { FC } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MyButton } from '@components/index'
import { useAppSelector } from '@hooks/index'

interface NavType {
	navigate: (value: string) => void
}

export const ToSettings: FC = () => {
	const { navigate } = useNavigation<NavType>()
	const teams = useAppSelector(state => state.teams.teams)

	return teams.length <= 1 ? (
		<Text className='text-center text-whiteMain text-xl opacity-60'>
			Для игры нужно минимум 2 команды
		</Text>
	) : (
		<TouchableOpacity
			onPress={() => {
				navigate('Settings')
			}}
		>
			<MyButton text='Далее' />
		</TouchableOpacity>
	)
}
