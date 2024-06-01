import { Routes, Route } from "react-router-dom"
import { About } from "../Pages/About/About.jsx"
import { Contact } from "../Pages/Contact/Contact.jsx"
import { Home } from "../Pages/Home/Home.jsx"
import { Tickets } from "../Pages/Tickets/Tickets.jsx"
import { LogIn } from "../Pages/LogIn/LogIn.jsx"
import {PrivateRoute} from "./PrivateRoutes.jsx"
import {TicketView} from "../Pages/Tickets/TicketView.jsx"
import {TicketEdit} from "../Pages/Tickets/TicketEdite.jsx"
import {TicketCreate} from "../Pages/Tickets/TicketCreate"


function AllRoutes(){
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute> } />
      <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      <Route path="/tickets" element={<PrivateRoute><Tickets /></PrivateRoute>} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/ticketview/:id" element={<PrivateRoute><TicketView /></PrivateRoute> } />
      <Route path="/ticketedit/:id" element={<PrivateRoute><TicketEdit /></PrivateRoute>} />
      <Route path="/ticketcreate" element={<PrivateRoute><TicketCreate /></PrivateRoute>} />
    
    </Routes>
  )
}

export {AllRoutes}