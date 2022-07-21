import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Badge, Button, Divider, Fab } from '@mui/material';
import { Box } from '@mui/system';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;

const Register = () => {

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
                  <b>- Register -</b>
              </Typography>
              <Divider sx={{ pt:2 }}/>
            </Box>
            <Grid container spacing={2} sx={{ pt:2, pb:1 }} >                
                <Grid md={12} item >
                  <TextField fullWidth label="Name" sx={{ pb:2 }} />
                  <TextField fullWidth label="Email" sx={{ pb:2 }} />
                  <TextField fullWidth label="Username" sx={{ pb:2 }} />
                  <TextField fullWidth label="Password" sx={{ pb:2 }} />
                  <TextField fullWidth label="Password Confirmation" sx={{ pb:2 }} />

                  <Button variant="contained" size="medium" >
                    <AppRegistrationIcon></AppRegistrationIcon> &nbsp;<b>Register</b>
                  </Button>
                </Grid>
            

            </Grid>
            </Paper>

    </div>
  )
}

export default Register