import { matchesApi } from "../../api/api";

const SET_PREMIER_LEAGUE_EVENTS = "matches/SET_PREMIER_LEAGUE_EVENTS";
const SET_FILTERED_EVENTS_COUNT = "matches/SET_FILTERED_EVENTS_COUNT";
const TOGGLE_IS_FETCHING = "matches/TOGGLE_IS_FETCHING";

let initState = {
    premierLeagueEvents: [],
    filteredEventsCount: "last/5",
    isFetching: false,
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

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
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

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const getMatchesData = (filteredEventsCount) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        matchesApi.getMatches(filteredEventsCount).then((response) => {
            dispatch(setPremierLeagueEvents(response.data.api.fixtures));
            dispatch(toggleIsFetching(false));
        });
    }
}

export default matchesReducer;
