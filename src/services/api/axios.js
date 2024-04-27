import axios from "axios";
import { baseUrl } from "./utils";
import { getItem } from "../../helpers/persistanceStorage";

axios.defaults = baseUrl;

axios.interceptors.request.use(function (config) {
    const token = getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    config.headers.Authorization = authorization;
    return config;
});

export default axios;
