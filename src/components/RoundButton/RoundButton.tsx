import React from 'react'
import type { FC } from 'react'
import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'

interface RoundButtonProps {
	state: string
}

export const RoundButton: FC<RoundButtonProps> = ({ state }) => {
	let text = ''
	switch (state) {
		case 'start':
			text = 'Старт'
			break
		case 'action':
			text = 'Следующее слово'
			break
		case 'stop':
			text = 'Продолжить'
			break
		case 'end':
			text = 'Закончить раунд'
		default:
			''
	}

	return (
		<View className='w-full justify-center items-center  bg-orange py-6 rounded-full flex-row'>
			<Text className='text-lg mr-2 font-roboto'>{text}</Text>
			{state === 'start' && (
				<Entypo name='controller-play' size={24} color='black' />
			)}
			{state === 'action' && (
				<Entypo name='controller-next' size={24} color='black' />
			)}
			{state === 'stop' && (
				<Entypo name='controller-play' size={24} color='black' />
			)}
			{state === 'end' && <Entypo name='check' size={24} color='black' />}
		</View>
	)
}
