import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
	value: true
}

const uiSlice = createSlice({
	name: 'uiSlice',
	initialState,
	reducers: {
		showSideBar: (state, action) => {
			state.value = !state.value;
		}
	}
})
export const { showSideBar } = uiSlice.actions;
export default uiSlice.reducer;