import React from 'react';
import { Grid, Typography, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)(({ selectedTheme, isWideWindow }) => ({
    boxShadow: 'none',
    width: '100%',
    margin: '1rem',
    overflow: 'auto', // Hide the overflow to respect border radius
}));

const StyledHeaderCell = styled(TableCell)(({ selectedTheme }) => ({
    backgroundColor: selectedTheme == 'dark' ? '#0D4968' : "#7EC7E0", // Header background color
    color: selectedTheme == 'dark' ? '#F5EDC9' : '#1876BD', // Header text color
    fontSize: '1rem',
    fontFamily: "ProximaNova", // Use ProximaNova font
    fontWeight: 'bold',
    borderBottom: selectedTheme == 'dark' ? '2px solid #0D4968' : '2px solid #7EC7E0'
}));

const StyledBodyCell = styled(TableCell)(({ selectedTheme }) => ({
    backgroundColor: selectedTheme == 'dark' ? '#1876BE' : '#ffecac', // Body background color
    color: selectedTheme == 'dark' ? '#F5EDC9' : '#1876BD', // Header text color
    fontFamily: "ProximaNova", // Use ProximaNova font
    fontSize: '1rem',
    borderBottom: selectedTheme == 'dark' ? '2px solid #0D4968' : '2px solid #7EC7E0'
}));

const isEventHappeningNow = (event) => {
    const eventDate = event['Day'] == 'Saturday, Feb. 24th' ? '2024-02-24' : 'Sunday, Feb. 25th' ? '2024-02-25' : '2024-02-23';

    // Convert "Start Time" and "End Time" from 12-hour AM/PM format to 24-hour format
    // This function is a placeholder for the conversion logic.
    const convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return `${hours}:${minutes}`;
    };
    if (eventDate.length > 0) {
        const now = new Date();
        const startTime24 = convertTime12to24(event["Start Time"]);
        const endTime24 = event["End Time"] ? convertTime12to24(event["End Time"]) : convertTime12to24(event["Start Time"]);

        const startDate = new Date(`${eventDate}T${startTime24}`);
        const endDate = new Date(`${eventDate}T${endTime24}`);

        return now >= startDate && now <= endDate;
    }
    return None
};

export const HappeningNow = ({ events, selectedTheme, isWideWindow }) => {
    // Filter events to only those happening now
    const happeningNowEvents = events.filter(event => isEventHappeningNow(event));
    if (happeningNowEvents.length > 0) {
        return (
            <Grid container alignItems="center" justifyContent="center">
                <Divider color={selectedTheme == 'dark' ? "#0D4968" : '#1876BD'}   sx={{ width: '75%'}} />
                <Typography variant='h3' sx={{ textAlign: 'center', padding: '20px', color: '#E29600' }}>
                    HAPPENING NOW
                </Typography>
                <StyledTableContainer isWideWindow={isWideWindow} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledHeaderCell selectedTheme={selectedTheme}>Time</StyledHeaderCell>
                                <StyledHeaderCell selectedTheme={selectedTheme}>Event</StyledHeaderCell>
                                <StyledHeaderCell selectedTheme={selectedTheme}>Location</StyledHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {happeningNowEvents.map((event, index) => (
                                <TableRow selectedTheme={selectedTheme} key={index}>
                                    <StyledBodyCell selectedTheme={selectedTheme} component="th" scope="row">
                                    {event["Start Time"]} - {event["End Time"]}
                                    </StyledBodyCell>
                                    <StyledBodyCell selectedTheme={selectedTheme}>{event.Event}</StyledBodyCell>
                                    <StyledBodyCell selectedTheme={selectedTheme}>{event.Location}</StyledBodyCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
                
            </Grid>)

    };
};
