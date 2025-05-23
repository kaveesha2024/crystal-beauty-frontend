import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/utility/slices/AuthSlice.ts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authentication"],
};

const rootReducer = combineReducers({
  authentication: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type dispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
// type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
