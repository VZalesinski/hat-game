import { Image, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'router/RootNavigator'
import type { FC } from 'react'
import React from 'react'
import { Title } from '@components/index'
import { ModalRules, ToContinueGame, ToNewGame } from '@modules/index'
import icon from '../../../assets/icon.png'

type StartScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export const StartScreen: FC<StartScreenProps> = ({ navigation }) => {
	return (
		<View className='bg-whiteMain h-full justify-center items-center px-5 flex space-y-4'>
			<Image source={icon} className='w-20 h-20' />
			<View>
				<Title title='Шляпа' />
			</View>
			<View className='w-full'>
				<ToContinueGame />
			</View>
			<View className='w-full'>
				<ToNewGame />
			</View>
			<View className='w-full'>
				<ModalRules />
			</View>
		</View>
	)
}
