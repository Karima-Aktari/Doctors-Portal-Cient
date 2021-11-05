import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor minus quas nam voluptate, vero animi libero officia, dolores rem fugit, obcaecati saepe laboriosam tempora debitis!',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor minus quas nam voluptate, vero animi libero officia, dolores rem fugit, obcaecati saepe laboriosam tempora debitis!',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor minus quas nam voluptate, vero animi libero officia, dolores rem fugit, obcaecati saepe laboriosam tempora debitis!',
        img: whitening
    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h6" component="div" color="text.secondary">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div" color="text.secondary">
                    SERVICES WE PROVIDED
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Services;