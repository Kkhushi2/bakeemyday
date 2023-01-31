import { dividerClasses } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import "./Build.css"
export const Build = () => {
  return (
     <div className='main_followus'>
        <Grid container spacing={0}>
        <Grid item xs={6} style={{borderRadius:'20px'}}>
             <div className='side1'>
             <div><TextField id="standard-basic" label="Name" variant="standard" fullWidth /></div>
             <div><Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="age"
          label="Age"
          
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </div>
             <div><TextField id="standard-basic" label="Address" variant="standard" fullWidth /></div> 
              
             </div>

        </Grid>
        <Grid item xs={6} ></Grid>
        </Grid>
     </div>
  )
}
