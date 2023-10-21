import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './SystemsSelection.css'
import { SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SystemsSelection() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(6)).map((_, index) => (
          <Grid className='grid-item' item xs={2} sm={4} md={4} key={index}>
            <a href="dashboard">
              <Item>
                <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 3h14v18l-1.032-.884a2 2 0 0 0-2.603 0L14.333 21l-1.031-.884a2 2 0 0 0-2.604 0L9.667 21l-1.032-.884a2 2 0 0 0-2.603 0L5 21V3Zm10 4H9m6 4H9m6 4h-4"/></svg>
                </SvgIcon>
              </Item>
            </a>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}