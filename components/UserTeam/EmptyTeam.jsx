import { useState } from "react";
import CreateDialog from "./CreateDialog";
import JoinDialog from "./JoinDialog";

const EmptyTeam = ({ onCreatedTeam, onJoinTeam }) => {
  const [isOpen, setOpenDialog] = useState(false);
  const [isJoin, setJoinDialog] = useState(false);

  const openDialog = () => {
    setOpenDialog(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "14px";
  };
  const joinDialog = () => {
    setJoinDialog(true);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "14px";
  };
  const closeDialog = () => {
    setOpenDialog(false);
    document.body.style.overflow = "scroll";
    document.body.style.paddingRight = "0px";
  };

  const closeJoinDialog = () => {
    setJoinDialog(false);
    document.body.style.overflow = "scroll";
    document.body.style.paddingRight = "0px";
  };

  const handleCreateTeam = async (teamName) => {
    await onCreatedTeam(teamName);
    setOpenDialog(false);
    document.body.style.overflow = "scroll";
    document.body.style.paddingRight = "0px";
  };
  const handleJoinTeam = async (teamcode) => {
    await onJoinTeam(parseInt(teamcode, 10));
    setJoinDialog(false);
    document.body.style.overflow = "scroll";
    document.body.style.paddingRight = "0px";
  };
  return (
    <>
      <CreateDialog
        isOpen={isOpen}
        onClose={closeDialog}
        onCreate={handleCreateTeam}
      />
      <JoinDialog
        isOpen={isJoin}
        onClose={closeJoinDialog}
        onCreate={handleJoinTeam}
      />
      <div className="mt-4 text-base font-normal">
        <div className="w-full header-trans box-shadow overflow-hidden p-0 mb-8 bg-white rounded-md ">
          <div className="flex flex-col items-center mb-20 justify-center">
            <img width="50%" src="/empty_teams.svg" alt="don't have a team" />
            <h1 className="mt-0 p-0 text-4xl font-black">
              You don&apos;t have a team
            </h1>
            <p className="text-gray-400 mt-2">
              You can create a team or you can join one with the code;
            </p>
            <button
              type="button"
              className="w-[40%] py-[15px] px-5 text-white bg-[#3d72fe] border-0 cursor-pointer m-0 outline-0 flex items-center justify-center relative select-none no-underline align-middle rounded hover:bg-[#2E5AD4] hover:shadow-md shadow-sm text-base font-medium btn-trans mb-5 mt-3"
              onClick={() => openDialog()}
            >
              Create Team
            </button>
            <button
              type="button"
              className="w-[40%] py-[15px] px-5 text-[#3d72fe] bg-white cursor-pointer m-0 outline-0 flex items-center justify-center relative select-none no-underline align-middle rounded hover:border-[#2E5AD4] hover:border border-2 hover:shadow-md shadow-sm text-base font-medium btn-trans"
              onClick={() => joinDialog()}
            >
              Join Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyTeam;
