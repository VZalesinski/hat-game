import React, { FC, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useAppDispatch } from '@hooks/index'
import { addTeam } from '@store/teamsSlice'

interface TeamInputFieldProps {
	classNames?: string
}

export const TeamInputField: FC<TeamInputFieldProps> = ({ classNames }) => {
	const [text, setText] = useState('')
	const dispatch = useAppDispatch()

	const addNewTeam = () => {
		if (text.trim().length) dispatch(addTeam(text))

		setText('')
	}

	return (
		<View className={`flex-row items-center ${classNames}`}>
			<View className='basis-4/5'>
				<TextInput
					value={text}
					maxLength={20}
					placeholder='Новая команда'
					onChangeText={value => setText(value)}
					selectionColor='#424B54'
					className={`text-xl font-robotoBold bg-blueLight rounded-lg py-2 px-5 box-content`}
				/>
			</View>

			<TouchableOpacity className='py-2 px-5 box-content' onPress={addNewTeam}>
				<AntDesign name='pluscircle' size={32} color='#F18F01' />
			</TouchableOpacity>
		</View>
	)
}
