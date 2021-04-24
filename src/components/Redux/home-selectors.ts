import { AppStateType } from './redux-store';

export const getNews = (state: AppStateType) => {
    return state.homePage.news;
}

export const getPageSize = (state: AppStateType) => {
    return state.homePage.pageSize;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.homePage.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
    return state.homePage.isFetching;
}