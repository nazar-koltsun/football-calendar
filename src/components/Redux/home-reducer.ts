import { newsApi } from '../../api/api';

const GET_NEWS = 'home/GET_NEWS';
const TOGGLE_IS_FETCHING = 'home/TOGGLE_IS_FETCHING';

let initState = {
    news: [] as Array<any>,
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

export const getNewsData = () => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    const response = await newsApi.getNews();
    dispatch(getNews(response.data.arts));
    dispatch(toggleIsFetching(false));
};

export default homeReducer;
