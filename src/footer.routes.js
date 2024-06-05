// @mui icons
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import portrait from "assets/images/favicon.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Elliot Mackinnon",
    image: portrait,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/elliot-mackinnon-34b02194/",
    },
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/elliot.mackinnon",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/emackinnon1/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/emackinnon1",
    },
    {
      icon: <MenuBookIcon />,
      link: "https://www.goodreads.com/user/show/77635448-elliot-mackinnon",
    },
    {
      icon: <LocalMoviesIcon />,
      link: "https://letterboxd.com/emackinnon1/",
    },
  ],
  menus: [
    // {
    //   name: "company",
    //   items: [
    //     { name: "about me", href: "https://www.creative-tim.com/presentation" },
    //     { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
    //     { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
    //     { name: "blog", href: "https://www.creative-tim.com/blog" },
    //   ],
    // },
    // {
    //   name: "resources",
    //   items: [
    //     { name: "illustrations", href: "https://iradesign.io/" },
    //     { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
    //     { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
    //   ],
    // },
    // {
    //   name: "help & support",
    //   items: [
    //     { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
    //     { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
    //     { name: "custom development", href: "https://services.creative-tim.com/" },
    //     { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
    //   ],
    // },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
