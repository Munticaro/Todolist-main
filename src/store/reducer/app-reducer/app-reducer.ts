import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authActions} from "../../slice/auth-slice/auth-slice";
import {authAPI} from "../../../api/auth-api/auth-api";


export const isInitializedApp = createAsyncThunk('app/initializeApp', async (arg, thunkAPI) => {
    const {dispatch} = thunkAPI
        const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(authActions.setLoggedIn({isLoggedIn: true}))
        dispatch(appActions.setAppStatus({ status: "succeeded" }))
    }
})


export const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as null | string,
        status: 'idle' as RequestStatusType,
        isInitialized: false
    },
    reducers: {
        setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
            state.status = action.payload.status
        },
        setAppError: (state, action: PayloadAction<{error: string | null}>) => {
            state.error = action.payload.error
        },
    },
    extraReducers: builder => {
        builder
            .addCase(isInitializedApp.fulfilled, (state) => {
                state.isInitialized = true
            })
    }
})

export const appActions = slice.actions
export const appReducer = slice.reducer

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type AppState = ReturnType<typeof slice.getInitialState>


