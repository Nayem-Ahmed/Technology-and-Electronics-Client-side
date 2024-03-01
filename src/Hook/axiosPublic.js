import axios from "axios";

const axiosPublice = axios.create({
    baseURL: 'https://technology-elec-server.vercel.app',
});
export default axiosPublice;