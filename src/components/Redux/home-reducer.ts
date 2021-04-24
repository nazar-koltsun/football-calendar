import { type } from 'node:os';
import { newsApi } from '../../api/api';

const GET_NEWS = 'home/GET_NEWS';
const TOGGLE_IS_FETCHING = 'home/TOGGLE_IS_FETCHING';
const SET_CURRENT_PAGE = 'home/SET_CURRENT_PAGE';

let initState = {
    news: [] as Array<any>,
    pageSize: 3,
    currentPage: 1,
    isFetching: false,
};

type InitStateType = typeof initState;

const homeReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                news: [...action.news],
            };
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        
        default:
            return state;
    }
};

type GetNewsType = {
    type: typeof GET_NEWS
    news: Array<any>
}
export const getNews = (news: Array<any>): GetNewsType => ({
    type: GET_NEWS,
    news,
});

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const getNewsData = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const response = await newsApi.getNews();
    dispatch(getNews(response.data.arts));
    dispatch(toggleIsFetching(false));
};

export default homeReducer;
