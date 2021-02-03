const OPEN_NAV = "nav/OPEN_NAV";
const CLOSE_NAV = "nav/CLOSE_NAV";

let initState = {
    isNavOpen: false,
};

const navReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_NAV:
            return {
                ...state,
                isNavOpen: true
            };
        case CLOSE_NAV:
            return {
                ...state,
                isNavOpen: false
            };
        default:
            return state;
    }
};

export const openNav = () => ({type: OPEN_NAV});
export const closeNav = () => ({type: CLOSE_NAV});

export default navReducer;