import { newsApi } from '../../api/api';

const GET_NEWS = 'home/GET_NEWS';
const TOGGLE_IS_FETCHING = 'home/TOGGLE_IS_FETCHING';

let initState = {
    news: [],
    isFetching: false,
};

const homeReducer = (state = initState, action) => {
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

export const getNews = (news) => ({
    type: GET_NEWS,
    news,
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const getNewsData = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await newsApi.getNews();
    dispatch(getNews(response.data.arts));
    dispatch(toggleIsFetching(false));
};

export default homeReducer;
