import axios from "axios";


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8084/api/v1',
    }
)

export default apiClient;