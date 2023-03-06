import React, { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useAppDispatch } from '@hooks/index'
import { deleteTeam } from '@store/teamsSlice'

interface TeamItemProps {
	text: string
	id: string
	classNames?: string
	icon?: boolean
}

export const TeamItem: FC<TeamItemProps> = ({ text, classNames, icon, id }) => {
	const dispatch = useAppDispatch()

	return (
		<View
			className={`bg-blueLight rounded-lg py-2 pl-5  box-content flex-row justify-between items-center ${classNames}`}
		>
			<Text className='text-xl font-robotoBold text-black'>{text}</Text>
			<TouchableOpacity
				className='box-content py-2 px-5'
				onPress={() => dispatch(deleteTeam(id))}
			>
				{icon && <AntDesign name='delete' size={20} color='#074F57' />}
			</TouchableOpacity>
		</View>
	)
}
