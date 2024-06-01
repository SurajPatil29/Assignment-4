import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {LoadingIndicator} from "../../Componants/LoadingIndicator"
import {ErrorIndicator} from "../../Componants/ErrorIndicator"

function TicketCreate(){
  let [title, setTitle] = useState("")
  let [disc, setDisc] = useState("")
  let [assignee, setAssignee] = useState("")
  let [status, setStatus] = useState("")
  let [priority, setPriority] = useState("")
  let navigate = useNavigate()
  let [loading, setLoading] = useState(false)
  let [err, setErr] = useState(false)


  async function handleSubmit(){
    setLoading(true)
    let ticketData = {
      title:title,
      description : disc,
      assignee :assignee,
      status : status,
      priority : priority
    }
    try {
      let res = await axios({
        method:"post",
        url: "https://06a267e2-9688-4491-8f20-a40a7384e2df-00-2a3vamjj2bqce.pike.repl.co:3000/tickets",
        data : ticketData
       
      })
       console.log(res)
      setLoading(false)
      if (res.status === 201) {
        navigate(`/tickets`);
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
    <div>
      <label>
         Title :
        <input placeholder="Enter Title" value={title} onChange={(e)=> setTitle(e.target.value)} />
      
      </label><br /><br />

      <label>
        Discription :
         <textarea placeholder="Enter Discription" value={disc} onChange={(e)=> setDisc(e.target.value)} />
      </label><br /><br />

      <label>
        Select Assignee :
          <select placeholder="Assignee" value={assignee} onChange={(e)=> setAssignee(e.target.value)} >
             <option value="rahul">Rahul</option>
            <option value="sakshi">Sakshi</option>
            <option value="varun">Varun</option>
            <option value="abdul">Abdul</option>
            <option value="saharan">Saharan</option>
          
          </select>
        </label><br /><br />

      <label>
        Select Status :
        <select value={status} onChange={(e)=> setStatus(e.target.value)} >
           <option value="Pending">Pending</option>
          <option value="Progress">Progress</option>
          <option value="Completed">Completed</option>

        </select>
        </label><br /><br />

      <label>
        Select Priority :
        <select value={priority} onChange={(e)=> setPriority(e.target.value)} >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>

        </select>
        </label><br /><br />

      <button onClick={handleSubmit}>Submit</button>
    
    </div>
  )
}

export {TicketCreate}