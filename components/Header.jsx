/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <header className="bg-[#3d72fe] text-white static w-full flex items-center flex-shrink-0 z-[1100] box-border header-trans box-shadow h-16">
      <Link href="/">
        <a className="flex-grow">
          <div className="flex items-center relative pr-6 pl-6 min-h-[64px] sm:min-h-[56px]">
            <Image
              src="/logopng.png"
              alt="logo"
              width="40px"
              height="40px"
              className="mr-3"
            />
            <h6 className="cursor-pointer flex-grow text-lg font-medium ml-3">
              Todo App
            </h6>
          </div>
        </a>
      </Link>
      {session?.user ? (
        <div>
          <span className="flex items-center justify-center mr-3 cursor-pointer">
            <p className="text-base mr-1">{session?.user?.name}</p>
            <div className=" w-10 h-10 flex items-center overflow-hidden relative justify-center rounded-full">
              <img
                src={session?.user?.image}
                alt="avatar"
                className="w-full h-full text-center text-transparent object-cover"
              />
            </div>
            <button
              type="button"
              className=" ml-3 mr-2 h-11 py-[15px] px-5 text-white bg-[#3d72fe] border-0 cursor-pointer m-0 outline-0 flex items-center justify-center relative select-none no-underline align-middle rounded hover:bg-[#2E5AD4] hover:shadow-md shadow-sm text-base font-medium btn-trans"
              onClick={()=>signOut({callbackUrl:"/login"})}
            >
              LOGOUT
            </button>
          </span>
        </div>
      ) : (
        <button
          type="button"
          className=" mr-2 h-11 py-[15px] px-5 text-white bg-[#3d72fe] border-0 cursor-pointer m-0 outline-0 flex items-center justify-center relative select-none no-underline align-middle rounded hover:bg-[#2E5AD4] hover:shadow-md shadow-sm text-base font-medium btn-trans"
          onClick={()=> router.push('/login')}
        >
          LOGIN
        </button>
      )}
    </header>
  );
};

export default Header;
