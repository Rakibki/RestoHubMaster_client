import axios from "axios"

const customAxios = axios.create({
    // baseURL: "https://server-khaki-eight.vercel.app",
    baseURL: "https://some-sandy.vercel.app",
    // baseURL: " https://server-rm8937516-gmailcom-rakibs-projects-ab620a78.vercel.app",
    withCredentials: true
})

const useAxios = () => {
  return customAxios
}

export default useAxios