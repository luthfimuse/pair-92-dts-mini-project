import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button, Divider } from '@mui/material';
import { Box } from '@mui/system';

import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


const Login = () => {

  return (
    <div>
       
            <Paper sx={{
                p: 2,
                textAlign:'center',
                maxWidth:400,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
            <Box>
              <Typography  variant="h4">
                  <b>- Login -</b>
              </Typography>
              <Divider sx={{ pt:2 }}/>
            </Box>
            <Grid container spacing={2} sx={{ pt:2, pb:1 }} >                
                <Grid md={12} item >
                  <TextField fullWidth label="Username" sx={{ pb:2 }} />
                  <TextField fullWidth label="Password" sx={{ pb:2 }} />

                  <Button variant="contained" size="medium" >
                    <VpnKeyIcon></VpnKeyIcon> &nbsp;<b>Login</b>
                  </Button>
                </Grid>
            

            </Grid>
            </Paper>

    </div>
  )
}

export default Login