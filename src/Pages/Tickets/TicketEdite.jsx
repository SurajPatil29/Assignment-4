import {useEffect, useState} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { LoadingIndicator } from "../../Componants/LoadingIndicator"
import { ErrorIndicator } from "../../Componants/ErrorIndicator"


function TicketEdit(){
  let {id} = useParams()
  
  let [data, setData] = useState({
      id: "",
      title: "",
      description: "",
      assignee: "",
      status: "",
      priority: null
  })
  let { title, description, assignee, status, priority} = data
  let [loading, setLoading]= useState(false)
  let [err, setErr] = useState(false)


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
  },[id])

  async function updateFetch(){
    try {
     let res = await axios.put(`https://06a267e2-9688-4491-8f20-a40a7384e2df-00-2a3vamjj2bqce.pike.repl.co:3000/tickets/${id}`, data);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  
  if(loading){
    return <LoadingIndicator />
  }
  if(err){
    return <ErrorIndicator />
  }
  return(
    <div>
      <h3>Title : {title}</h3>
      <h4>Assignee : {assignee}</h4>
      <h4>Priority : {priority}</h4>
      <select value={status} onChange={(e) => setData({ ...data, status: e.target.value })} >
        <option value="" >Select</option>
        <option value="pending">Pending</option>
        <option value="progress">Progress</option>
        <option value="completed">Completed</option>
      </select>
      <p>Discription : {description}</p>
      <buton onClick={updateFetch}> Submit </buton>
    </div>

  )
}

export {TicketEdit}