// In the shapes.js file

import React from 'react';
import { Box} from '@mui/material';

const EggShape = ({ color, label, isWideWindow }) => {
    return (
        <Box
          sx={{
            bgcolor: color,
            width: isWideWindow ? '75px' :'50px',
            height: isWideWindow ? '75px' :'50px',
            display: 'flex',
            justifyContent: 'center',
            fontFamily: "CaviarDreams",
            fontWeight: 700,
            alignItems: 'center',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            transform: 'scale(1, 1.2)', // This scales the circle to an egg shape
            position: 'relative',
            '&::after': {
              content: `"${label}"`,
              position: 'absolute',
              top: isWideWindow ? '30px' : '15px',
              fontWeight: 'bold',
              color: '#F5EDC9',
            },
          }}
        />
      );
}
const PodiumShape = ({ color, label, height, component, isWideWindow }) => {
  return (
    <Box
      sx={{
        bgcolor: color,
        width: isWideWindow ? '200px' : '90px',
        height: height,
        fontFamily: "CaviarDreams",
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        '&::after': {
          content: `"${label}"`,
          position: 'absolute',
          textAlign: 'center', // Ensure multi-line text is centered
          top: '20px',
          fontWeight: 'bold',
          color: '#F5EDC9',
        },
      }}
      component={component}
    />
  );
};

const Prize = ({ isWideWindow, color, rank, label, height}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <EggShape isWideWindow={isWideWindow} color={color}  label={rank} />
      <br />
      <PodiumShape isWideWindow={isWideWindow} color={color} label={label} height={height} />
    </Box>
  )
}

const PrizesInfo = ({ isWideWindow }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '100%' }}>
      <Prize isWideWindow={isWideWindow} color="#C68B59"  rank="3rd" label={"Kindle OR Canon 2 Mini Photo Printer"} height="125px" />
      <Prize isWideWindow={isWideWindow} color="#e3c30e"  rank="1st" label={"Nintendo Switch Lite OR Beats Studio Pro"} height="225px"/>
      <Prize isWideWindow={isWideWindow} color="#a89f8f"  rank="2nd" label={"JBL Flip 6 OR Expomaker Keyboard"} height="175px" />
    </Box>
  );
};

export default PrizesInfo;
