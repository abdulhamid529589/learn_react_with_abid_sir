import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BG1 from '../assests/amzing_feature/live_tracking.gif'
import BG2 from '../assests/amzing_feature/engine.gif'
import BG3 from '../assests/amzing_feature/geo_fence.gif'
import BG4 from '../assests/amzing_feature/mileage.gif'
import BG5 from '../assests/amzing_feature/notification.gif'
import BG6 from '../assests/amzing_feature/speed_voilation.gif'
import BG7 from '../assests/amzing_feature/street_view.gif'
import BG8 from '../assests/amzing_feature/traffic.gif'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
export default function WebFeatureAdd() {
  return (
    <>
      <Box sx={{ width: '100%', marginBottom:'80px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={3}>
          <img src={BG1} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Live Tracking</h3>
        </Grid>
        <Grid size={3}>
          <img src={BG2} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Engine</h3>
        </Grid>
        <Grid size={3}>
          <img src={BG3} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Geo Fence</h3>
        </Grid>
        <Grid size={3}>
          <img src={BG4} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Mileage</h3>
        </Grid>
        <Grid size={3}>
          <img src={BG5} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Notification</h3>
        </Grid>
        <Grid size={3}>
          <img src={BG6} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Speed Voilation</h3>
        </Grid>
        <Grid size={3}>
          <img src={BG7} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Street View</h3>
        </Grid>
        <Grid size={3}>
          <img src={BG8} alt="" style={{width:"100px", height:"100px", marginLeft:"60px"}}/>
          <h3 style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"-20px"}}>Traffic</h3>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
