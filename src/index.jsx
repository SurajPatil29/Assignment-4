import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {AuthContextProvider} from "./Componants/AuthContextProvider"

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthContextProvider>
		 <ChakraProvider>
			 <BrowserRouter>
					<App />
				</BrowserRouter>
		 </ChakraProvider>
	</AuthContextProvider>

	 
		
	)