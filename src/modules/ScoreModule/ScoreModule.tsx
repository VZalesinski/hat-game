import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useAppSelector } from '@hooks/index'

export const ScoreModule = () => {
	const teams = useAppSelector(state => state.teams.teams)
	return (
		<FlatList
			data={teams}
			renderItem={({ item }) => (
				<Text className='text-2xl font-roboto text-blueDark mb-5' key={item.id}>
					{item.title}: <Text>{item.score}</Text>
				</Text>
			)}
			keyExtractor={item => item.id}
			className='border-t border-blueDark pt-5'
		/>
	)
}
