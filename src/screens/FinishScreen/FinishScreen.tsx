import React from 'react'
import type { FC } from 'react'
import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'router/RootNavigator'
import { useAppSelector } from '@hooks/index'
import { selectTeamWithHighestScore } from '@store/teamsSlice'
import { FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import { MyButton } from '@components/index'

type FinishScreenProps = NativeStackScreenProps<RootStackParamList, 'Finish'>

export const FinishScreen: FC<FinishScreenProps> = ({ navigation }) => {
	const teamsState = useAppSelector(state => state)
	const winnerTeam = selectTeamWithHighestScore(teamsState)

	return (
		<View className='bg-whiteMain h-full px-5 pt-14 pb-7 justify-center'>
			<Text className='text-4xl font-bold text-blueDark text-center mb-10'>
				Победители:
			</Text>
			<View className='items-center mb-20'>
				{winnerTeam !== 'draw' ? (
					<FontAwesome5 name='crown' size={50} color='#074F57' />
				) : (
					<SimpleLineIcons name='emotsmile' size={50} color='black' />
				)}
				<Text className='text-3xl font-bold text-blueDark text-center mt-5'>
					{winnerTeam !== 'draw' ? winnerTeam.title : 'Победила дружба'}
				</Text>
			</View>
			<TouchableOpacity
				onPress={() =>
					navigation.reset({
						index: 0,
						routes: [{ name: 'Home' }]
					})
				}
				className='w-full '
			>
				<MyButton text='На главную' />
			</TouchableOpacity>
		</View>
	)
}
