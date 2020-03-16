import React,{Component,useEffect,useState} from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import parse from 'html-react-parser';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Highlight from 'react-highlight'

const useStyles = makeStyles(styles);

export default function ProductSection(props) {
  const { description,avatar,...rest } = props;
  const html = description;
  console.log(html)
  const classes = useStyles();
  const codeString = '(num) => num + 1';
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          {/* <h2 className={classes.title}>Let{"'"}s talk product</h2> */}
          <div className={classes.description}>
          
          <Highlight innerHTML={true}>{html}</Highlight>
          <Highlight language="javascript">
            {`function foo() { return 'bar' }`}
          </Highlight>
          </div>
        </GridItem>
      </GridContainer>
      <div>
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer> */}
      </div>
    </div>
  );
}
