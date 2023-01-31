import React from 'react'
import { useState } from 'react';
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
const TopBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    
  return (
    <div>
         <AppBar position="static" style={{ backgroundColor: 'black',boxShadow:"none" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              display: { xs: 'block', sm: 'none' },
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  style={{color:'#ffff'}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bake My Day
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar

