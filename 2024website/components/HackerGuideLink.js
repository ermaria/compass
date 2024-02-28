import { Link, Typography } from '@mui/material';

export const HackerGuideLink = ({selectedTheme}) => {
    return (
        <Typography
          variant="h4"
          color={selectedTheme === "dark" ? "#F5EDC9" : "#1876bd"}
          align="center"
          pb={2}
        >
          Check out our {" "}
          <Link
            color="#F5EDC9"
            href="https://uncph.notion.site/Pearl-Hacks-Hacker-Guide-2024-c40733adb2144fe08393de505f7d0184?pvs=4"
            style={{
              textDecoration: "none",
              backgroundColor: "#eda901",
              padding: "2px 5px",
              borderRadius: "15px",
            }}
          >
            Pearl Hacks 2024 Hacker Guide
          </Link>
          {" "} for more information!
         
          </Typography>
    )
}