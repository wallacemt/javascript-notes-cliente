import axios from "axios";

const Api = axios.create({baseURL: "http://192.168.248.200:3001"})

export default Api;