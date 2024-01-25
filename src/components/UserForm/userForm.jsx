import React, {useState} from 'react'
import {CustomeThemeProvider} from '../../utils/utils';
import FormUserDetails from './FormUserDetails/formUserDetails';
import FormPersonalDetails from './FormPersonalDetails/formPersonalDetails';
import Confirm from './Confirm/confirm';
import Success from './Success/success';

export default function UserForm(props) {
  const [step, setStep]=useState(1)
  const [userForm, setUserForm]=useState({
    firstName:'',
    lastName:'',
    email:'',
    occupation:'',
    city:'',
    bio:''
  })

  //Proceed to next step
  const nextStep=()=>{
  setStep((prev)=> prev+1)
  }

  //Goback to previous step
  const prevStep=()=>{
    setStep((prev)=>prev-1)
  }

  //handle fields change
  const handleChange=input=>e=>{
    setUserForm((prev)=>({...prev, [input]:e.target.value}))
  }

  const handleContinue=(e)=>{
    e.preventDefault()
    nextStep()
}

const handleBack=(e)=>{
  e.preventDefault()
  prevStep()
}
 
  switch(step) {
    case 1 : 
     return (
      <CustomeThemeProvider >
        <FormUserDetails 
      header={'Enter User Details'}
      handleChange={handleChange}
      userForm={userForm}
      handleContinue={handleContinue}
      />
      </CustomeThemeProvider>
     )
     case 2: 
     return (
      <CustomeThemeProvider>
      <FormPersonalDetails 
      header={'Enter Personal Details'}
      handleChange={handleChange}
      userForm={userForm}
      handleContinue={handleContinue}
      handleBack={handleBack}
      />
      </CustomeThemeProvider>
     )
     case 3: 
     return (
      <CustomeThemeProvider>
      <Confirm 
      userForm={userForm}
      header={'Confirm User Details'}
      handleContinue={handleContinue}
      handleBack={handleBack}
      />
      </CustomeThemeProvider >
     )
     
   
     case 4:
    return (
      <CustomeThemeProvider>
        <Success  header={'SuccessFully Registered'} />
      </CustomeThemeProvider>
    )
  }
}
