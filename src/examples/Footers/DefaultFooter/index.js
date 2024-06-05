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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultFooter({ content }) {
  const { brand, socials } = content;

  return (
    <MKBox component="footer">
      <Container>
        <MKBox>
          <MKTypography variant="h6">{brand.name}</MKTypography>
        </MKBox>
        <MKBox display="flex" alignItems="start" mt={3}>
          {socials.map(({ icon, link }, key) => (
            <MKTypography
              key={link}
              component="a"
              href={link}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              color="dark"
              opacity={0.8}
              mr={key === socials.length - 1 ? 0 : 2.5}
            >
              {icon}
            </MKTypography>
          ))}
        </MKBox>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
