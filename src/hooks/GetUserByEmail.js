import { useContext } from "react"
import { authContext } from "../providers/AuthProvaider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const GetUserByEmail = async () => {
    const {user} = useContext(authContext)
    const axiosSecure = useAxiosSecure()

    const { isPending, data } = useQuery({
        queryKey: ["AllDers"],
        enabled: !!user?.email,
        queryFn: async () => {
          const res = await axiosSecure.get(`/user/${user?.email}`);
          return res?.data;
        },
      });
      return data
}

export default GetUserByEmail