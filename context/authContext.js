import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [teams, setTeams] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        user,
        setUser,
        teams,
        setTeams,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
