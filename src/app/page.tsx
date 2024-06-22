"use client";

import { login, selectUser } from "@/redux/Slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  let router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      login({
        email: user.email,
        password: user.password,
      })
    );
    router.push("/profile");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-[430px] m-auto p-[20px]  rounded-[5px] shadow-md flex flex-col gap-4"
        >
          <div>
            <label>Email or username:</label>
            <input
              className="w-full p-[10px] border-state-300 border-[1px] rounded-[5px] outline-none text-[16px]"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              className="w-full p-[10px] border-state-300 border-[1px]  outline-none rounded-[5px] text-[16px]"
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </div>

          <button
            className=" rounded-[5px] bg-[#3498db] text-[#fff] p-[10px_15px] border-[none] rounded[5px] text-[16px] cursor-pointer transition-all duration-300"
            type="submit"
          >
            Submit
          </button>

          <Link
            className="text-[#3498db] text-center text-[18px]"
            href={"/signup"}
          >
            Dont have an account yet?
          </Link>
        </form>
      </div>
    </>
  );
};

export default Form;
