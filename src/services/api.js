import axios from 'axios'

//API URL
//https://api.themoviedb.org/3/movie/550?api_key=264a9eb2eee55515a1b4a676b34d9a52


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
