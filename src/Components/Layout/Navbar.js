import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';

const drawerWidth = 240;
const navItems = [];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ fontFamily: 'monospace', fontWeight: 700, my: 2 }}>
        MovieReview
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <ConnectedTvIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
      
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx = {
              {
                fontFamily: 'monospace', fontWeight: 700,
                flexGrow: 1,
                display: {
                  xs: 'none',
                  sm: 'block'
                }
              }
            }
          >
            MovieReview
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
            <Button href={`/`} sx={{ color: '#fff', pr:2 }}>
              HOME
            </Button>
            <Button href={`/movie/popular`} sx={{ color: '#fff' }}>
              POPULAR
            </Button>
            <Button href={`/movie/upcoming`} sx={{ color: '#fff' }}>
              UPCOMING
            </Button>
            <Button href={`/movie/top-rated`} sx={{ color: '#fff' }}>
              TOP RATED
            </Button>
            <Button href={`/login`} variant="outlined" size="medium" sx={{ backgroundColor: 'white', borderColor: 'orange' , color: '#1876D2', ml:3, mr:1 }}>
              <b>Login</b>
            </Button>
            <Button href={`/register`} variant="outlined" size="medium" sx={{ backgroundColor: 'white', borderColor: 'orange' , color: '#1876D2', mr:1 }}>
              <b>Register</b>
            </Button>

          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
