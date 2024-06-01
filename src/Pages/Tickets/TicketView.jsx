import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
import {Link} from "react-router-dom"
import { LoadingIndicator } from "../../Componants/LoadingIndicator"
import { ErrorIndicator } from "../../Componants/ErrorIndicator"



function TicketView(){
  let {id} = useParams()

  let [data, setData] = useState()
  let [loading, setLoading]= useState(false)
  let [err, setErr] = useState()


  async function fetchTickets(){
    setLoading(true)
    try {
      let res = await axios({
        method: "get",
        url:`https://06a267e2-9688-4491-8f20-a40a7384e2df-00-2a3vamjj2bqce.pike.repl.co:3000/tickets/${id}`
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
    return <LoadingIndicator />
  }
  if(err){
    return <ErrorIndicator />
  }
  return(
    <>
      {data &&
        <div>
          <h3>Title : {data.title}</h3>
          <h4>Assignee : {data.assignee}</h4>
          <h4>Priority : {data.priority}</h4>
          <h4>Status : {data.status}</h4>
          <p>Discription : {data.description}</p>
          <Link to={`/ticketedit/${data.id}`}>Update</Link>
        </div>
      }
    </>
    
    
   
  )
}

export {TicketView}