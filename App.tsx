import { StatusBar } from 'react-native'
import { RootNavigator } from 'router/RootNavigator'
import { Provider } from 'react-redux'
import store, { persistor } from 'store'
import AppLoading from 'expo-app-loading'
import { useFonts, Caveat_400Regular } from '@expo-google-fonts/caveat'
import {
	RobotoCondensed_400Regular,
	RobotoCondensed_700Bold
} from '@expo-google-fonts/roboto-condensed'
import { PersistGate } from 'redux-persist/integration/react'

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
				<PersistGate persistor={persistor} loading={null}>
					<RootNavigator />
					<StatusBar backgroundColor={'#000'} />
				</PersistGate>
			</Provider>
		</>
	)
}
