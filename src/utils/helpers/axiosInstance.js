import axios from "axios";
const basePath="http://localhost:5000";
const axiosInstance=axios.create({
    baseURL:basePath
});
export default axiosInstance;