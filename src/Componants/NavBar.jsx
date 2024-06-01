import{ Button, Link as ChakraLink, Flex } from "@chakra-ui/react"

import {Link as RouterLink} from "react-router-dom"
import {AuthContext} from "./AuthContextProvider"
import {useContext} from "react"


function NavBar(){
  let {authDeatils, logout} = useContext(AuthContext)
  const links =[
    { to:"/", label:"Home"},
    { to:"/about", label:"About"},
    { to:"/contact", label:"Contact"},
    { to:"/tickets", label:"Tickets"}
  ]

  return(
    <Flex 
      align = "center"
      justify = "space-around"
      background = "teal"
      color = "white"
      >
       {links.map((obj)=>(
         <ChakraLink as={RouterLink} key={obj.to} to={obj.to}>{obj.label}</ChakraLink>
       ))}
      {authDeatils?.isLogIn ? (
        <button onClick={logout}>LogOut</button>
      ) : (
        <ChakraLink as={RouterLink} to="/login">LogIn</ChakraLink>
      )}
      
    </Flex >
    
  )
}

export {NavBar}  