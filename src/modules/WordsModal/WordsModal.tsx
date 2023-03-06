import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import type { FC } from 'react'
import { MyButton, Popup, WordInputField, WordItem } from '@components/index'
import { wordType } from '@store/wordsSlice'
import { useAppSelector } from '@hooks/index'

interface WordsModalProps {
	player: number
	classNames?: string
}

export const WordsModal: FC<WordsModalProps> = ({ player, classNames }) => {
	const [visible, setVisible] = useState(false)
	const [counter, setCounter] = useState(0)
	const [words, setWords] = useState<wordType[]>([{ text: 'ww', id: '' }])
	const limit = useAppSelector(state => state.game.wordsPerPlayer)
	return (
		<View className={classNames}>
			<TouchableOpacity
				onPress={() => {
					setVisible(true)
				}}
			>
				<MyButton
					text={`Слова от <Игрок ${player}>`}
					stylesText='text-lg'
					bgColor='bg-blueLight'
					textColor='text-blueDark'
				/>
			</TouchableOpacity>
			<Popup visible={visible} setVisible={setVisible} bgColor='bg-whiteMain'>
				<WordInputField
					limit={limit}
					classNames='mb-5 pt-5'
					counter={counter}
					setCounter={setCounter}
					words={words}
					setWords={setWords}
				/>
				<ScrollView>
					{words.map((item, index) =>
						index === 0 ? (
							''
						) : (
							<WordItem
								key={item.id}
								counter={counter}
								setCounter={setCounter}
								id={item.id}
								text={item.text}
								words={words}
								setWords={setWords}
							/>
						)
					)}
				</ScrollView>
			</Popup>
		</View>
	)
}
