/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";

class SectionDownload extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Do you love this Design System!</h2>
              <h4>
                We are Working for you from sunshine till sunshine to gives you the best 
                and more ethical Designs to have you in a Spritual work. And over goals
                will keep you in a stunning moves among Others.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="primary"
                size="lg"
                href="/"
                target="_blank"
              >
                Rate us
              </Button>
              <Button
                color="primary"
                size="lg"
                href="/"
                target="_blank"
              >
                View more Portals
              </Button>
            </GridItem>
          </GridContainer>
          <br />
          <br />
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Want more?</h2>
              <h4>
                We've launched{" "}
                <a
                  href=""
                  target="_blank"
                >
                  New! Product{" "}
                </a>.It has a huge number of components, sections and example
                pages. Start Your Development With A Badass Material-UI
                nspired by Material Design.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Button
                color="rose"
                size="lg"
                href=""
                target="_blank"
              >
                Tell us
              </Button>
              <Button
                color="rose"
                size="lg"
                href=""
                target="_blank"
              >
                Get Started
              </Button>
            </GridItem>
          </GridContainer>
          <div className={classes.textCenter + " " + classes.sharingArea}>
            <GridContainer justify="center">
              <h3>Thank you for supporting us!</h3>
            </GridContainer>
            <Button color="twitter">
              <i className={classes.socials + " fab fa-twitter"} /> Tweet
            </Button>
            <Button color="facebook">
              <i className={classes.socials + " fab fa-facebook-square"} />{" "}
              Share
            </Button>
            <Button color="google">
              <i className={classes.socials + " fab fa-google-plus-g"} />Share
            </Button>
            <Button color="github">
              <i className={classes.socials + " fab fa-github"} /> Star
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionDownload);
