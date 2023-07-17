import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./user/slice";

export const store = configureStore({
	reducer: {
		users: usersSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
