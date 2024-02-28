import React, { useState } from 'react';
import { Tabs, Tab, Grid, Typography, Link } from '@mui/material';
import map2 from '../../public/images/venue/venue-map-2.png'
import map3 from '../../public/images/venue/venue-map-3.png'
import menu from '../../public/images/MenuSizedFinal.png'
import GoogleMap from './GoogleMap'

const VenueInfo = ({ selectedTheme, isWideWindow}) => {
    return (
        // Use a flex container for horizontal centering
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <img src={map2.src} alt='venue-map-2' style={{ maxWidth: '100%', height: 'auto' }} />
            <img src={map3.src} alt='venue-map-3' style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    )
}

const MenuInfo = ({ selectedTheme, isWideWindow }) => {
    return (
        // Use a flex container for horizontal centering
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <img src={menu.src} alt='menu' style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    )
}

const ParkingInfo = ({ selectedTheme, isWideWindow }) => {
    // Define a style object for the map container
   
    return (
        <div>
            <div>
            {/* Wrap GoogleMap in a div with applied styles for containment */}
            <GoogleMap />
            </div>
            <br />
            <Typography color={selectedTheme === "light" ? "#1876bd" : "#F5EDC9"}>
                <ul>
                    <li>Parking is free for all Pearl Hacks attendees in the <Link
            color="#F5EDC9"
            href="https://www.google.com/maps/dir/Bell+Tower+Parking+Deck,+Chapel+Hill,+NC/Woollen+Gymnasium,+South+Road,+Chapel+Hill,+NC/@35.9082111,-79.0502803,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89acc2eedc3bd00f:0x2dd3a16fc7f5b0c9!2m2!1d-79.0500641!2d35.9067103!1m5!1m1!1s0x89acc2ebb64d923f:0x46d0fc575842e791!2m2!1d-79.046014!2d35.9096999!3e2"
            style={{
              textDecoration: "none",
              backgroundColor: "#eda901",
              padding: "2px 5px",
              borderRadius: "15px",
            }}
          >Bell Tower Deck</Link>  starting at 5 pm on Friday February 23rd.</li>
                    <li>If you arrive at UNC before 5 pm on Friday, there are very few places to park that will be free. Most lots on campus require a permit and parking there between the hours of 7:30 AM - 5 PM on weekdays could result in the car being ticketed or towed.</li>
                    <li>All attendees must move their cars before 7:30 am on Monday February 26th, otherwise cars may be ticketed or towed.</li>
                </ul>
            </Typography>
        </div>
    );
}

const LocationInfoTab = ({ selectedTheme, isWideWindow }) => {
    const [selectedTab, setSelectedTab] = useState('Parking');

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

   
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
            <Tabs value={selectedTab} onChange={handleTabChange} variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                    justifyContent: 'center', alignItems: 'center', width: '100%',
                    // Responsive styling can go here
                    '.MuiTab-root': { // Targeting the Tab component
                        width: isWideWindow ? "33%" : '100%',
                        padding: 1, // Adjust padding as needed
                        // Add any additional styling you need for the tabs
                    }

                }}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: selectedTheme === 'dark' ? '#ffecac' : '#1B62B1',
                    }
                }}
                textColor={selectedTheme === 'dark' ? '#96d0ff' : '#1876bd'}
                indicatorColor={selectedTheme === 'dark' ? '#ffecac' : '#1B62B1'}
            >
                {['Parking','Venue Map','Menu'].map((label) => (
                    <Tab
                        key={label}
                        label={label}
                        value={label}
                        sx={{
                            fontWeight: selectedTab === label ? 'bold' : 'normal',
                            color: selectedTab === label ? (selectedTheme === 'dark' ? '#ffecac' : '#1B62B1') : (selectedTheme === 'dark' ? '#96d0ff' : '#1876bd') // Change the highlight color as needed
                        }}

                    />
                ))}
            </Tabs>
            <br />
            <br />
            <Grid container spacing={2}>
                {
                    selectedTab === 'Parking' ? <ParkingInfo selectedTheme={selectedTheme} /> : selectedTab === 'Venue Map' ?  <VenueInfo /> : <MenuInfo />
                }
            </Grid>
        </div>
    );
};

export default LocationInfoTab;
