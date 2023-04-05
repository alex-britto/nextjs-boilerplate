import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import { UserContextData, UserProps } from "@/shared/interfaces/user"

import { clearToken, clearUser, getToken, getUser } from "@/shared/helpers"

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProps>({
    email: "",
    password: "",
    name: "",
    typeUser: "",
  })
  const [token, setToken] = useState<string>("")

  const tokenSaved = getToken()
  const userSaved = getUser()

  useEffect(() => {
    if (!tokenSaved) {
      if (window.location.pathname !== "/login")
        window.location.pathname = "/login"
      return
    }

    setToken(tokenSaved)
    setUser(userSaved)
  }, [tokenSaved])

  const logout = () => {
    clearToken()
    clearUser()
    window.location.pathname = "/login"
  }

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, logout }}>
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
