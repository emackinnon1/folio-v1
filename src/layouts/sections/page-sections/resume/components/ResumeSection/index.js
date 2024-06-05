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
import MKTypography from "components/MKTypography";
import RoleBlocks from "pages/Presentation/sections/RoleBlocks";

// components
import FeaturedSkills from "pages/LandingPages/AboutMe/sections/FeaturedSkills";

function ResumeSection() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          {/* <Grid item xs={12} lg={5}> */}
          <MKTypography variant="h3" my={1}>
            Summary
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            As anyone can see from my resume, my background has been an unorthodox one. I went from
            studying neuro- psych to sales to teaching in a foreign country to finding my passion in
            engineering. As a Software Engineer, I&apos;ve spearheaded architecture designs and
            contributed to the pivotal services that drive business operations, working in the
            latest cloud-based platforms and architectures.
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            I like taking big-picture needs and ideas and turning them into solutions. It&apos;s
            easy to get lost in the nitty-gritty of the code, but the real challenge (to me at
            least) is navigating the balance between engineering the solutions with technical
            finesse at the level of the code while keeping one eye on the high-level path towards
            far-flung future goals.
          </MKTypography>
          <MKTypography variant="body2" color="text" mb={2}>
            <b>Scroll below to learn about my roles and skills</b>
          </MKTypography>
        </Grid>
        {/* <Grid item xs={12} lg={6.5}>
            <MKBox
              margin={15}
              component="img"
              src={bgImage}
              alt={"title"}
              borderRadius="lg"
              shadow="md"
              width="100%"
              position="relative"
              zIndex={1}
            />
          </Grid> */}
        {/* </Grid> */}
        <FeaturedSkills />
        <RoleBlocks />
      </Container>
    </MKBox>
  );
}

export default ResumeSection;
