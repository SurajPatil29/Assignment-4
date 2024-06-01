import {createContext, useState} from "react"

export const AuthContext = createContext()


export function AuthContextProvider({children }){

  let [authDeatils, setAuthDeatils] = useState({
    isLogIn : false,
    token : null
  })

  const login = (token) => {
    setAuthDeatils({
      isLogIn : true,
      token : token
    })
  }

  const logout = () => {
    setAuthDeatils({
      isLogIn : false,
      token : null
    })
  }

  return(
    <AuthContext.Provider value={{authDeatils, login, logout}}>
      {children }
    </AuthContext.Provider>
  )
}