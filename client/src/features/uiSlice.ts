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
		fixedSideBar: (state, action) => {
			if(window.innerWidth > 768) {
				state.sidebarVisible = true;
			}
		}
	}
})
export const { showSideBar, fixedSideBar } = uiSlice.actions;
export default uiSlice.reducer;