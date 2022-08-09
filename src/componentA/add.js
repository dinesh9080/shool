import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState, } from 'react';
import "./update.css"
import { useNavigate } from 'react-router-dom';


function Add(){

    const [name,setname]=useState("")
    const [subject,setsubject]=useState("")
    const [email,setemail]=useState("")
    const [gender,setgender]=useState("")
    const [place,setplace]=useState("")

    const navigate=useNavigate()



   const updateUser= async()=>{
    await fetch(`https://62ed387ea785760e67675a64.mockapi.io/schoolmanagement/`,{method:"POST", headers:{"Content-Type":"application/json"},body:JSON.stringify({name,subject,email,gender,place})})
    navigate("/")
   }
  

    return(
        <div className='student'>
            <h2>ADD STUDENT</h2>
            <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '30ch' },
    }}
    noValidate
    autoComplete="off"
  >
 
     <TextField id="outlined-basic" label="Name" value={name}  variant="outlined" required onChange={(e)=>setname(e.target.value)}  /><br/>
    <TextField id="outlined-basic" label="subject" value={subject}  variant="outlined" required onChange={(e)=>setsubject(e.target.value)}  /><br/>
    <TextField id="outlined-basic" label="email" value={email}  variant="outlined" required onChange={(e)=>setemail(e.target.value)}  /><br/>
    <TextField id="outlined-basic" label="gender" value={gender}  variant="outlined" required onChange={(e)=>setgender(e.target.value)}  /><br/>
    <TextField id="outlined-basic" label="place" value={place}  variant="outlined" required onChange={(e)=>setplace(e.target.value)}  /><br/>
    <Button variant="contained" size='large' onClick={updateUser}>SUBMIT</Button>
   

  </Box>

   


        </div>
    )
}
export default Add