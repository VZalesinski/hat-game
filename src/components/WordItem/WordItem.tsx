import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useAppDispatch } from '@hooks/index'
import { deleteWord, wordType } from '@store/wordsSlice'

interface WordItemProps {
	words: wordType[]
	setWords: any
	text: string
	id: string
	classNames?: string
	icon?: boolean
	counter: number
	setCounter: (arg: number) => void
}

export const WordItem: FC<WordItemProps> = ({
	text,
	classNames,
	id,
	words,
	setWords,
	counter,
	setCounter
}) => {
	const [visible, setVisible] = useState(false)

	const dispatch = useAppDispatch()

	const icon = visible ? 'visibility' : 'visibility-off'

	const hideText = () => {
		let hidden = ''
		for (let i = 0; i < text.length; i++) {
			hidden += '*'
		}

		return hidden
	}
	const isShowWord = visible ? text : hideText()
	const onDelete = () => {
		setWords(words.filter(item => item.id !== id))
		dispatch(deleteWord(id))
		setCounter(counter - 1)
	}

	return (
		<View
			className={`bg-blueLight rounded-lg py-2 pl-5 mb-3 box-content flex-row justify-between items-center ${classNames}`}
		>
			<Text className='text-xl font-robotoBold text-black'>{isShowWord}</Text>
			<View className='flex-row'>
				<TouchableOpacity
					className='box-content py-2 px-5 mr-4'
					onPress={() => setVisible(!visible)}
				>
					<MaterialIcons name={icon} size={20} color='#074F57' />
				</TouchableOpacity>

				<TouchableOpacity className='box-content py-2 px-5' onPress={onDelete}>
					<AntDesign name='delete' size={20} color='#074F57' />
				</TouchableOpacity>
			</View>
		</View>
	)
}
