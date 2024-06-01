import {Spinner, Flex,Box} from "@chakra-ui/react"

function LoadingIndicator(){
  return(
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      >
      <Box>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>
    </Flex>
    
  )
}
export {LoadingIndicator}