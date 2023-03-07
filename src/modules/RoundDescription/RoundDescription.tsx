import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useAppDispatch, useAppSelector } from '@hooks/index'
import { RoundModal } from '../RoundModal/RoundModal'
import { RoundButton, RoundCard, Timer } from '@components/index'
import {
	addGuessedWord1,
	addGuessedWord2,
	addGuessedWord3,
	wordType
} from '@store/wordsSlice'
import { useNavigation } from '@react-navigation/native'
import { addPoint, updateCurrentIndex } from '@store/teamsSlice'
import { toggleComplete } from '@store/roundsSlice'

interface NavType {
	navigate: (value: string) => void
}

export type RoundButtonType = 'start' | 'action' | 'stop' | 'end'

export const RoundDescription: FC = () => {
	const { navigate } = useNavigation<NavType>()

	const dispatch = useAppDispatch()

	const [buttonState, setButtonState] = useState<RoundButtonType>('start')
	const [word, setWord] = useState<wordType>({
		text: '',
		id: ''
	})

	const round = useAppSelector(state =>
		state.rounds.allRounds.find(item => {
			return item?.completed === false && item
		})
	)

	const timer = useAppSelector(state =>
		round !== undefined && round?.id === 2
			? state.game.timer / 2
			: state.game.timer
	)
	const [time, setTime] = useState(timer)
	const [isCounting, setIsCounting] = useState(false)

	const StageWords1 = useAppSelector(state => state.words.roundWords1)
	const StageWords2 = useAppSelector(state => state.words.roundWords2)
	const StageWords3 = useAppSelector(state => state.words.roundWords3)

	const currentIndex = useAppSelector(state => state.teams.currentIndex)
	const team = useAppSelector(state => state.teams.teams[currentIndex])

	let StagePlaying: wordType[] | null
	let dispatchFunc: any
	switch (round?.name) {
		case 'Alias':
			StagePlaying = StageWords1
			dispatchFunc = addGuessedWord1
			break
		case 'Крокодил':
			StagePlaying = StageWords2
			dispatchFunc = addGuessedWord2
			break
		case 'Блицкриг':
			StagePlaying = StageWords3
			dispatchFunc = addGuessedWord3
			break
		default:
			StagePlaying = null
	}

	useEffect(() => {
		const interval = setInterval(() => {
			isCounting && setTime(time => (time >= 1 ? time - 1 : 0))
		}, 1000)

		if (time === 0) {
			setButtonState('end')
			setIsCounting(false)
		}

		return () => {
			clearInterval(interval)
		}
	}, [isCounting, time])

	const handleStart = () => {
		setIsCounting(true)
		setButtonState('action')
	}
	const handleStop = () => {
		setIsCounting(false)
		setButtonState('stop')
	}

	const onButtonPress = () => {
		isCounting ? '' : handleStart()

		if (buttonState === 'start') {
			if (StagePlaying) {
				const randomIndex = Math.floor(Math.random() * StagePlaying.length)
				const randomWord = StagePlaying[randomIndex]
				setWord(randomWord)
			}
		}

		if (buttonState === 'action') {
			dispatch(addPoint(team.id))
			dispatch(dispatchFunc(word.id))

			if (StagePlaying?.length === 0) {
				setButtonState('end')
			} else {
				if (StagePlaying) {
					let randomIndex = Math.floor(Math.random() * StagePlaying.length)
					let randomWord = StagePlaying[randomIndex]
					if (StagePlaying.length > 1) {
						while (randomWord.id === word.id) {
							randomIndex = Math.floor(Math.random() * StagePlaying.length)
							randomWord = StagePlaying[randomIndex]
						}
						setWord(randomWord)
					}
				}
			}
		}

		if (buttonState === 'end') {
			if (StagePlaying?.length === 0 && round)
				dispatch(toggleComplete(round?.id))
			dispatch(updateCurrentIndex())
			navigate('Score')
		}
	}

	return (
		<>
			<View className='flex-row items-center justify-between mb-5'>
				<Text className='text-lg font-roboto text-blueDark'>
					Этап: <Text className='font-robotoBold'>{round?.name}</Text>
				</Text>

				{round && <RoundModal roundName={round} />}
			</View>

			<Text className='text-lg font-roboto text-blueDark mb-5'>
				Ход команды: <Text className='font-robotoBold'>{team?.title}</Text>
			</Text>

			<Timer
				seconds={time}
				classNames='mb-10'
				isCounting={isCounting}
				handleStart={handleStart}
				handleStop={handleStop}
				buttonState={buttonState}
			/>

			<RoundCard
				text={word.text}
				buttonState={buttonState}
				StagePlaying={StagePlaying}
			/>

			{timer !== 0 && StagePlaying?.length !== 0 ? (
				<TouchableOpacity className='mt-10' onPress={onButtonPress}>
					<RoundButton state={buttonState} />
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					className='mt-10'
					onPress={() => {
						if (StagePlaying?.length === 0 && round)
							dispatch(toggleComplete(round?.id))
						dispatch(updateCurrentIndex())
						navigate('Score')
					}}
				>
					<RoundButton state={'end'} />
				</TouchableOpacity>
			)}
		</>
	)
}
