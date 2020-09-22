import { matchesApi } from "../../api/api";

const SET_PREMIER_LEAGUE_EVENTS = "SET_PREMIER_LEAGUE_EVENTS";
const SET_FILTERED_EVENTS_COUNT = "SET_FILTERED_EVENTS_COUNT";

let initState = {
    premierLeagueEvents: [],
    filteredEventsCount: "last/5"
};

const matchesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PREMIER_LEAGUE_EVENTS: {
            return {
                ...state,
                premierLeagueEvents: [...action.premierLeagueEvents]
            }
        }

        case SET_FILTERED_EVENTS_COUNT: {
            return {
                ...state,
                filteredEventsCount: action.eventsCount
            }
        }

        default: 
            return state; 
    }
};

export const setPremierLeagueEvents = (premierLeagueEvents) => ({
    type: SET_PREMIER_LEAGUE_EVENTS,
    premierLeagueEvents
});

export const setFilteredEventsCount = (eventsCount)  => ({
    type: SET_FILTERED_EVENTS_COUNT,
    eventsCount
});

export const getMatchesData = (filteredEventsCount) => {
    return (dispatch) => {
        matchesApi.getMatches(filteredEventsCount).then((response) => {
            dispatch(setPremierLeagueEvents(response.data.api.fixtures));
        });
    }
}

export default matchesReducer;
