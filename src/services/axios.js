import axios from 'axios';

// base url to make requests to the cocktaildb database

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
});

export default instance