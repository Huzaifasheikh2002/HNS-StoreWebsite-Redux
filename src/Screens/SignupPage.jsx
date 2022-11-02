import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth ,db} from '../firebase';

import { collection, addDoc } from "firebase/firestore"; 


const SignupPage = () => {

  const [fullName,setFullname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  console.log(auth, "auth");

  const signupHandler=(e)=>{
    console.log("submit");
    const dbCollection =collection(db,"users")

    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(async(resolve)=>{
        console.log(resolve,"resolve");

      const obj={
        fullName,
        email,
      };
        await addDoc(dbCollection,obj);
    })
    .catch(error=>{
      console.log(error,"error");

    });
  };

  return (
  <section className='conatiner mt-5'>
  <h1 className='mb-5'>SignUp</h1>    
  <Form onSubmit={signupHandler}>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" 
      onChange={(e)=>{
        setFullname(e.target.value);
      }}
      />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" 
         onChange={(e)=>{
          setEmail(e.target.value);
        }}
      />
    </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
         onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</section>
   
  )
}

export default SignupPage;