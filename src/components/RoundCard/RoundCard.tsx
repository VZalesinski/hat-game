import React from 'react'
import type { FC } from 'react'
import { View, Text } from 'react-native'
import { wordType } from '@store/wordsSlice'

interface RoundCardProps {
	StagePlaying: wordType[] | null
	text: string
	buttonState: string
}

export const RoundCard: FC<RoundCardProps> = ({
	buttonState,
	text,
	StagePlaying
}) => {
	return (
		<View className='h-1/3 max-w-sm w-full mx-auto bg-white justify-center items-center rounded-3xl px-2 border-2 border-orange'>
			{buttonState === 'action' && StagePlaying?.length !== 0 ? (
				<Text className='text-3xl font-caveat'>{text}</Text>
			) : (
				<Text className='text-2xl font-roboto'>Нажмите кнопку внизу</Text>
			)}
		</View>
	)
}
