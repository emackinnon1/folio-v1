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
import moment from "moment";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
// import NavbarDark from "layouts/sections/navigation/navbars/components/NavbarDark";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Hobbies from "./sections/Hobbies";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/faded-trees.jpg";

function AboutMe() {
  const today = moment();
  const birthday = moment([1990, 10, 3]);
  const age = today.diff(birthday, "years");
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              &ldquo;The unexamined life is not worth living.&ldquo;
            </MKTypography>
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              - Socrates
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container alignItems="center">
          <MKTypography variant="h2" color="text" textAlign="center">
            Who am I?
          </MKTypography>
          <br />
          <MKBox>
            <MKTypography variant="body1" color="dark" verticalAlign="center">
              Like most people my age, I am {age}. (That was a joke).
            </MKTypography>
          </MKBox>
          <MKTypography variant="body1" color="dark">
            But seriously, how do you sum yourself up? How are you supposed to enumerate the set of
            all qualities and facets, all surfaces, themselves initiates of functions of situation
            and circumstance, every infinite layer upon infinite layer of time and being and
            experience that make you, <i>you?</i> How do you describe yourself with finite,
            restrictive, meer words? Hell if I know, but here’s my best shot:
          </MKTypography>
          <br />
          <MKTypography variant="body2" color="text" verticalAlign="">
            I am chiefly in wonder. The universe is eternally wide and enthralling. There are too
            many things to learn, people to meet, philosophies to mull, natural beauties to behold,
            experiences to relish, books to read and information to gather, and phenomena of the
            world to enrapture with their sheer, utter elegance. There is not enough time in the day
            to learn all I want to know and see all I want to see; senescence has relegated me to a
            life unfulfilled in that regard. I know that, were I to live to 1000 years old, I would
            remain desiccated, a husk. Not from the parched and dried bones that come with a body in
            its twilight, but from the hole I cannot patch, the void I cannot fill, the things I’ll
            never know. It is truly invigorating to take notice of the world and the mysteries in
            it!
          </MKTypography>
          <MKTypography variant="body2" color="text">
            The series of events leading up to this point in my life have been meandering. I am from
            Atlanta, GA and lived there until my late twenties (with a brief stint in the gorgeous
            deserts of west Texas). I went to college at Georgia State University, where I studied
            what you might call neuropsych these days (a mix of psychology and neuroscience
            curriculum). I worked aimlessly at a few sales jobs afterwards but, tired of the life I
            knew, I packed my bags and moved to Munich, Germany where I was stumbling distance from
            the festival grounds of Oktoberfest for a few years. I taught English to
            kindergarten-aged children over there, realizing that I am no different from them: I
            also hate my vegetables and refuse to wear socks and shoes idoors. While being a
            shephard to a roving heard of small humans and in between solot online German lessons
            before and after work, I taught myself how to code. Wanting to learn faster, I came back
            to the States and did a frontend program at Turing in Denver, CO and got a job soon
            after doing full stack work and I haven&apos;t looked back since! Since then, I have
            been fiddling with firmware, puttering around with raspberry pi&apos;s and doing my best
            to wrap my head around anything and everything software-related. Tinkering and building
            has become a career and a hobby.
          </MKTypography>
        </Container>
        <Hobbies />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutMe;
