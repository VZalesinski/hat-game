import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import { MyButton, Popup } from '@components/index'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

export const ModalRules: FC = () => {
	const [visible, setVisible] = useState(false)

	return (
		<>
			<TouchableOpacity
				onPress={() => {
					setVisible(true)
				}}
			>
				<MyButton text='Правила игры' />
			</TouchableOpacity>
			<Popup visible={visible} setVisible={setVisible}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View className='mb-3 pb-3 border-b border-blueDark w-full'>
						<Text className='text-center text-xl font-robotoBold font-semibold mb-3'>
							Правила:
						</Text>
						<View className='items-center'>
							<AntDesign name='infocirlce' size={32} color='#074F57' />
						</View>
						<Text className='text-left text-xs mt-3 font-roboto text-blueDark'>
							Количество команд - 2 и больше
						</Text>
						<Text className='text-left text-xs mt-3 font-roboto text-blueDark'>
							Оптимальное количество игроков в каждой команде - 2
						</Text>
						<Text className='text-left text-xs mt-3 font-roboto text-blueDark'>
							Перед началом игры каждый игрок пишет на карточках слова. В
							оригинальной версии Шляпы используются персонажи и личности, но вы
							можете также использовать любые существительные и словосочетания.
						</Text>
						<Text className='text-left text-xs mt-3 font-roboto text-blueDark'>
							Игра состоит из трёх этапов. На каждом этапе используются слова,
							написанные участниками на карточках перед началом игры.
						</Text>
					</View>

					<View className='mb-3 pb-3 border-b border-blueDark w-full'>
						<Text className='text-center text-xl font-semibold font-robotoBold mb-3 text-blueDark'>
							Этапы:
						</Text>

						<View className='items-center'>
							<FontAwesome
								name='gamepad'
								size={32}
								color='#074F57'
								className='self-center'
							/>
						</View>
						<Text className='text-xs mt-3 font-roboto text-blueDark'>
							<Text className=' text-sm font-robotoBold '>1. Alias. </Text>
							Команды играют по очереди. В свой ход один из участников команды
							должен словами объяснить как можно больше карточек. Отгадывают
							только участники играющей команды. Сбрасывать карточки обратно в
							шляпу нельзя, не сдавайтесь, проявляйте фантазию!
						</Text>

						<Text className='text-xs mb-3 font-roboto text-blueDark'>
							<Text className=' text-sm font-robotoBold'>Запрещено: </Text>
							Использование однокоренных слов и иностранных аналогов слов,
							написанных на карточках.
						</Text>

						<Text className='text-xs mb-3 font-roboto text-blueDark'>
							<Text className=' text-sm font-robotoBold'>Лайфхак: </Text>
							Если вы не знаете слово, написанное на карточке, попробуйте
							объяснить его по частям или использовать созвучное слово.
						</Text>

						<Text className='text-xs mb-3 font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'>2. Крокодил. </Text>
							Объяснить слово с помощью мимики и жестов.
						</Text>

						<Text className='text-xs mb-3 font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'> Запрещено: </Text>
							Издавать звуки, говорить, показывать буквы
						</Text>

						<Text className='text-xs font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'>3. Блицкриг. </Text>
							Объяснить написанное на карточке одним словом. На этом этапе
							каждой команде дается в два раза меньше времени, чем на
							предыдущих. Играющая команда может обсуждать в слух предположения
							и озвучивать один вариант. Если окончательный ответ неверный,
							раунд автоматически завершается и ход переходит другой команде.
						</Text>

						<Text className='text-xs font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'> Запрещено: </Text>
							Использовать словосочетания, однокоренные слова и иностранные
							аналоги слова, написанного на карточке.
						</Text>
					</View>

					<View className='pb-9'>
						<Text className='text-center text-xl font-robotoBold mb-3 text-blueDark'>
							Цель:
						</Text>

						<View className='items-center'>
							<FontAwesome5 name='award' size={32} color='#074F57' />
						</View>
						<Text className='text-xs mt-3 font-roboto text-blueDark'>
							Побеждает команда, набравшая наибольшее количество очков по итогу
							всех трех этапов.
						</Text>
					</View>
				</ScrollView>
			</Popup>
		</>
	)
}
