import React from 'react'
import type { FC } from 'react'
import { TeamItem } from '@components/index'
import { useAppSelector } from '@hooks/index'
import { FlatList, Text } from 'react-native'
import { TeamType } from '@store/teamsSlice'

const EmptyComponent: FC = () => {
	return (
		<Text className='text-center text-whiteMain text-xl opacity-60'>
			Для игры нужно минимум 2 команды
		</Text>
	)
}

export const TeamsList: FC = () => {
	const teams = useAppSelector(state => state.teams.teams)
	return (
		<FlatList
			data={teams}
			renderItem={({ item }) => (
				<TeamItem id={item.id} text={item.title} icon classNames='mb-5' />
			)}
			keyExtractor={(item: TeamType) => item.id}
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			ListEmptyComponent={EmptyComponent}
			className='border-t border-blueLight  py-5 mb-5'
		/>
	)
}
