import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://some-sandy.vercel.app",
  // baseURL: "http://localhost:5000",
});

const useAxios = () => {
  return customAxios;
};

export default useAxios;
