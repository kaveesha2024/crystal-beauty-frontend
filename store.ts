import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./src/utility/slices/AuthSlice.ts";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./src/utility/slices/CartSlice.ts";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authentication", "cart"],
};

const rootReducer = combineReducers({
    authentication: authReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export type dispatchType = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
