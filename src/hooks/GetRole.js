import { useContext, useState } from "react";
import useAxiosLocal from "./useAxiosLocal";
import { authContext } from "../providers/AuthProvaider";

const GetRole = async () => {
  const axiosLocal = useAxiosLocal();
  const { user } = useContext(authContext);

  const res = await axiosLocal.get(`/getRole/${user?.email}`)
  return res?.data?.role
};

export default GetRole;
