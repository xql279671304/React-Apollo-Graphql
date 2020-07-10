import { actions, RootState } from '../app/store'

export function setTopNavType(type: string) {
  return (dispatch: any) => {
    dispatch(actions.topNav.setType({ type }))
  }
}

export const selectTopNav = (state: RootState) => state.topNav