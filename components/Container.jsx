import { AiFillProfile } from "react-icons/ai";
import Todos from "./Todos";

const Container = ({ todos }) => {
  return (
    <div className="flex min-h-[calc(100vh - 84px)] my-0 mx-auto max-w-[1048px] relative py-0 px-6">
      <div className="w-full mt-20">
        <div className="px-6 max-w-[960px] w-full mx-auto box-border block">
          <header className="static flex flex-col flex-shrink-0 box-border w-full z-[1100] header-trans box-shadow">
            <div className="min-h-[48px] flex overflow-hidden">
              <div className="w-full whitespace-nowrap relative flex-auto inline-block">
                <div className="flex justify-center">
                  <button className="min-w-[160px] pt-2 min-h-[72px] text-[#3d72fe]">
                    <span className="flex flex-col justify-center items-center w-full">
                      <AiFillProfile className="text-xl mb-[6px] flex-shrink-0 select-none" />
                      My Tasks
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <Todos todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Container;
