
import {useContext} from "react"
import { AuthContext } from "./AuthContextProvider"
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
  let {authDeatils} = useContext(AuthContext)

  if(!authDeatils?.isLogIn){
    return <Navigate to="/login" />
  }

  return children
}

export {PrivateRoute}