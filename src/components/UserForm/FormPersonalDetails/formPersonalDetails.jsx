import React from 'react';
import { TextField } from '@mui/material';
import CustomButton from '../../Buttons/button';
import '../FormUserDetails/formdetails.scss';

export default function FormPersonalDetails(props) {
   const { handleChange, userForm, handleBack, handleContinue } = props

   return (
      <div className='userDetails'>
         <div className='inputfield'>
            <TextField
               placeholder='Enter Occupation'
               name='occupation'
               value={userForm.occupation ? userForm.occupation : ''}
               onChange={handleChange('occupation')}
               sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50px'
               }}
            />

            <br />
            <TextField
               placeholder='Enter Bio'
               name='bio'
               value={userForm.bio || ''}
               onChange={handleChange('bio')}
               sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50px'
               }}
            />

            <br />
            <TextField
               placeholder='Enter your City'
               name='city'
               value={userForm.city || ''}
               onChange={handleChange('city')}
               sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50px'
               }}
            />
         </div>
         <br />

         <div className='continueBtn'>
            <CustomButton handleContinue={handleContinue} handleBack={handleBack} />
         </div>
      </div>
   )
}
