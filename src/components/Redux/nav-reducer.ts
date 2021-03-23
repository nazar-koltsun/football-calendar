const OPEN_NAV = 'nav/OPEN_NAV';
const CLOSE_NAV = 'nav/CLOSE_NAV';

let initState = {
    isNavOpen: false,
};

type InitStateType = typeof initState;

const navReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case OPEN_NAV:
            return {
                ...state,
                isNavOpen: true,
            };
        case CLOSE_NAV:
            return {
                ...state,
                isNavOpen: false,
            };
        default:
            return state;
    }
};

type OpenNavType = {
    type: typeof OPEN_NAV
}
export const openNav = (): OpenNavType => ({ type: OPEN_NAV });

type CloseNavType = {
    type: typeof CLOSE_NAV
}
export const closeNav = (): CloseNavType => ({ type: CLOSE_NAV });

export default navReducer;
