import { View, Text } from 'react-native'
import React, { FC } from 'react'

interface MyButtonProps {
	text: string
	fill?: boolean
	stylesText?: string
	stylesView?: string
	borderColor?: string
	bgColor?: string
	textColor?: string
}

export const MyButton: FC<MyButtonProps> = ({
	text,
	fill = false,
	stylesText,
	stylesView,
	borderColor,
	bgColor,
	textColor
}) => {
	return (
		<View
			className={` rounded-full py-3 w-full shadow-2xl ${
				fill
					? `bg-transparent ${borderColor} border-2 opacity-70`
					: bgColor
					? bgColor
					: 'bg-orange'
			} ${stylesView}`}
		>
			<Text
				className={`text-center text-2xl font-roboto ${
					fill ? 'text-orange' : textColor ? textColor : 'text-white'
				} ${stylesText}`}
			>
				{text}
			</Text>
		</View>
	)
}
