import React from 'react'
import type { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RootStackParamList } from 'router/RootNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { SetSettings } from '@modules/index'
import { useAppDispatch } from '@hooks/index'
import { resetGame } from '@store/gameSlice'

type SettingsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Settings'
>

export const SettingsScreen: FC<SettingsScreenProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()

	const onButtonPress = () => {
		dispatch(resetGame())
		navigation.goBack()
	}
	return (
		<View className='bg-blueDark h-full px-5 pt-32 pb-7'>
			<TouchableOpacity
				className='w-max absolute z-50 top-3 left-3 p-3'
				onPress={() => onButtonPress()}
			>
				<Ionicons name='arrow-back-circle' size={32} color='#F18F01' />
			</TouchableOpacity>

			<View className='justify-center items-center gap-3 mb-5'>
				<AntDesign name='setting' size={24} color='#E1F2FE' />

				<Text className='text-xl font-robotoBold text-whiteMain'>
					Настройки игры
				</Text>
			</View>

			<SetSettings />
		</View>
	)
}
