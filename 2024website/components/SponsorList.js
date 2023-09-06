import React, { useState, useEffect } from "react";
import { Grid, Link } from "@mui/material";
import { SPREADSHEET_ID, API_KEY } from "../config";

// Replace with your Google Sheets API credentials
const TAB_ID = "1871449303"; // Specify the GID of the desired tab

const SponsorList = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    // Fetch data from Google Sheets API for the specified tab (gid)
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${TAB_ID}?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Assuming the first row contains column headers
        const headers = data.values[0];
        const sponsorData = data.values.slice(1);

        // Map data to objects with named properties
        const formattedSponsors = sponsorData.map((rowData) => {
          const sponsor = {};
          headers.forEach((header, index) => {
            sponsor[header] = rowData[index];
          });
          return sponsor;
        });

        setSponsors(formattedSponsors);
      })
      .catch((error) => {
        console.error("Error fetching sponsor data:", error);
      });
  }, []);

  return (
    <Grid container spacing={2} style={{ backgroundColor: "#9bb159" }}>
      {sponsors.map((sponsor, index) => (
        <Grid item key={index}>
          <Link
            href={sponsor["Sponsor Site URL"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sponsor["Sponsor Image URL"]}
              alt={sponsor["Sponsor Title"]}
              style={{ maxWidth: "100px" }}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default SponsorList;
