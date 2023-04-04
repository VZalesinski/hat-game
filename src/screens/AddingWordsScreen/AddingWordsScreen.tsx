import React from 'react'
import type { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RootStackParamList } from 'router/RootNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Ionicons, Octicons } from '@expo/vector-icons'
import { WordsList } from '@modules/index'
import { useAppDispatch } from '@hooks/index'
import { resetWords } from '@store/wordsSlice'

type AddingWordsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'AddingWords'
>

export const AddingWordsScreen: FC<AddingWordsScreenProps> = ({
	navigation
}) => {
	const dispatch = useAppDispatch()
	return (
		<View className='bg-blueDark h-full px-5 pt-32 pb-7'>
			<TouchableOpacity
				className='w-max absolute z-50 top-3 left-3 p-3'
				onPress={() => {
					dispatch(resetWords())
					navigation.goBack()
				}}
			>
				<Ionicons name='arrow-back-circle' size={32} color='#F18F01' />
			</TouchableOpacity>

			<View className='justify-center items-center gap-3 mb-5'>
				<Octicons name='pencil' size={20} color='#E1F2FE' />
				<Text className='text-xl font-robotoBold text-whiteMain'>Слова</Text>
			</View>

			<WordsList />
		</View>
	)
}
