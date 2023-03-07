import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
	AddingWordsScreen,
	FinishScreen,
	NewGameScreen,
	RoundScreen,
	ScoreScreen,
	SettingsScreen,
	StartScreen
} from '@screens/index'
import { NavigationContainer } from '@react-navigation/native'

export type RootStackParamList = {
	Home: undefined
	NewGame: undefined
	Settings: undefined
	AddingWords: undefined
	Score: undefined
	Round: undefined
	Finish: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
			>
				<RootStack.Screen name='Home' component={StartScreen} />
				<RootStack.Screen name='NewGame' component={NewGameScreen} />
				<RootStack.Screen name='Settings' component={SettingsScreen} />
				<RootStack.Screen name='AddingWords' component={AddingWordsScreen} />
				<RootStack.Screen name='Score' component={ScoreScreen} />
				<RootStack.Screen name='Round' component={RoundScreen} />
				<RootStack.Screen name='Finish' component={FinishScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	)
}
