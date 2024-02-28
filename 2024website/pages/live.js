import React from 'react';
import { Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import GenericLayout from '../components/GenericLayout.js';
import CountdownTimer, { CountdownLive } from '../components/live/CountdownTimer.js';
import { HappeningNow } from '../components/live/HappeningNow.js';
import eventData from '../public/data/schedule.json';
import ImportantButtonGroup from '../components/live/ImportantButtonGroup.js';
import LocationInfoTab from '../components/live/LocationInfoTab.js';
import PrizesInfo from '../components/live/PrizesInfo.js';
const Live = ({ selectedTheme, isWideWindow }) => {
    return (
        <div>
            <GenericLayout
                isWideWindow={isWideWindow}
                selectedTheme={selectedTheme}
                title="Live"
            >
                {/* timer  */}
                <Card elevation={0} sx={{
                    background: "#FFFFF", // Set background color
                    fontFamily: "ProximaNova", // Use ProximaNova font
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignContent: "center",
                    alignItems: "center",
                    borderRadius: "1rem", // Smaller border radius
                    margin: "1rem", // Add spacing between cards
                    padding: "1rem", // Smaller padding
                    boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
                    transition: "all 0.2s ease-in-out",
                    height: "90%", // Ensure cards take up all available vertical space
                }}>
                    <CountdownLive />
                    <Divider
                        sx={{ color: '#96d0ff', mt: 1, mb: 1 }}
                    />
                    {/* happening now */}
                    <HappeningNow selectedTheme={selectedTheme} events={eventData.filter(event => event.Type === 'Day-of')} />
                </Card>
                {/* four different links */}
                <ImportantButtonGroup />
                {/* venture map and directions  */}
                <br />
                <br />
                <br />
                <div style={{
                    justifyContent: 'center',
                    alignItems: "center",
                    width: '100%', // Use `width` instead of `maxWidth` for full width
                    padding: '1rem',
                    spacing: '1rem'
                }}>
                    <Typography color={selectedTheme == 'dark' ? '#eda901' : '#1876bd'} variant='h3' style={{ textAlign: 'center' }}> {/* Center text alignment for Typography */}
                        Logistics
                    </Typography>
                    <br />
                    <LocationInfoTab selectedTheme={selectedTheme} isWideWindow={isWideWindow}/>
                </div>
                <br />
                {/* prizes  */}
                <div style={{
                    justifyContent: 'center',
                    alignItems: "center",
                    width: '100%', // Use `width` instead of `maxWidth` for full width
                    padding: '1rem',
                    spacing: '1rem'
                }}>
                    <Typography color={selectedTheme == 'dark' ? '#eda901' : '#1876bd'} variant='h3' style={{ textAlign: 'center' }}> {/* Center text alignment for Typography */}
                        Prizes
                        
                    </Typography>
                    <br />
                    <PrizesInfo isWideWindow={isWideWindow} />
                </div>

            </GenericLayout>

        </div>
    );
};

export default Live;
