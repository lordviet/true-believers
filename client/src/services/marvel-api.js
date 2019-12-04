const api = require('marvel-api');

const marvelAPI = api.createClient({
    publicKey: `${process.env.REACT_APP_MARVEL_API_KEY}`,
    privateKey: `${process.env.REACT_APP_MARVEL_API_SECRET}`
});

export default marvelAPI;