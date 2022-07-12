import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Register User
export const register = createAsyncThunk('auth/register',
    async (user, thunkAPI) => {
        try {
            // Calling al http req & res in service
            return await authService.register(user)

        } catch (error) {
            // if any of this error exists it will be the message
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()

            // Reject and will send the message in the payload
            return thunkAPI.rejectWithValue(message)


        }
    })


// Login User
export const login = createAsyncThunk('auth/login',
    async (user, thunkAPI) => {
        try {
            // Calling al http req & res in service
            return await authService.login(user)

        } catch (error) {
            // if any of this error exists it will be the message
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()

            // Reject and will send the message in the payload
            return thunkAPI.rejectWithValue(message)


        }
    })




// Log Out
export const logout = createAsyncThunk('auth/logout',
    async () => {
        await authService.logout()
    }

)


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })

    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
