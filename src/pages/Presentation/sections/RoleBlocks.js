/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
// import AddTaskIcon from "@mui/icons-material/AddTask";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function RoleBlocks() {
  const renderData = data.map(({ company, description, items, date }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={company}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {company}
          </MKTypography>
          <MKTypography variant="body1" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {date}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
        {/* <Grid container spacing={3}> */}
        {items.map(({ responsibilities }, i) => (
          <Stack key={i}>
            {responsibilities.map((r, i) => (
              <MKBox display="flex" alignItems="center" p={1} key={i}>
                <MKTypography variant="body2" color="text" pl={2}>
                  <MKTypography
                    variant="body3"
                    fontWeight="regular"
                    color="secondary"
                    mb={1}
                    pr={2}
                  >
                    {r}
                  </MKTypography>
                </MKTypography>
              </MKBox>
            ))}
          </Stack>
        ))}
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            // badgeContent="Infinite combinations"
            container
            sx={{ mb: 2 }}
          />
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default RoleBlocks;
