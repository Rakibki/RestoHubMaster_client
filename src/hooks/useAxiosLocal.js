import axios from "axios"

const axiosLocal = axios.create({
    baseURL: "https://some-sandy.vercel.app",
    // baseURL: "http://localhost:5000",
})

const useAxiosLocal = () => {
  return (
    axiosLocal
  )
}

export default useAxiosLocal