import React, { useState } from 'react'
import type { FC } from 'react'
import { Text, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Popup } from '@components/index'
import { RoundType } from '@store/roundsSlice'

interface RoundModalProps {
	roundName: RoundType
}

export const RoundModal: FC<RoundModalProps> = ({ roundName }) => {
	const [visible, setVisible] = useState(false)
	return (
		<>
			<TouchableOpacity
				className='p-2'
				onPress={() => {
					setVisible(true)
				}}
			>
				<AntDesign name='questioncircle' size={30} color='#F18F01' />
			</TouchableOpacity>
			<Popup visible={visible} setVisible={setVisible}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text className='text-2xl text-center font-robotoBold text-blueDark mb-3'>
						Описание раунда:
					</Text>
					<Text className='text-lg text-center font-roboto text-blueDark mb-5'>
						{roundName?.description}
					</Text>
					<Text className='text-2xl text-center font-robotoBold text-blueDark mb-3'>
						Запрещено:
					</Text>
					<Text className='text-lg font-roboto text-center text-blueDark'>
						{roundName?.ban}
					</Text>
				</ScrollView>
			</Popup>
		</>
	)
}
