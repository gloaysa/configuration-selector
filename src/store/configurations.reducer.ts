import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ConfigurationFile} from '../interfaces/configuration.interface';

interface ConfigurationsReducer {
    files: ConfigurationFile[];
}

const initialState: ConfigurationsReducer = {
    files: []
}
export const configurationsSlice = createSlice({
    name: 'configurations',
    initialState,
    reducers: {
        addCheckoutConfig: (state, action: PayloadAction<ConfigurationFile[]>) => {
            state.files = [...action.payload];
        }
    },
})

// Action creators are generated for each case reducer function
export const { addCheckoutConfig } = configurationsSlice.actions

export default configurationsSlice.reducer
