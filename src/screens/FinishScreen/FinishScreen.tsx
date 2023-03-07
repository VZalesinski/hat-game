import React from 'react'
import type { FC } from 'react'
import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'router/RootNavigator'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { selectTeamWithHighestScore } from '@store/teamsSlice'
import { FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import { MyButton } from '@components/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { resetGame } from '@store/gameSlice'
import { resetRounds } from '@store/roundsSlice'
import { resetTeam } from '@store/teamsSlice'
import { resetWords } from '@store/wordsSlice'

type FinishScreenProps = NativeStackScreenProps<RootStackParamList, 'Finish'>

export const FinishScreen: FC<FinishScreenProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()

	const teamsState = useAppSelector(state => state)
	const winnerTeam = selectTeamWithHighestScore(teamsState)

	const onStartPage = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }]
		})
		const removeAll = async () => {
			dispatch(resetGame())
			dispatch(resetRounds())
			dispatch(resetTeam())
			dispatch(resetWords())
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
	}
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
			<TouchableOpacity onPress={() => onStartPage()} className='w-full '>
				<MyButton text='На главную' />
			</TouchableOpacity>
		</View>
	)
}
