const SET_PREMIER_LEAGUE_EVENTS = "SET_PREMIER_LEAGUE_EVENTS";

let initState = {
    premierLeagueEvents: []
};

const matchesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_PREMIER_LEAGUE_EVENTS: {
            return {
                ...state,
                premierLeagueEvents: [...action.premierLeagueEvents]
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

export default matchesReducer;
