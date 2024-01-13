import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthReducers";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
