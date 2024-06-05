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
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Images
import bgImage from "assets/images/sunlight-through-aspens.jpg";

function Contact() {
  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.4),
                      rgba(gradients.dark.state, 0.4)
                    )}, url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="bold"
                      >
                        (+1) 828 707 6925
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="bold"
                      >
                        emackinnon100390@gmail.com
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="bold"
                      >
                        Denver, CO
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Say Hi!
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      Find me on other platforms.
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        pr={1}
                        mb={2}
                        justifyContent="start"
                        textAlign="start"
                        ml="auto"
                      >
                        <MKBox display="flex" color="white" p={1}>
                          <MKSocialButton
                            component="a"
                            href="https://www.linkedin.com/in/elliot-mackinnon-34b02194/"
                            target="_blank"
                            color="linkedin"
                            sx={{ mr: 1 }}
                            iconOnly
                          >
                            <i className="fab fa-linkedin" />
                          </MKSocialButton>
                          <MKTypography
                            component="span"
                            variant="body1"
                            color="black"
                            opacity={0.8}
                            ml={2}
                            fontWeight="bold"
                          >
                            LinkedIn
                          </MKTypography>
                        </MKBox>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        pr={1}
                        mb={2}
                        justifyContent="start"
                        textAlign="start"
                        ml="auto"
                      >
                        <MKBox display="flex" color="white" p={1}>
                          <MKSocialButton
                            component="a"
                            href="https://www.facebook.com/elliot.mackinnon"
                            target="_blank"
                            color="facebook"
                            iconOnly
                            sx={{ mr: 1 }}
                          >
                            <i className="fab fa-facebook" />
                          </MKSocialButton>
                          <MKTypography
                            component="span"
                            variant="body1"
                            color="black"
                            opacity={0.8}
                            ml={2}
                            fontWeight="bold"
                          >
                            Facebook
                          </MKTypography>
                        </MKBox>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        pr={1}
                        mb={2}
                        justifyContent="start"
                        textAlign="start"
                        ml="auto"
                      >
                        <MKBox display="flex" color="white" p={1}>
                          <MKSocialButton
                            component="a"
                            href="https://www.instagram.com/emackinnon1/"
                            target="_blank"
                            color="instagram"
                            iconOnly
                            sx={{ mr: 1 }}
                          >
                            <i className="fab fa-instagram" />
                          </MKSocialButton>
                          <MKTypography
                            component="span"
                            variant="body1"
                            color="black"
                            opacity={0.8}
                            ml={2}
                            fontWeight="bold"
                          >
                            Instagram
                          </MKTypography>
                        </MKBox>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        pr={1}
                        mb={2}
                        justifyContent="start"
                        textAlign="start"
                        ml="auto"
                      >
                        <MKBox display="flex" color="white" p={1}>
                          <MKSocialButton
                            component="a"
                            href="https://github.com/emackinnon1"
                            target="_blank"
                            color="github"
                            iconOnly
                            sx={{ mr: 1 }}
                          >
                            <i className="fab fa-github" />
                          </MKSocialButton>
                          <MKTypography
                            component="span"
                            variant="body1"
                            color="black"
                            opacity={0.8}
                            ml={2}
                            fontWeight="bold"
                          >
                            Github
                          </MKTypography>
                        </MKBox>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        pr={1}
                        mb={2}
                        justifyContent="start"
                        textAlign="start"
                        ml="auto"
                      >
                        <MKBox display="flex" color="white" p={1}>
                          <MKSocialButton
                            component="a"
                            href="https://letterboxd.com/emackinnon1/"
                            target="_blank"
                            color="slack"
                            iconOnly
                            sx={{ mr: 1 }}
                          >
                            <i className="fas fa-film" />
                          </MKSocialButton>
                          <MKTypography
                            component="span"
                            variant="body1"
                            color="black"
                            opacity={0.8}
                            ml={2}
                            fontWeight="bold"
                          >
                            Letterboxd
                          </MKTypography>
                        </MKBox>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        pr={1}
                        mb={2}
                        justifyContent="start"
                        textAlign="start"
                        ml="auto"
                      >
                        <MKBox display="flex" color="white" p={1}>
                          <MKSocialButton
                            component="a"
                            href="https://www.goodreads.com/user/show/77635448-elliot-mackinnon"
                            target="_blank"
                            color="youtube"
                            iconOnly
                            sx={{ mr: 1 }}
                          >
                            <i className="fab fa-goodreads" />
                          </MKSocialButton>
                          <MKTypography
                            component="span"
                            variant="body1"
                            color="black"
                            opacity={0.8}
                            ml={2}
                            fontWeight="bold"
                          >
                            Goodreads
                          </MKTypography>
                        </MKBox>
                      </Grid>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Contact;
