import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import type { FC } from 'react'
import { RootStackParamList } from 'router/RootNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { TeamInputField } from '@components/index'
import { TeamsList, ToSettings } from '@modules/index'
import { useAppDispatch } from '@hooks/index'
import { resetTeam } from '@store/teamsSlice'

type NewGameScreenProps = NativeStackScreenProps<RootStackParamList, 'NewGame'>

export const NewGameScreen: FC<NewGameScreenProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()
	return (
		<View className='bg-blueDark h-full px-5 pt-32 pb-7'>
			<TouchableOpacity
				className='w-max absolute z-50 top-3 left-3 p-3'
				onPress={() => {
					dispatch(resetTeam())
					navigation.goBack()
				}}
			>
				<Ionicons name='arrow-back-circle' size={32} color='#F18F01' />
			</TouchableOpacity>

			<View className='justify-center items-center gap-3 mb-5'>
				<AntDesign name='team' size={24} color='#E1F2FE' />
				<Text className='text-xl font-robotoBold text-whiteMain'>Команды</Text>
			</View>

			<TeamInputField classNames='mb-5' />

			<TeamsList />

			<ToSettings />
		</View>
	)
}
