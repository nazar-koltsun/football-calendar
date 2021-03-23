import { AppStateType } from './redux-store';

export const getPremierLeagueEvents = (state: AppStateType) => {
    return state.matchesPage.premierLeagueEvents;
}

export const getFilteredEventsCount = (state: AppStateType) => {
    return state.matchesPage.filteredEventsCount;
}

export const getIsFetching = (state: AppStateType) => {
    return state.matchesPage.isFetching;
}