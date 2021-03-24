import { AppStateType } from './redux-store';

export const getNews = (state: AppStateType) => {
    return state.homePage.news;
}

export const getIsFetching = (state: AppStateType) => {
    return state.homePage.isFetching;
}