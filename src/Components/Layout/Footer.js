import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import StarsIcon from '@mui/icons-material/Stars';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <Box sx={{
        height: 85,
        backgroundColor: 'primary.main',
      }}>
      <BottomNavigation
      sx={{ pt:4, pb:4 }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Popular" icon={<StarsIcon />}/>
        <BottomNavigationAction label="Now Playing" icon={<PlayLessonIcon />} />
        <BottomNavigationAction label="Upcoming" icon={<FiberNewIcon />} />
        <BottomNavigationAction label="Top Rated" icon={<ThumbUpOffAltIcon />} />
      </BottomNavigation>
      <Typography variant="caption" display="block" gutterBottom sx={{ textAlign: 'center', color:'white' }}>
          <b>MovieReview</b> | Copyright@2022
      </Typography>
    </Box>
    </Paper>
  );
}
