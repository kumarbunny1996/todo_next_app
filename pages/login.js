import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";

/* eslint-disable @next/next/no-img-element */
export default function Login() {
  return (
    <div className="flex max-w-[1048px] min-h-[calc(100vh - 84px)] my-0 mx-auto relative py-0 px-6 pb-2">
      <div className="w-full mt-10">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-center text-2xl font-bold">
            Login to create tasks
          </h1>
          <img src="/onboarding.svg" alt="cowork" className="w-[40%]" />
          <button
            type="button"
            className="w-[40%] py-[15px] px-5 text-white bg-[#24292e] border-0 cursor-pointer m-0 outline-0 flex items-center justify-center relative select-none no-underline align-middle rounded hover:bg-[#555]  hover:shadow-md shadow-sm text-base font-medium btn-trans"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            <AiOutlineGithub className="mr-1" />
            Continue with GITHUB
          </button>
          <button
            type="button"
            className="w-[40%] py-[15px] px-5 text-white bg-[#de5246] border-0 cursor-pointer mt-3 outline-0 flex items-center justify-center relative select-none no-underline align-middle rounded hover:bg-[#ef675d]  hover:shadow-md shadow-sm text-base font-medium btn-trans"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <AiOutlineGoogle className="mr-1" />
            Continue with GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
}
