import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {PrimaryButton} from '../CustomButton.js'
import SummarizeIcon from '@mui/icons-material/Summarize';
const ImportantButtonGroup = () => {
  return (
    <ButtonGroup fullWidth
    sx={{ maxWidth: '100%', '.MuiButton-root': { flexGrow: 1 } }}  aria-label="important links button group">
      <PrimaryButton href="https://bit.ly/PH24DISCORD" target="_blank" rel="noopener noreferrer">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img src={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png'} alt={'discord'} style={{ color: '#F5EDC9', width: 24, margin: 2 }} />
        Discord
        </div>
        </PrimaryButton>
      <PrimaryButton href="https://pearlhacks2024.devpost.com/" target="_blank" rel="noopener noreferrer">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img src={'https://cdn.icon-icons.com/icons2/2699/PNG/512/devpost_logo_icon_169279.png'} alt={'devpost'} style={{ width: 24, margin: 2 }} />
        Project Submissions
        </div>
      </PrimaryButton>
      <PrimaryButton href="https://uncph.notion.site/Pearl-Hacks-Hacker-Guide-2024-c40733adb2144fe08393de505f7d0184" target="_blank" rel="noopener noreferrer">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <SummarizeIcon style={{ width: 24, margin: 2, color: 'white' }} />
        Hacker Guide
        </div>
      </PrimaryButton>
      <PrimaryButton href="https://open.spotify.com/playlist/445RkFfufqWNlK6xTuBU23?si=4308079d210f42c4" target="_blank" rel="noopener noreferrer">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png'} alt={'devpost'} style={{ width: 24, margin: 2 }} />
        Spotify Playlist
        </div>
      </PrimaryButton>
    </ButtonGroup>
  );
};

export default ImportantButtonGroup;
