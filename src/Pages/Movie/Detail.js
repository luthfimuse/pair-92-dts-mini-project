import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Badge, Divider } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const Detail = () => {
    const {id} = useParams()

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    const handleData = async () => {
        const url = process.env.REACT_APP_MOVIE_URL
        const api_key = process.env.REACT_APP_MOVIE_TOKEN
        const response = await fetch(`${url}/movie/${id}?api_key=${api_key}`)
        const results = await response.json()

        setData(results)
        setLoading(false)
    }

    useEffect(() => {
        let subscribe = true;

        if (subscribe) {
            handleData()
        }

        return () => {
            subscribe = false;
        }
    }, [id])


  return (
    <div>
        {loading ? <div>Loading</div> :

            <Paper sx={{
                p: 2,
                margin: 'auto',
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ pb:2 }}>
                     <Typography sx={{ textAlign:'center' }} variant="h4">
                        <b>- Movie Detail -</b>
                    </Typography>
                     <Divider sx={{ pt:2 }}/>
                </Grid>
                <Grid item>
                <ButtonBase sx={{ width: 550 }}>
                    <Img alt="complex" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}?api_key=2a63e0839bd2e98bec62754b647863b4`} />
                </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title} 
                        <Badge color="primary" badgeContent={data.status} sx={{ pl:5 }}></Badge>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Genres : &nbsp;
                         {data.genres.map((item, index) => {
                            return (
                                <span key={index}>
                                    {item.name} &nbsp;
                                </span>
                            );
                        })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Release Date : {data.release_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Run Time : {data.runtime} Minutes
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', pt:2}}>
                        {data.overview }
                    </Typography>

                    </Grid>
                    
                </Grid>
                    
                </Grid>
            </Grid>

                <Grid item sx={{ pt:2 , pb:3}}>
                    <Typography sx={{ cursor: 'pointer', textAlign:'center' }} variant="h5">
                        " {data.tagline} "
                    </Typography>


                </Grid>

            </Paper>

            
        }
    </div>
  )
}

export default Detail