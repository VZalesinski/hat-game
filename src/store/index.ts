import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import teamsReducer from "./teamsSlice";
import gameReducer from "./gameSlice";
import wordsReducer from "./wordsSlice";
import roundsReducer from "./roundsSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  teams: teamsReducer,
  game: gameReducer,
  words: wordsReducer,
  rounds: roundsReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;