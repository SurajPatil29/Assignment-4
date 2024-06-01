import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { LoadingIndicator } from "../../Componants/LoadingIndicator"
import { ErrorIndicator } from "../../Componants/ErrorIndicator"
import {TicketCreate} from "./TicketCreate"



function Tickets(){
  let [data, setData] = useState()
  let [loading, setLoading]= useState(false)
  let [err, setErr] = useState(false)
  

  async function fetchTickets(){
    setLoading(true)
    try {
      let res = await axios({
        method: "get",
        url:"https://06a267e2-9688-4491-8f20-a40a7384e2df-00-2a3vamjj2bqce.pike.repl.co:3000/tickets"
      })
      console.log(res.data)
      setLoading(false)
      setData(res.data)
    } catch (error) {
     setErr(true)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchTickets()
  },[])
  if(loading){
    LoadingIndicator()
  }
  if(err){
    ErrorIndicator()
  }
  return(
    <>
      <div>
       <Link to={`/ticketcreate`}>Create New Ticket</Link>
      </div><br />
      <div>
        {data && data.map((obj) => (
          <div key={obj.id}>
            <h3>{obj.title}</h3>
            <h4>{obj.assignee}</h4>
            <h4>{obj.status}</h4>
            <Link to={`/ticketview/${obj.id}`}>View</Link>
            <br />
            <Link to={`/ticketedit/${obj.id}`}>Update</Link>
            <br /><br />
          </div> 
          
        ))}
      </div>
    </>
    
    
  )
}

export {Tickets}