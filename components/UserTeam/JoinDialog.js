import { DialogContent, DialogContentText, TextField } from "@material-ui/core";
import { useState } from "react";

const JoinDialog = ({ isOpen, onCreate, onClose }) => {
  const [teamCode, setTeamCode] = useState("");
  return (
    <>
      {isOpen && (
        <div id="dialogRoot" className="fixed z-[1300] inset-0">
          <div
            id="dialogBackdrop"
            className="opacity-[0.5] transition-opacity fixed inset-0 z-[-1] flex items-center justify-center bg-slate-400"
          ></div>
          <div className="h-full outline-0 flex items-center justify-center transition-opacity opacity-100">
            <div className=" max-w-[600px] flex flex-col max-height-dialog m-8 relative overflow-y-auto dialog-box-shadow rounded transition-shadow text-gray-600 bg-white">
              <div className=" flex-initial flex-shrink-0 m-0 px-6 py-4">
                <h2 className=" text-lg font-medium">Join Team</h2>
              </div>
              <DialogContent>
                <DialogContentText>
                  Ask the team builder for the class code, and then enter it
                  here.
                </DialogContentText>
                <TextField
                  name="teamCode"
                  onKeyPress={(event) =>
                    event.key === "Enter" &&
                    teamCode.length >= 2 &&
                    onCreate(teamCode)
                  }
                  onChange={(e) => {
                    setTeamCode(e.target.value);
                  }}
                  autoFocus
                  margin="dense"
                  id="teamcode"
                  label="Team Code"
                  type="number"
                  fullWidth
                />
              </DialogContent>
              <div className="flex items-center p-2 flex-initial flex-shrink-0 justify-end">
                <button
                  onClick={() => {
                    setTeamCode("");
                    onClose();
                  }}
                  className="h-[44px] text-[#3d72fe] py-[6px] px-2 rounded-[0.375rem] text-sm min-w-[64px] box-border font-medium transition uppercase hover:bg-gray-200"
                >
                  <span>CANCEL</span>
                </button>
                <button
                  id="createBtn"
                  onClick={() => {
                    onCreate(teamCode);
                    setTeamCode("");
                  }}
                  disabled={teamCode.length < 2}
                  className="h-[44px] bg-[#3d72fe] py-[6px] px-2 rounded-[0.375rem] text-sm min-w-[64px] box-border font-medium transition uppercase text-white ml-2 hover:bg-[#2E5AD4]"
                >
                  <span>JOIN TEAM</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinDialog;
