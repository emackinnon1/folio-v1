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

import { Link } from "react-router-dom";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/tetons.jpg";
import bgBack from "assets/images/foggy-morning-trees.jpg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Check out my
                    <br />
                    work history
                  </>
                }
                description=""
              />
              <RotatingCardBack
                image={bgBack}
                title="To know a person is to know their travels."
                description=""
                action={{
                  type: "internal",
                  route: "/pages/landing-pages/experience",
                  label: "see my resume",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="person"
                  title="A little about who I am"
                  description="Get to know me on my About Me section."
                />
                <br />
                <MKButton color="dark" component={Link} to={"/pages/landing-pages/about-me"}>
                  About me
                </MKButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="construction"
                  title="Projects"
                  description="See the things I have been working on lately."
                />
                <br />
                <MKButton color="dark" component={Link} to={"/pages/landing-pages/projects"}>
                  Projects
                </MKButton>
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="email"
                  title="Contact & Socials"
                  description="Get in touch."
                />
                <br />
                <MKButton color="dark" component={Link} to={"/pages/landing-pages/contact"}>
                  Contact
                </MKButton>
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <DefaultInfoCard icon="ruler" title="Featured projects" description="Lorem ipsum" />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
