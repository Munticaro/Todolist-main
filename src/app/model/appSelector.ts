import { AppRootStateType } from 'app/store'

export const selectAppStatus = (state: AppRootStateType) => state.app.status
export const selectIsInitialized = (state: AppRootStateType) => state.app.isInitialized
export const selectAppError = (state: AppRootStateType) => state.app.error
