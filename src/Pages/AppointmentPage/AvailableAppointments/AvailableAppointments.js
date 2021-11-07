import { Container, Grid, Typography, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';
// import Typography from '@mui/material';

const bookings = [
    {
        id: 1,
        name: "Teeth Orthodonices",
        time: "08.00 AM - 09.00 AM",
        space: 10,
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "09.00 AM - 10.00 AM",
        space: 8,
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "10.00 AM - 11.00 AM",
        space: 9,
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "11.00 AM - 12.00 AM",
        space: 5,
    },
    {
        id: 5,
        name: "Pediatric Dental",
        time: "06.00 AM - 07.00 AM",
        space: 10,
    },
    {
        id: 6,
        name: "Oral Surgery",
        time: "07.00 AM - 08.00 AM",
        space: 10,
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingsSuccess, setBookingsSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{ color: 'info.main', mb: 3 }} variant="h4" component="h2">Available Appointments on {date.toDateString()}</Typography>
            {bookingsSuccess && <Alert severity="success"> Bookings Successfully </Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        booking={booking}
                        setBookingsSuccess={setBookingsSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>

    );
};

export default AvailableAppointments;