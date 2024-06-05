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

// Material Kit 2 React examples
// import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

// Images
// import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
// import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
// import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
// import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
// import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
// import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";
import python from "assets/images/logos/gray-logos/logo-python.svg";
import aws from "assets/images/logos/gray-logos/logo-aws.svg";
import git from "assets/images/logos/gray-logos/logo-git.svg";
import graphql from "assets/images/logos/gray-logos/logo-graphql.svg";
import javascript from "assets/images/logos/gray-logos/logo-javascript.svg";
import typescript from "assets/images/logos/gray-logos/logo-typescript.svg";
import postgressql from "assets/images/logos/gray-logos/logo-postgressql.svg";

function FeaturedSkills() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" spacing={3} sx={{ mb: 1 }}>
          <Grid item xs={6} md={4} lg={1.7}>
            <MKBox component="img" src={python} alt="python" width="20%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={1.7}>
            <MKBox component="img" src={git} alt="git" width="20%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={1.7}>
            <MKBox component="img" src={graphql} alt="graphql" width="20%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={1.7}>
            <MKBox component="img" src={javascript} alt="javascript" width="20%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={1.7}>
            <MKBox component="img" src={aws} alt="aws" width="20%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={1.7}>
            <MKBox component="img" src={typescript} alt="typescript" width="20%" opacity={0.7} />
          </Grid>
          <Grid item xs={6} md={4} lg={1.7}>
            <MKBox component="img" src={postgressql} alt="postgressql" width="20%" opacity={0.7} />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid container justifyContent="center" sx={{ textAlign: "center" }}></Grid> */}
      </Container>
    </MKBox>
  );
}

export default FeaturedSkills;
