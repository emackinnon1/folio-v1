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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import planche from "assets/images/planche.jpg";
import tattoo from "assets/images/snake-tattoo.jpg";
import heliamphora from "assets/images/heliamphora.jpg";
import photography from "assets/images/delicate-arch.jpg";
import oktoberfest from "assets/images/oktoberfest.jpg";
import duneHikers from "assets/images/dune-hikers.jpg";
import greenhouse from "assets/images/greenhouse.jpg";
import books from "assets/images/books.jpg";

function Hobbies() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="body2" mb={6}>
            <b>Not limited to only that, I have a long list of other hobbies:</b>
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={photography}
              title="Photography"
              description="All the pictures on this website were taken by me!"
              action={{
                type: "external",
                route: "https://www.instagram.com/emackinnon1/",
                label: "See more pictures",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={heliamphora}
              title="Carnivorous Plants"
              description="I have 28 of them and counting. And yes, I feed them."
              action={{
                type: "external",
                route: "https://photos.app.goo.gl/wyoLM6dpnTZpemd87",
                color: "info",
                label: "see more of my plants",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={tattoo}
              title="Tattoos"
              description="I learned how to do them a few years back and now most of mine are self done."
              action={{
                type: "external",
                route:
                  "https://photos.google.com/share/AF1QipOmQP7wyvDD1YtoqaAT9Bhl15NMdpZPbb9s-AQCOIDsC7n3RM9iXvPGHv_Va-ZhFw?key=b3lBbUFSWW5scTZpYllERVpRNTZMZTAyREpETEt3",
                color: "info",
                label: "see more tattoos",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={planche}
              title="Health and Excercise"
              description="I am a pretty avid calisthenics enthusiast! I also grew up playing and still play a fair amount of soccer (C.O.Y.G.)"
              action={{
                type: "external",
                route: "https://www.redbull.com/in-en/complete-guide-to-calisthenics",
                color: "info",
                label: "read more about calisthenics",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={greenhouse}
              title="Projects and Tinkering"
              description="I always have several projects going at once and have built everything from automatic watering systems running on
              esp32s that water and monitor moisture levels, tables with secret compartments that
              open via linear actuators and a voice command, a vibration sensor that works up to a
              kilometer away to let me know if my motorcycle gets bumped and many others. My house
              is my workshop! Check out some of my projects."
              action={{
                type: "internal",
                route: "/pages/landing-pages/projects",
                color: "info",
                label: "check out my projects",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={oktoberfest}
              title="German"
              description="I still take lessons and try to keep it fresh. I am fairly conversational
              normally but fluency flows once I get a few German beers in me."
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={books}
              title="Reading"
              description="A few years ago I decided to break out of Sci-Fi and since then, I have had
              the joy of finding everything from Daniel Kahneman, Brian Greene, Wittgenstein, Robert
              Sapolsky, and many others. I just wish my brain had a usb drive to transfer it all in
              there and make it stick."
              action={{
                type: "external",
                route: "https://www.goodreads.com/user/show/77635448-elliot-mackinnon",
                color: "info",
                label: "my ever-growing reading list",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={duneHikers}
              title="Colorado things"
              description="Living in Colorado means I do the typical Colorado things: hiking, snowboarding,
              camping and general outdoor activities."
              action={{
                type: "external",
                route:
                  "https://www.ourescapeclause.com/best-places-to-visit-in-colorado-bucket-list/",
                color: "info",
                label: "colorado bucket list",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Hobbies;
