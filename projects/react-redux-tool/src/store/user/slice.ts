import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	mail: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Peter Doe",
		mail: "peter@gmail.com",
		github: "peterdoe",
	},
	{
		id: "2",
		name: "Goku",
		mail: "goku@gmail.com",
		github: "gokudev",
	},
	{
		id: "3",
		name: "Bulma",
		mail: "pan@cc.com",
		github: "bulma",
	},
	{
		id: "4",
		name: "Vegeta",
		mail: "pan_1@cc.com",
		github: "vegeta",
	},
	{
		id: "5",
		name: "Gohan",
		mail: "gohanr@cc.com",
		github: "gohan",
	},
	{
		id: "6",
		name: "Piccolo",
		mail: "pan_piccolo@namek.com",
		github: "picclo",
	},
];

// este slice puede ser cualquier cosa
const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((users) => users.id !== id);
		},
	},
});

export default usersSlice.reducer;
export const { deleteUserById } = usersSlice.actions;
