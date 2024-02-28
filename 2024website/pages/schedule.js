import React from 'react';
import { Link, Typography } from '@mui/material';
import GenericLayout from '../components/GenericLayout.js';
import eventsData from '../public/data/schedule.json'; // Update the path to your JSON file
import { DayOfEventComponent, PreEventComponent } from '../components/schedule/EventCards.js';
import { HackerGuideLink } from '../components/HackerGuideLink.js';
import { canIDeployLiveNow, hasPearlHacksStarted } from '../components/hasPearlHacksStarted.js';

const Schedule = ({ selectedTheme, isWideWindow }) => {
  return (
    <div>
      <GenericLayout
        isWideWindow={isWideWindow}
        selectedTheme={selectedTheme}
        title="Schedule"
      >
        <HackerGuideLink selectedTheme={selectedTheme} />
        <Typography body1="p"
          color={selectedTheme === "dark" ? "#F5EDC9" : "#1876bd"}
          align="center"
          pb={5}>
              *Schedule is listed in Eastern Standard Time (EST)
            </Typography>
        <Typography
            variant="h3"
            color={"#eda901"}
            style={{ marginBottom: "20px" }}
          >
            {"Day-of Workshops"}
          </Typography>
      <PreEventComponent events={eventsData} />
      <br />
      <br />
      <Typography
            variant="h3"
            color={"#eda901"}
            style={{ marginBottom: "20px" }}
          >
            Day-of schedule
          </Typography>
      <DayOfEventComponent events={eventsData} selectedTheme={selectedTheme} />
      </GenericLayout>
    </div>
  );
};

export default Schedule;
