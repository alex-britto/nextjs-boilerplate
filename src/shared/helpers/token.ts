export const getToken = () => localStorage.getItem("token")

export const setTokenLS = (token: string) =>
  localStorage.setItem("token", token)

export const clearToken = () => localStorage.removeItem("token")
