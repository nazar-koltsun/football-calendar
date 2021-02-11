import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/',
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '77e92faf3bmsh3de0393b737b483p10774ejsnec45c47a093a',
        useQueryString: true,
    },
});

const instanceNews = axios.create({
    baseURL: 'https://livescore6.p.rapidapi.com/news/list',
    headers: {
        'x-rapidapi-key': '31e92faf3bmsh3de0393b737b483p10774ejsnec45c47a093a',
        'x-rapidapi-host': 'livescore6.p.rapidapi.com',
        useQueryString: true,
    },
});

export const matchesApi = {
    getMatches(numberOfMatches) {
        return instance.get(`league/2790/${numberOfMatches}`);
    },
};

export const newsApi = {
    getNews() {
        return instanceNews.get();
    }
};
