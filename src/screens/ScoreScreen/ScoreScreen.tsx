import React, { useEffect, useLayoutEffect } from 'react'
import type { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RootStackParamList } from 'router/RootNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScoreModule } from '@modules/index'
import { MyButton } from '@components/index'
import { useAppSelector } from '@hooks/index'
import { BackHandler } from 'react-native'

type ScoreScreenProps = NativeStackScreenProps<RootStackParamList, 'Score'>

export const ScoreScreen: FC<ScoreScreenProps> = ({ navigation }) => {
	// useEffect(() => {
	// 	const disableBackButtonAndGesture = () => true
	// 	BackHandler.addEventListener(
	// 		'hardwareBackPress',
	// 		disableBackButtonAndGesture
	// 	)

	// 	const removeBeforeRemoveListener = navigation.addListener(
	// 		'beforeRemove',
	// 		e => {
	// 			e.preventDefault()
	// 		}
	// 	)

	// 	return () => {
	// 		BackHandler.removeEventListener(
	// 			'hardwareBackPress',
	// 			disableBackButtonAndGesture
	// 		)
	// 		removeBeforeRemoveListener()
	// 	}
	// }, [navigation])

	const isGameFinished = useAppSelector(state =>
		state.rounds.allRounds.every(round => round.completed === true)
	)

	return (
		<View className='bg-blueLight h-full px-5 pt-14 pb-7'>
			<View className='justify-center items-center gap-3 mb-5'>
				<Text className='text-5xl font-robotoBold text-blueDark'>Счёт</Text>
				<MaterialCommunityIcons name='counter' size={55} color='#074F57' />
			</View>

			<ScoreModule />

			<TouchableOpacity
				onPress={() =>
					isGameFinished
						? navigation.navigate('Finish')
						: navigation.navigate('Round')
				}
			>
				<MyButton text='Далее' />
			</TouchableOpacity>
		</View>
	)
}
