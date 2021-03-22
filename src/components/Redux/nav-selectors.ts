import { AppStateType } from './redux-store';

export const getIsNavOpen = (state: AppStateType) => {
    return state.navigation.isNavOpen;
}