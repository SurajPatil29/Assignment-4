import { Alert, AlertIcon, AlertTitle, AlertDescription, Flex, Box } from "@chakra-ui/react";
function ErrorIndicator() {
  return (
    <Flex
      justifyContaint="center"
      >
      <Box>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Somthing went Wrong
          </AlertDescription>
        </Alert>
      </Box>
      
    </Flex>
    
  );
}
export {ErrorIndicator}