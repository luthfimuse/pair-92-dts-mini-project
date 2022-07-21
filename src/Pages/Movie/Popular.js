import React from 'react'
import {
    useEffect,
    useState
} from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

const Index = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const handleData = async () => {
        const url = process.env.REACT_APP_MOVIE_URL
        const api_key = process.env.REACT_APP_MOVIE_TOKEN
        const response = await fetch(`${url}/movie/popular?api_key=${api_key}`)
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
    }, [])
  return (
    <>
    {loading ? <div>Loading...</div> : ( 
        data &&
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sx={{ pb:2 }}>
                     <Typography sx={{ textAlign:'center' }} variant="h4">
                        <b>- Popular -</b>
                    </Typography>
                     <Divider sx={{ pt:2 }}/>
                </Grid>
            {data.results.map((item, index) => {
                return (
                <Grid item xs={3} sx={{ p:2 }} key={index}>
                <Card sx={{ maxWidth: 345 }} >
                    <CardMedia
                        component="img"
                        height="140"
                        image={`https://image.tmdb.org/t/p/original/${item.poster_path}?api_key=2a63e0839bd2e98bec62754b647863b4`}
                        alt="x"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="button" component="div">
                           <b> {item.title}</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Release Date : {item.release_date}
                        </Typography>
                        <Typography gutterBottom variant="body2">
                            Rate :  {item.vote_average}
                        </Typography>
                        <Button variant="contained" size="small" href={`/movie/${item.id}`}>
                            See Detail
                        </Button>
                    </CardContent>
                </Card>
                </Grid>
                );
            })}
                </Grid> 
            </Box>
        </div>
    )} 
    </>
  )
}

export default Index