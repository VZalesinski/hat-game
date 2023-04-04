import React, { useState } from 'react'
import type { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

interface TimerProps {
	isCounting: boolean
	seconds: number
	classNames?: string
	handleStart: () => void
	handleStop: () => void
	buttonState: string
}

export const Timer: FC<TimerProps> = ({
	seconds,
	classNames,
	isCounting,
	handleStart,
	handleStop,
	buttonState
}) => {
	return (
		<View className={`flex-row items-center justify-between ${classNames}`}>
			<View className='flex-row items-center'>
				<Text className='text-lg font-roboto text-blueDark'>Время:</Text>
				<View className='mx-3 p-2 bg-blueLight rounded-lg'>
					<Text
						className={`text-3xl font-robotoBold ${
							seconds <= 5 ? 'text-redLight' : 'text-black'
						}`}
					>
						{seconds}
					</Text>
				</View>
				<Text className='text-lg font-roboto text-blueDark'>сек.</Text>
			</View>

			{isCounting ? (
				<TouchableOpacity
					className={`p-2 ${seconds === 0 ? 'opacity-40' : ''}`}
					disabled={seconds === 0}
					onPress={handleStop}
				>
					<FontAwesome name='stop-circle-o' size={30} color='#F18F01' />
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					disabled={buttonState === 'start'}
					className={`p-2 ${buttonState === 'start' ? 'opacity-40' : ''}`}
					onPress={handleStart}
				>
					<AntDesign name='play' size={30} color='#F18F01' />
				</TouchableOpacity>
			)}
		</View>
	)
}
