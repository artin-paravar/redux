"use client";
import { selectUser } from "@/redux/Slice";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector(selectUser);
  return <div>{user.email}</div>;
};
export default Profile;
