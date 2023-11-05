import React from 'react'
import axios from "axios"

const customAxios = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxios = () => {
  return customAxios
}

export default useAxios