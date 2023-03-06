import { View, Modal, TouchableOpacity } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { Ionicons } from '@expo/vector-icons'

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
			<View className='h-full bg-transparent  pt-5'>
				<View
					className={`h-full px-5 pt-12 ${bgColor ? bgColor : 'bg-blueLight'}`}
				>
					<TouchableOpacity
						className='top-1 right-1 absolute box-content p-2 z-10'
						onPress={() => {
							setVisible(false)
						}}
					>
						<Ionicons name='arrow-forward-circle' size={30} color='#F18F01' />
					</TouchableOpacity>
					{children}
				</View>
			</View>
		</Modal>
	)
}
