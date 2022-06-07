import axios from "axios";

const api = axios.create({
    baseURL: "https://kelloyn.herokuapp.com/v1/api/playground/",
});


// api.interceptors.request.use(
//     function (config) {
//         const access_token = localStorage.getItem("token");
//
//         if (access_token) {
//             config.headers.Authorization = `Bearer ${access_token}`;
//         }
//
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

export default api;
