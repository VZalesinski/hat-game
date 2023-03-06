import React, { useCallback, useEffect } from 'react'
import type { FC } from 'react'
import { BackHandler, View } from 'react-native'
import { RoundDescription } from '@modules/index'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from 'router/RootNavigator'

type RoundScreenProps = NativeStackScreenProps<RootStackParamList, 'Round'>

export const RoundScreen: FC<RoundScreenProps> = ({ navigation }) => {
	return (
		<View className='bg-whiteMain h-full px-5 pt-14 pb-7'>
			<RoundDescription />
		</View>
	)
}
