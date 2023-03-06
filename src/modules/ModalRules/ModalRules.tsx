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
							В игре участвует от 2 и более команд, с количеством от 2 и более
							человек. Каждый игрок записывает слова которые закидываются в
							"Шляпу". Игра проходит в 3 этапа, в каждом надо отгадать все
							слова, которые находятся в "Шляпе".
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
							Надо суметь объяснить другими словами разгадываемое слово.
						</Text>

						<Text className='text-xs mb-3 font-roboto text-blueDark'>
							<Text className=' text-sm font-robotoBold'>Запрещается: </Text>
							Использование однокоренных слов, явное указывание на предмет
							который отгадывают, перевод с иностранных слов.
						</Text>

						<Text className='text-xs font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'>2. Крокодил. </Text>
							При помощи мимики, жестов или танцев показать своим товарищам
							задуманное слово.
						</Text>

						<Text className='text-xs mb-3 font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'> Запрещается: </Text>
							Издавать звуки, говорить.
						</Text>

						<Text className='text-xs font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'>3. Блицкриг. </Text>
							Объяснить слово ОДНИМ словом. В раундах дается на половну меньше
							времени, чем в предыдущих этапах. Команда может обсуждать в слух
							предположения. Если окончательный ответ был неверным, раунд
							завершается.
						</Text>

						<Text className='text-xs font-roboto text-blueDark'>
							<Text className='font-robotoBold text-sm'> Запрещается: </Text>
							Использование словосочетаний однокоренных слов, явное указывание
							на предмет который отгадывают, перевод с иностранных слов.
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
							Набрать наибольшее количество очков за игру.
						</Text>
					</View>
				</ScrollView>
			</Popup>
		</>
	)
}
