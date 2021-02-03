import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/',
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '77e92faf3bmsh3de0393b737b483p10774ejsnec45c47a093a',
        useQueryString: true,
    },
});

export const matchesApi = {
    getMatches(numberOfMatches) {
        return instance.get(`league/2790/${numberOfMatches}`);
    },
};
