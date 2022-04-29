import { AiFillProfile } from "react-icons/ai";
import PeopleIcon from "@material-ui/icons/People";

import Todos from "./Todos";
import { useState } from "react";
import TeamContainer from "./UserTeam/TeamContainer";

const Container = ({ todos, teams }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (e, value) => {
    setCurrentTab(value);
  };

  return (
    <div className="flex min-h-[calc(100vh - 84px)] my-0 mx-auto max-w-[1048px] relative py-0 px-6">
      <div className="w-full mt-20">
        <div className="px-6 max-w-[960px] w-full mx-auto box-border block">
          <header className="static flex flex-col flex-shrink-0 box-border w-full z-[1100] header-trans box-shadow">
            <div className="min-h-[48px] flex overflow-hidden">
              <div className="w-full whitespace-nowrap relative flex-auto inline-block">
                <div className="flex justify-center">
                  <button
                    className={`min-w-[160px] pt-2 min-h-[72px]  ${
                      currentTab === 0 ? "text-[#3d72fe]" : " text-gray-600"
                    }`}
                    onClick={(e) => handleChangeTab(e, 0)}
                  >
                    <span className="flex flex-col justify-center items-center w-full">
                      <AiFillProfile className="text-xl mb-[6px] flex-shrink-0 select-none" />
                      My Tasks
                    </span>
                  </button>
                  <button
                    className={`min-w-[160px] pt-2 min-h-[72px]  ${
                      currentTab === 1 ? "text-[#3d72fe]" : " text-gray-600"
                    }`}
                    onClick={(e) => handleChangeTab(e, 1)}
                  >
                    <span className="flex flex-col justify-center items-center w-full">
                      <PeopleIcon />
                      My Team
                    </span>
                  </button>
                </div>
                <span
                  className={`bg-[#3d72fe] transition-all h-[2px] absolute bottom-0 whitespace-nowrap ${
                    currentTab === 1
                      ? "w-[160px] left-[456px]"
                      : "w-[160px] left-[296px]"
                  }`}
                ></span>
              </div>
            </div>
          </header>
          <Todos todos={todos} currentTab={currentTab} index={0} />
          <TeamContainer currentTab={currentTab} index={1} />
        </div>
      </div>
    </div>
  );
};

export default Container;
