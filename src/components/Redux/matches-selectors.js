export const getPremierLeagueEvents = (state) => {
    return state.matchesPage.premierLeagueEvents;
}

export const getFilteredEventsCount = (state) => {
    return state.matchesPage.filteredEventsCount;
}

export const getIsFetching = (state) => {
    return state.matchesPage.isFetching;
}