import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store";

export interface ValueState {
    value: string;
}

function initialState(): ValueState {
    return {
        value: ""
    }
}

export const valueSlice = createSlice({
    name: "value",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const {setValue} = valueSlice.actions

export const  selectValue = (state: RootState) => state.value.value
export default valueSlice.reducer