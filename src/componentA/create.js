import * as React from 'react';
import {Link} from "react-router-dom" 
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import { useState,useEffect } from 'react';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';



function Man(){

  const [table,setTable]= useState([]);

  const Getapi= async () => {
    const data1 = await fetch("https://62ed387ea785760e67675a64.mockapi.io/schoolmanagement");
    const data = await data1.json();
    setTable(data);
  }

  useEffect(() => {
    Getapi()
}, []);

//delete 
  const deleteuser= async (id) => {
   await fetch(`https://62ed387ea785760e67675a64.mockapi.io/schoolmanagement/${id}`,{method:"DELETE"})
   Getapi()
  }
  

  const navigate= useNavigate()
  const updateUser=async({id,name,subject,email,gender,place})=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("subject",subject)
     localStorage.setItem("email",email)
     localStorage.setItem("gender",gender)
     localStorage.setItem("place",place)
     navigate("/update")


  }

    return(
       <div>
       <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className='addstudent'>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          <b>STUDENT LIST</b>
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        <Link to="/create" className='button'><Button variant="contained" size="small" endIcon={<AddIcon />}>
          ADD STUDENT
          </Button></Link>
          </Typography>
        </div>
      
        <Typography>


        <table>
          <thead>
            <tr>
              <th><b>NAME</b></th>
              <th><b>SUBJECT</b></th>
              <th><b>PLACE</b></th>
              <th><b>EMAIL</b></th>
              <th><b>GENDER</b></th>
              <th><b>UPDATE</b></th>
              <th><b>DELETE</b></th>
            </tr>
          </thead>


          <tbody>
            {table.map(item=>
              <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.email}</td>
              <td>{item.place}</td>
              <td>{item.gender}</td>
              <td><button onClick={() => updateUser(item) }><EditIcon /></button></td>
              <td><button onClick={()=> deleteuser(item.id)}><DeleteIcon /></button></td>
            </tr>
            )
            }
          
          

          </tbody>
        </table>



        </Typography>
       
     
      </CardContent>

    </Card>

       </div> 
    );
}

export default Man;