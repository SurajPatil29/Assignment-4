import { Container, Heading, Input, VStack, Flex, Box } from "@chakra-ui/react"

import { useContext, useState } from "react";
import axios from "axios"
import {AuthContext} from "../../Componants/AuthContextProvider"
import {Navigate} from "react-router-dom"


function LogIn(){
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("")
  let {login, authDeatils : {isLogIn}} = useContext(AuthContext)


  async function handlesubmit(e) {
    e.preventDefault();
    console.log(email, password)

    try {
      let res = await axios({
        method: "post",
        url: "https://reqres.in/api/login",
        data: {
          email,
          password
        },
      });
      login(res?.data?.token)
      console.log(res);
    } catch (err) {
      console.log(err)
    }
  }

  if(isLogIn){
    return <Navigate to="/" />
  }

  return (
    <>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        >
        <Box>
        <Heading as="h4" size='md' align="center">Log In</Heading>
        <VStack>
          <form onSubmit={handlesubmit}>
            <label>
              Email:
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value) }
                  />
            </label>
            
            <br />
            <br />
            <label>
              Password:
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            
            <br />
            <br />
            <Input type="submit" />
          </form>
        </VStack>
          </Box>
      </Flex>
    
    </>
  );
}

export {LogIn}