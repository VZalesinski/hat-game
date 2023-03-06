import React from 'react'
import type { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MyButton } from '@components/index'

interface NavType {
	navigate: (value: string) => void
}

export const ToSettings: FC = () => {
	const { navigate } = useNavigation<NavType>()

	return (
		<TouchableOpacity
			onPress={() => {
				navigate('Settings')
			}}
		>
			<MyButton text='Далее' />
		</TouchableOpacity>
	)
}
