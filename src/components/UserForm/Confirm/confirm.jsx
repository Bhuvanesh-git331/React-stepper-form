import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ListItem, List, ListItemText } from '@mui/material';
import './confirm.scss';


export default function Confirm(props) {
  const { userForm: { firstName, lastName, email, occupation, city, bio }, handleContinue,
    handleBack } = props
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  const btnStyle = {
    button1: {
      margin:20,
      backgroundColor:'green',
      color:'#fff'
    },
    button2: {
   
      backgroundColor:'blue',
     margin:20,
      color:'#fff'
    }
  }

  const style = {
   display:'flex',
    backgroundColor:'#f2c6bb',
    margin:0,
    flexDirection:'column',
    width:'400px',
    justifyContent:'center',
    alignItems:'center'
  };

  return (
    <div >
    <Button  onClick={handleOpen}>Click here to view Details</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className='modal'
    >
      <Box sx={style}>
      <List>
        <ListItem>
          <ListItemText
            primary='First Name'
            secondary={firstName}
          />

        </ListItem>
        <ListItem>
          <ListItemText
            primary='Last Name'
            secondary={lastName}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Email'
            secondary={email}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Occupation'
            secondary={occupation}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='City'
            secondary={city}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Bio'
            secondary={bio}
          />
        </ListItem>

      </List>

      <br />

      <Button
        style={btnStyle.button1}
        onClick={handleContinue}
        variant='contained'>
        Confirm And Continue
      </Button>

      <Button
        variant='outlined'
        style={btnStyle.button2}
        onClick={handleBack}>
        Back
      </Button>
      </Box>
    </Modal>
  </div>
  )
}
