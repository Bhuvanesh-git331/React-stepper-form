import React from 'react';
import { TextField } from '@mui/material';
import CustomButton from '../../Buttons/button';
import './formdetails.scss';


export default function FormUserDetails(props) {
  const { handleChange, userForm, handleContinue } = props

  return (

    <div className='userDetails'>
      <div className='inputfield'>
      <TextField
        placeholder='Enter your first name'
        name='firstName'
        fullWidth
        value={userForm.firstName ? userForm.firstName : ''}
        onChange={handleChange('firstName')}
        sx={{
          backgroundColor:'#fff',
          borderRadius:'50px'
        }}
      />

      <br />
      <TextField
        placeholder='Enter your Last name'
        name='lastName'
        fullWidth
        value={userForm.lastName || ''}
        onChange={handleChange('lastName')}
        sx={{
          backgroundColor:'#fff',
          borderRadius:'50px'
        }}
      />

      <br />
      <TextField
        placeholder='Enter your Email'
        name='email'
        fullWidth
        value={userForm.email || ''}
        sx={{
          backgroundColor:'#fff',
          borderRadius:'50px'
        }}
        onChange={handleChange('email')}
      />
      </div>

      <br />
      <div className='continueBtn'>
      <CustomButton
        handleContinue={handleContinue} />
      </div>
     

    </div>
  )
}
