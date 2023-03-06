import { StatusBar } from 'react-native'
import { RootNavigator } from 'router/RootNavigator'
import { Provider } from 'react-redux'
import { store } from 'store'
import AppLoading from 'expo-app-loading'
import { useFonts, Caveat_400Regular } from '@expo-google-fonts/caveat'
import {
	RobotoCondensed_400Regular,
	RobotoCondensed_700Bold
} from '@expo-google-fonts/roboto-condensed'

export default function App() {
	const [fontsLoaded] = useFonts({
		Caveat_400Regular,
		RobotoCondensed_400Regular,
		RobotoCondensed_700Bold
	})

	if (!fontsLoaded) return <AppLoading />
	return (
		<>
			<Provider store={store}>
				<RootNavigator />
				<StatusBar backgroundColor={'#000'} />
			</Provider>
		</>
	)
}
