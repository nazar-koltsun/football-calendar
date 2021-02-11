import { newsApi } from '../../api/api';

const GET_NEWS = 'home/GET_NEWS';

let initState = {
    news: [],
};

const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                news: [...action.news],
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

export const getNewsData = () => async (dispatch) => {
    const response = await newsApi.getNews();
    dispatch(getNews(response.data.arts));
};

export default homeReducer;
