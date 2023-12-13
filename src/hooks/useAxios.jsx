import axios from "axios"

const customAxios = axios.create({
    baseURL: "https://server-omega-ten-11.vercel.app",
    // baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxios = () => {
  return customAxios
}

export default useAxios