import { View, Modal, TouchableOpacity } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { AntDesign } from '@expo/vector-icons'

interface PopupProps {
	visible: boolean | undefined
	children: ReactNode
	setVisible?: (param: boolean) => void
	bgColor?: string
}

export const Popup: FC<PopupProps> = ({
	visible,
	children,
	setVisible = () => {},
	bgColor
}) => {
	return (
		<Modal animationType='slide' transparent={true} visible={visible}>
			<View className='h-full'>
				<View
					className={`h-full px-5 pt-20 ${bgColor ? bgColor : 'bg-blueLight'}`}
				>
					<TouchableOpacity
						className='top-4 right-4 absolute box-content p-2 z-10'
						onPress={() => {
							setVisible(false)
						}}
					>
						<AntDesign name='closecircle' size={30} color='#F18F01' />
					</TouchableOpacity>
					{children}
				</View>
			</View>
		</Modal>
	)
}
