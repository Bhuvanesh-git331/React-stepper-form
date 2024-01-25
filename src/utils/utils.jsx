
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import  './util.scss';


export function CustomeThemeProvider({children}){
 
   
    const theme={}

    return (
        <ThemeProvider theme={theme}>
        <AppBar position='static'>
        <Toolbar>
            <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
                <MenuIcon />
            </IconButton>
            <Typography className='header' variant='h6' component='div' sx={{flexGrow:1}}>
               {children.props && children.props.header}
            </Typography>
        </Toolbar>

    </AppBar>
    <div className='container'>
    {children}
    </div>
    
      </ThemeProvider>
    )


}