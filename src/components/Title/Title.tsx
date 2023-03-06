import { Text } from 'react-native'
import React, { FC } from 'react'

interface TitleProps {
	title: string
}

export const Title: FC<TitleProps> = ({ title }) => {
	return (
		<Text className='text-5xl  text-blueDark font-robotoBold '>{title}</Text>
	)
}
