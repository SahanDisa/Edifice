import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Icon1 from "././../../../assets/PM/photos/image1.jpg";
import Icon2 from "././../../../assets/PM/photos/image2.jpg";

import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


import { WebcamCapture } from './webcam.component';

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
      <h2>Photos</h2>
      <p>Here you can manage your photos and captures photos onsite</p>
      <hr></hr>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><h4>Albums</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
         
         <div className="container">
         <h3>Albums</h3>
         <button className="btn btn-primary">+ Add Album</button>
         <br></br>
         <h3>Album List</h3>
         <div className="container row">
            <div className="container col-3">
            <a href="/projectmanagementhome/1">
            <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Insfrastructure</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Finishing</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Plumbing</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
                <div className="container col-3">
                <a href="/projectmanagementhome/1">
                    <Card
                    bg={'secondary'}
                    text={'dark'}
                    style={{ width: '15rem' }}
                    className="mb-2"
                    >
                    <Card.Body>
                        <Card.Title><h4>Electrical</h4></Card.Title>
                        <Card.Text>
                        
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </a>
                </div>
          </div>
         </div>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h4>Add Photos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div>
        <div className="container">
        <a href="/addphoto" className="btn btn-primary">Add Photo</a>
        <hr></hr>
        </div>
        
        <div className="container">
        <h3>Recent Photos</h3>
        <div className="row">
          <div className="col-sm-6">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Icon1} />
            <Card.Body>
              <Card.Title>Image 1</Card.Title>
              <Card.Text>
               No caption
              </Card.Text>
              <Button variant="primary">view</Button>
            </Card.Body>
          </Card>
          </div>
          <div className="col-sm-6">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Icon2} />
            <Card.Body>
              <Card.Title>Image 2</Card.Title>
              <Card.Text>
                No caption
              </Card.Text>
              <Button variant="primary">view</Button>
            </Card.Body>
          </Card>
          </div>
          
        </div>
        </div>
        </div>

        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><h4>Capture on site</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {/* <div className="container">
              <h5>Press + button to capture images</h5>
              <Link to={"/adddrawing/"}>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
                </Link>
                
           </div> */}
           <WebcamCapture/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
