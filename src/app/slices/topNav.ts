import { createSlice } from '@reduxjs/toolkit'

export interface State {
  type: string
}

interface Action {
  payload: {
    type: string
  }
}

const initialState = {
  type: 'MEMBER'
}

export const topNav = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    setType: (state: State, { payload }: Action) => {
      state.type = payload.type
    }
  }
})
