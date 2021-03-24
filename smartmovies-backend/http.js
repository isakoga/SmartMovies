import axios from "axios";
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

instance.interceptors.request.use(config => {
    config.params = Object.assign({}, config.params, {
        api_key: "db362a3de317f0a55bf7414630719b5d",
        language: "pt-BR"
    });
    
    return config;
});

export default instance; 