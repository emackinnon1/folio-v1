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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import table from "assets/images/table-motor.gif";

function ProjectCards() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={table}
              title="Raspberry pi pico table motor"
              description="All the pictures on this website were taken by me!"
              action={{
                type: "external",
                route: "https://github.com/emackinnon1/pico-table-motor",
                label: "See the writeup",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProjectCards;
