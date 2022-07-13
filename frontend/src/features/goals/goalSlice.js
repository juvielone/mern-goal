import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}



// Create Goal
export const createGoal = createAsyncThunk('goals/createGoal',
    async (goal, thunkAPI) => {
        try {

            // Get token to another slice
            const token = thunkAPI.getState().auth.user.token

            // Calling al http req & res in service
            return await goalService.createGoal(goal, token)

        } catch (error) {
            // if any of this error exists it will be the message
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()

            // Reject and will send the message in the payload
            return thunkAPI.rejectWithValue(message)


        }
    })





export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState //return to default state
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, (state) => {
                state.isLoading = false

            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })

            .addCase(createGoal.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = goalSlice.actions
export default goalSlice.reducer

