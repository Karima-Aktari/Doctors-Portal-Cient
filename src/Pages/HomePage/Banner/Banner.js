import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Typography, Button } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,

    }

    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 450,

    }
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile<br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 14, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus harum in quo placeat ab totam quasi, minima maiores quidem odit.
                        </Typography>
                        <Button style={{ backgroundColor: '#32CFC1' }} variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;