// import React, { useState, useEffect } from "react";

// const Photos = () => {
//     return (
//         <div>
//         <div className="jumbotron">
//             <h2>Photos</h2>
//             <p>Manage the images, captures in here</p>
//         </div>
//         <div className="container">
//             <h4>Gallery</h4>

//         </div>
         
//         </div>
//     );
// }

// export default Photos;
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);


const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className="jumbotron">
        <h2>Photos</h2>
        <p>Here you can manage your photos and captures photos onsite</p>
      </div>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><h4>Add new Album</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
         
         <div className="container">
         <button className="btn btn-primary">+ Add Album</button>
         <br></br>
         <h4>Albums</h4>
         <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Basement" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Landscape" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Excavator" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Basement section 1" />
            </ListItem>
          </List>
         </div>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h4>Add Photos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* demo text */}
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><h4>Capture on site</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <div className="container">
              <h5>Press + button to capture images</h5>
              <Link to={"/adddrawing/"}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                </Link>
           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
