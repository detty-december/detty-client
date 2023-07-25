'use client'
import {useEffect, useState} from "react";
import AppBar from "../../../../components/AppBar";
import TopAppBar from "../../../../components/AppBar";
import { usePathname, useSearchParams } from 'next/navigation'
import { TextField, Button, Container, Typography } from '@mui/material';


export default  function Home() {
    const pathname = usePathname()
    const [data, setData] = useState();
    const [eventName, setEventName] = useState('');
    const [eventSummary, setEventSummary] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleEventSubmit = (event) => {
        event.preventDefault();
        // Here, you can perform further actions, like submitting the form data to your backend API.
        console.log({
            eventName,
            eventSummary,
            eventLocation,
            eventDescription,
        });


        // Clear the form fields after submitting (optional)
        setEventName('');
        setEventSummary('');
        setEventLocation('');
        setEventDescription('');
    };
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/');
            const data = await response.json();
            setData(data);
        } catch (error) {}
    };
    return (
        <div>
           <TopAppBar
               location={pathname}
           />
            <Container maxWidth="sm"
                sx={{
                    paddingTop:{md: '30px', lg: '50px'}
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Add Your Event
                </Typography>
                <form onSubmit={handleEventSubmit}>
                    <TextField
                        label="Event Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Summary of the Event"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={eventSummary}
                        onChange={(e) => setEventSummary(e.target.value)}
                        required
                    />
                    <TextField
                        label="Event Location"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        required
                    />
                    <TextField
                        label="Full Event Description"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Add Event
                    </Button>
                </form>
            </Container>
        </div>
    )
}
