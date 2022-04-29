/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const NotLogged = () => {
  const router = useRouter();

  return (
    <div className="flex max-w-[1048px] min-h-[calc(100vh - 84px)] my-0 mx-auto relative py-0 px-6">
      <div className="w-full mt-10">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-center text-2xl font-bold">
            You&apos;re not logged
          </h1>
          <img src="/login.svg" alt="cowork" className="w-[40%]" />
          <button
            type="button"
            className="w-[40%] py-[15px] px-5 text-white bg-[#3d72fe] border-0 cursor-pointer m-0 outline-0 flex items-center justify-center relative select-none no-underline align-middle rounded hover:bg-[#2E5AD4] hover:shadow-md shadow-sm text-base font-medium btn-trans"
            onClick={() => router.push("/auth")}
          >
            Login
          </button>
          <p className="text-gray-400 my-2 text-sm">
            Join to Nextjs TODO List and planning your pending tasks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotLogged;
