
import { useState } from 'react';
import './App.css';

function App() {
  const[fullname,setFullname]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confirmpass,setConfirpass]=useState("")
  const[error,setError]=useState(false);
  const[passerr,setPasserr]=useState(false);
  const[success,setSuccess]=useState(false);

  function Validation(e){
   if(fullname===""||email===""||password===""||confirmpass===""){
    setError(true);
    setPasserr(false)
    setSuccess(false)
   }
    else if(password.trim()!=confirmpass.trim()){
      setPasserr(true)
      setError(false)
      setSuccess(false)
   }
   else{
    setSuccess(true)
    setError(false)
    setPasserr(false)
   }
  }



  return (
    <>
  <div className='form'>
  <h1>Signup</h1>
  <input type="text" placeholder='Full Name' onChange={(e)=>setFullname(e.target.value)}/>
  <br />
  <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
  <br />

  <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
  <br />

  <input type="password" placeholder='Confirm Password' onChange={(e)=>setConfirpass(e.target.value)}/>
  <br />
  {success ? <p style={{ color: "rgba(71, 245, 88, 1)", fontSize: "24px" }}>Successfully Signed Up!</p> : ""}
  {error ? <p style={{ color: "rgba(227, 55, 55, 1)", fontSize: "24px" }}>Error : All the fields are mandatory</p> : ""}
  {passerr ? <p style={{ color: "rgba(227, 55, 55, 1)", fontSize: "24px" }}>Error : Password and confirm password should be matched!</p> : ""}


  <button className='btn' onClick={Validation}>Signup</button>
  </div>


    </>
 
  );
}

export default App;
