import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import EmptyTeam from "./EmptyTeam";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useSnackbar } from "notistack";
import Router, { useRouter } from "next/router";
import UserTeam from "./UserTeam";

const TeamContainer = ({ currentTab, index }) => {
  const { user, teams, setTeams } = useContext(AuthContext);
  console.log(teams, user);
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const onCreatedTeam = async (teamName) => {
    if (teamName === "") return;
    const teamCode = new Date().getUTCMilliseconds();
    let teamObj = {
      teamId: uuid(),
      author: user.id,
      name: teamName,
      code: teamCode,
      members: {
        admin: user.id,
        groupMembers: [user],
      },
    };
    const { data } = await axios.post(`/auth/addTeam/`, teamObj);
    if (data.user === "AUTH_FAIL") {
      enqueueSnackbar("Please Login", {
        variant: "error",
      });
      return router.push("/auth");
    }
    if (data.team) {
      setTeams((prev) => [...prev, data.team]);
      enqueueSnackbar("Team added successfully", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Inernal server error", {
        variant: "error",
      });
    }
  };

  const onJoinTeam = async (teamcode) => {
    if (teamcode === "") return;
    const { data } = await axios.put(`/auth/getTeam/`, { code: teamcode });
    if (data.user === "AUTH_FAIL") {
      enqueueSnackbar("Please Login", {
        variant: "error",
      });
      return router.push("/auth");
    }
    if (data.team) {
      if (teams.length === 0) {
        setTeams((prev) => [...prev, data.team]);
      } else {
        let index = teams.findIndex((team) => team._id === data.team_id);
        teams.splice(index, data.item, 1);
        setTeams(teams);
      }
      enqueueSnackbar("Team joined successfully", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("'Team not found, review the team code'", {
        variant: "error",
      });
    }
  };
  return (
    <>
      {currentTab === index &&
        (teams?.length === 0 ? (
          <EmptyTeam onCreatedTeam={onCreatedTeam} onJoinTeam={onJoinTeam} />
        ) : (
          <UserTeam team={teams} />
        ))}
    </>
  );
};

export default TeamContainer;
