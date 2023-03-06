import React from 'react'
import type { FC } from 'react'

import { View, Text } from 'react-native'
import Slider from '@react-native-community/slider'

interface SliderRangeProps {
	text: string
	value: number
	setValue: (arg: number) => void
	minValue: number
	maxValue: number
	step: number
	classNames?: string
}

export const SliderRange: FC<SliderRangeProps> = ({
	text,
	value,
	setValue = (arg: number) => {},
	minValue,
	maxValue,
	step,
	classNames
}) => {
	return (
		<View
			className={`bg-blueLight rounded-lg py-2 px-5 box-content ${classNames}`}
		>
			<View className='flex-row justify-between mb-4 items-center'>
				<Text className='text-lg font-roboto text-black'>{text}</Text>
				<Text className='text-xl font-robotoBold text-black'>{value}</Text>
			</View>
			<Slider
				style={{ width: '100%', height: 30 }}
				minimumValue={minValue}
				maximumValue={maxValue}
				value={value}
				onValueChange={value => setValue(value)}
				step={step}
				minimumTrackTintColor={'#074F57'}
				thumbTintColor={'#074F57'}
			/>
		</View>
	)
}
