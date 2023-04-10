import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { getUser } from "@/shared/helpers/user";
import { UserContextData, UserProps } from "@/shared/interfaces/user";

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProps>({
    email: "",
    password: "",
    name: "",
    typeUser: "",
  });

  const userSaved = getUser();

  useEffect(() => {
    setUser(userSaved);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
