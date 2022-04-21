import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#3d72fe] text-white static w-full flex flex-col flex-shrink-0 z-[1100] box-border header-trans box-shadow">
      <div className="flex items-center relative pr-6 pl-6 min-h-[64px] sm:min-h-[56px]">
        <Image src="/logopng.png" alt="logo" width="40px" height="40px" className="mr-3" />
        <h6 className="cursor-pointer flex-grow text-lg font-medium ml-3">Todo App</h6>
      </div>
    </header>
  );
};

export default Header;
