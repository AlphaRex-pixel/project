import { TextField, Button, Box } from "@mui/material";
import {useState} from 'react';
import "./styles.css";

function Submit(){
    const [first,setFirst] = useState("");
    const [last,setLast] = useState("");
    const [email, setEmail] = useState("");
    const [items, setItems] = useState([]);

/*    const updateData = (e) =>{
        items.push(e.target.value)
        console.log(e.target.value)
}*/
   function displayLocal(){
        let login = {
            FirstName : first,
            LastName: last,
            Email: email
        }
        items.push(login);
        setItems(items);
        localStorage.setItem('login',JSON.stringify(login));
        localStorage.setItem('logins',JSON.stringify(items));
   }

    return(
        <div className="App">
            <Box sx={{
                mt: 15,
                ml: 65,
                gap: 2,
                position: "absolute",
                width: 300,
                height: 300,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                '&hover':{
                    backgroundColor: 'primary.main',
                    opacity: [0.9,0.8,0.7],
                }
            }}>
            <TextField label="First Name" type="text"
            value={first} variant="standard"
            sx={{ width: 200, ml:5}}
            onChange={(e) => setFirst(e.target.value)}
            placeholder="First Name" 
             required/>
            <TextField label="Last Name" type="text"
            value={last} sx={{ width: 200, ml:5}}
            onChange={(e) => setLast(e.target.value)}
            placeholder="Last Name" variant="standard" required/>
            <TextField type="email" label="Email"
            value={email} sx={{ width: 200, ml:5}}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" variant="standard" />
            
            <Button  type="submit" variant="contained" 
            onClick={displayLocal} sx={{ width: 200, ml:5, borderRadius: "5px"}}
            color="primary" >Submit</Button>
         </Box>
         </div>   
         
    )
}
export default Submit;