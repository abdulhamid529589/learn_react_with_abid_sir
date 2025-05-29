
import './AmazingFeature.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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

export default function Amazing_Feature() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid className='amazingFeature' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
        <Grid size={4}>
          <Item>1</Item>
        </Grid>
        <Grid size={4}>
          <Item>2</Item>
        </Grid>
        <Grid size={4}>
          <Item>3</Item>
        </Grid>
        <Grid size={4}>
          <Item>4</Item>
        </Grid>
        <Grid size={4}>
          <Item>4</Item>
        </Grid>
        <Grid size={4}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
