import React, { FC, useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useAppDispatch } from '@hooks/index'
import { addWord, wordType } from '@store/wordsSlice'

interface WordInputFieldProps {
	counter: number
	setCounter: (arg: number) => void
	classNames?: string
	words: wordType[]
	setWords: (arg: wordType[]) => void
	limit: number
}

export const WordInputField: FC<WordInputFieldProps> = ({
	classNames,
	counter,
	setCounter,
	words,
	setWords,
	limit
}) => {
	const [text, setText] = useState('')
	const [id, setId] = useState(`${new Date().toISOString()}`)
	const dispatch = useAppDispatch()

	const addNewTeam = () => {
		if (text.trim().length) {
			dispatch(addWord({ text: text, id: id }))
			setCounter(counter + 1)
			setWords([...words, { text: text, id: id }])
			setId(id + 1)
		}

		setText('')
	}

	const isDisabled = counter >= limit ? true : false

	return (
		<View className={`flex-row items-center ${classNames}`}>
			<View className='basis-4/5'>
				<TextInput
					value={text}
					maxLength={20}
					placeholder='Новое слово'
					onChangeText={value => setText(value)}
					selectionColor='#424B54'
					className={`text-xl font-robotoBold bg-blueLight rounded-lg py-2 px-5 box-content`}
				/>
			</View>

			<TouchableOpacity
				disabled={isDisabled}
				className={`py-2 px-5 box-content ${isDisabled ? 'opacity-40' : ''}`}
				onPress={addNewTeam}
			>
				<AntDesign name='pluscircle' size={32} color='#F18F01' />
			</TouchableOpacity>
		</View>
	)
}
