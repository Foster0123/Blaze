import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
	sidebarVisible: true
}

const uiSlice = createSlice({
	name: 'uiSlice',
	initialState,
	reducers: {
		showSideBar: (state, action) => {
			if(window.innerWidth < 768) {
				state.sidebarVisible = !state.sidebarVisible;
			}
		},
	}
})
export const { showSideBar } = uiSlice.actions;
export default uiSlice.reducer;